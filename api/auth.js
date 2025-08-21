import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const client = new MongoClient(process.env.MONGO_URI);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, action } = req.body;
    
    try {
      await client.connect();
      const db = client.db(process.env.MONGO_DB);
      const users = db.collection('users');
      
      if (action === 'register') {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await users.insertOne({ email, password: hashedPassword });
        const token = jwt.sign({ userId: result.insertedId }, process.env.JWT_SECRET);
        res.json({ token, userId: result.insertedId });
      } else if (action === 'login') {
        const user = await users.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
          res.json({ token, userId: user._id });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    } finally {
      await client.close();
    }
  }
}
