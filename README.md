# LinkedIn Clone 💼

A **lightweight clone of LinkedIn’s post, hashtag, and feed experience** built with **React**, **Redux Toolkit**, and **Material UI**, using **Firebase** for backend services and secure user authentication.  
This project replicates the essential social networking features with a clean, modern UI and real-time updates.


## 📸 Screenshots
**Login Page**  
![Login Page](https://github.com/ragini-pandey/linkedin-clone/blob/master/public/login.png)  

**Landing Page**  
![Landing Page](https://github.com/ragini-pandey/linkedin-clone/blob/master/public/landing.png)  

## ✨ Features
- Modern React app bootstrapped with Create React App + Redux Toolkit
- Global state management with Redux
- UI components styled with Material UI
- Firebase integration for hosting (and ready for Auth/Firestore if you connect them)
- Developer-friendly project setup and scripts

## 🧰 Tech Stack
- **React** (CRA)
- **Redux + Redux Toolkit**
- **Material UI**
- **Firebase** (Hosting; optional Auth/Firestore)
- **JavaScript, HTML, CSS**

## 🗂️ Project Structure
```
linkedin-clone/
├─ public/
├─ src/
│  ├─ app/               # store setup
│  ├─ components/        # reusable UI components
│  ├─ features/          # redux slices/features
│  ├─ pages/             # route-level views
│  ├─ styles/            # global styles
│  └─ index.js           # app entry
├─ .firebaserc
├─ firebase.json
├─ package.json
└─ README.md
```
> Note: Folder names may vary slightly—organize components/slices as you prefer.

## 🔧 Getting Started

### Prerequisites
- **Node.js** (LTS recommended)
- **npm** or **yarn**
- (Optional) **Firebase** project if you plan to use Auth/Firestore/Hosting

### 1) Clone and install
```bash
git clone https://github.com/ragini-pandey/linkedin-clone.git
cd linkedin-clone
npm install
# or
yarn
```

### 2) Environment variables (if using Firebase services)
Create a `.env` file at the project root:
```bash
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
```

### 3) Run locally
```bash
npm start
# or
yarn start
```
The app will open at http://localhost:3000.

## 🧪 Scripts
```bash
npm start      # start dev server
npm test       # run tests in watch mode
npm run build  # production build
npm run eject  # CRA eject (one-way)
```

## ☁️ Deploy (Firebase Hosting)
If you want to host this app on Firebase:
1. Install the CLI: `npm i -g firebase-tools`
2. Login: `firebase login`
3. Initialize (once): `firebase init hosting` (choose existing project)
4. Build: `npm run build`
5. Deploy: `firebase deploy`

The provided `firebase.json` and `.firebaserc` are already in place, so you can deploy quickly.

## 🗺️ Roadmap Ideas
- Firebase Auth (Google sign-in)
- Firestore-backed posts, likes, comments
- Real-time updates
- Profile pages and connections
- Notifications and messaging UI
