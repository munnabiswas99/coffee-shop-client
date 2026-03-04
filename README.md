# ☕ Coffee Store Client

Frontend application for Coffee Store built with **React**, **Firebase Authentication**, and **Tailwind CSS**.

---

## 🚀 Live Site

🔗 https://coffee-shop-auth-aff53.web.app

---

## 🛠️ Technologies Used

* React
* React Router
* Firebase Authentication
* Tailwind CSS
* SweetAlert2
* Fetch API

---

## 🔥 Features

* User Authentication (Sign Up / Login)
* Add Coffee
* Update Coffee
* Delete Coffee
* View Coffee Details
* Protected Routes
* SweetAlert Notifications
* Responsive Design

---

## 📂 Project Structure

```
src/
 ├── components/
 ├── pages/
 ├── contexts/
 ├── routes/
 └── main.jsx
```

---

## 🔐 Firebase Setup

Create `.env.local` file:

```
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🌍 Deployment

Deployed using **Firebase Hosting**.

To deploy:

```bash
firebase deploy
```

---

## 🔗 Server API

Connected to:

```
https://coffee-store-server-rho-navy.vercel.app/
```

---

## 📌 Authentication Flow

1. User signs up using Firebase
2. Additional user data stored in MongoDB
3. AuthContext manages user state
4. Private routes protect pages

---

## 👨‍💻 Author

Munna Biswas

## 📜 License

This project is open-source and free to use.
