# FormBuilder Deployment Guide

## Option 1: Frontend on Vercel + Backend on Railway (Recommended)

### Frontend Deployment (Vercel)
1. Push code to GitHub
2. Connect Vercel to your GitHub repo
3. Set build settings:
   - Framework: Next.js
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. Environment Variables in Vercel:
   ```
   NEXT_PUBLIC_API_URL=https://your-app.railway.app
   NEXT_PUBLIC_WS_URL=wss://your-app.railway.app
   ```

### Backend Deployment (Railway)
1. Create Railway account
2. Deploy from GitHub (backend folder)
3. Environment Variables:
   ```
   MONGO_URI=mongodb+srv://...
   MONGO_DB=formbuilder
   PORT=8080
   JWT_SECRET=your-secure-secret
   ALLOW_ORIGIN=https://your-vercel-app.vercel.app
   ```

## Option 2: Full Vercel Deployment

### Prerequisites
- Convert Go backend to Node.js serverless functions
- Update WebSocket functionality (use Pusher or similar)

### Steps
1. Move API functions to `/api` directory
2. Update environment variables
3. Deploy to Vercel

## Environment Variables Needed

### Production
- MONGO_URI: Your MongoDB Atlas connection string
- MONGO_DB: Database name
- JWT_SECRET: Secure random string
- NEXT_PUBLIC_API_URL: Backend URL
- NEXT_PUBLIC_WS_URL: WebSocket URL

## Post-Deployment
1. Update CORS settings in backend
2. Test all functionality
3. Set up monitoring
4. Configure custom domain (optional)
