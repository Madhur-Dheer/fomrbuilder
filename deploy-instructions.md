# FormBuilder Deployment Instructions

## 1. Deploy Backend to Railway

### Setup Railway Account
1. Go to https://railway.app and sign up
2. Connect your GitHub account

### Deploy Backend
1. Push your code to GitHub
2. In Railway dashboard, click "New Project" → "Deploy from GitHub repo"
3. Select your FormBuilder repository
4. Choose "backend" folder as root directory
5. Railway will auto-detect Dockerfile and deploy

### Set Environment Variables in Railway
```
MONGO_URI=mongodb+srv://yashshreeanil:htBya8gQBLwpqCku@formbuilder.qr5ibop.mongodb.net/?retryWrites=true&w=majority&appName=formbuilder
MONGO_DB=formbuilder
PORT=8080
JWT_SECRET=your-super-secure-jwt-secret-change-this
ALLOW_ORIGIN=https://your-app-name.vercel.app
```

### Get Railway URL
- After deployment, Railway will provide a URL like: `https://your-app.railway.app`
- Copy this URL for frontend configuration

## 2. Deploy Frontend to Vercel

### Setup Vercel Account
1. Go to https://vercel.com and sign up
2. Connect your GitHub account

### Deploy Frontend
1. In Vercel dashboard, click "New Project"
2. Import your GitHub repository
3. Set Framework Preset: "Next.js"
4. Set Root Directory: "frontend"
5. Click "Deploy"

### Set Environment Variables in Vercel
```
NEXT_PUBLIC_API_URL=https://your-railway-app.railway.app
NEXT_PUBLIC_WS_URL=wss://your-railway-app.railway.app
```

## 3. Update CORS Settings

After getting your Vercel URL (e.g., `https://formbuilder-xyz.vercel.app`):
1. Go back to Railway dashboard
2. Update the `ALLOW_ORIGIN` environment variable to your Vercel URL
3. Redeploy the backend

## 4. Test Deployment

1. Visit your Vercel URL
2. Test user registration/login
3. Test form creation and submission
4. Verify real-time analytics work

## Troubleshooting

### Backend Issues
- Check Railway logs for errors
- Verify MongoDB connection string
- Ensure all environment variables are set

### Frontend Issues
- Check Vercel function logs
- Verify API URLs in environment variables
- Test API endpoints directly

### CORS Issues
- Ensure ALLOW_ORIGIN matches your Vercel domain exactly
- Include both http and https if testing locally
