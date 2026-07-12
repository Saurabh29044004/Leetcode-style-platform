<div align="center">

# 🚀 AI-Powered LeetCode Style Coding Platform

A full-stack coding platform inspired by LeetCode where users can solve coding problems, execute code online, track submissions, and get AI-powered coding assistance.

[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)](https://redis.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[🌐 Live Demo](https://leetcode-style-platform.vercel.app) &nbsp;·&nbsp; [📂 GitHub Repository](https://github.com/Saurabh29044004/Leetcode-style-platform)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Folder Structure](#-folder-structure)
- [Installation](#️-installation)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [Support](#-support)

---

## 📌 About the Project

This platform replicates the core experience of competitive coding websites like LeetCode — allowing users to browse problems, write and execute code in multiple languages, receive instant feedback through visible and hidden test cases, and track their progress over time. It also integrates an AI coding assistant to help users understand problems better and improve their solutions.

Built as a complete end-to-end system covering authentication, an online judge integration, an admin panel for content management, and a real-time code execution pipeline.

---

## ✨ Features

### 👤 User Authentication
- Secure Login & Signup
- JWT Authentication
- Protected Routes
- Cookie-based Authentication

### 💻 Online Code Execution
- Run code instantly
- Submit solutions
- Multiple programming language support
- Hidden & Visible Test Cases
- Judge0 API Integration

### 🤖 AI Coding Assistant
- Gemini AI Integration
- Ask coding doubts
- Get optimized solutions
- Code explanations

### 📊 User Dashboard
- Problems Solved
- Total Submissions
- Acceptance Rate
- Easy / Medium / Hard Statistics
- Recent Submissions

### 👨‍💼 Admin Panel
- Add Coding Problems
- Update Problems
- Delete Problems
- Manage Test Cases

---

## 🛠 Tech Stack

<table>
<tr>
<td valign="top" width="33%">

**Frontend**
- React.js
- React Router
- Redux Toolkit
- Tailwind CSS
- DaisyUI
- Axios

</td>
<td valign="top" width="33%">

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis
- JWT Authentication

</td>
<td valign="top" width="33%">

**APIs & Services**
- Judge0 API
- Google Gemini AI
- Cloudinary
- MongoDB Atlas

</td>
</tr>
</table>

---

## 📸 Screenshots

![Home](screenshots/signup.png)
![Problems](screenshots/problems.png)
![Judge0](screenshots/judge.png)
![AI Chat](screenshots/chat-room.png)
![Video Solution](screenshots/video-solution.png)
![Dashboard](screenshots/dashboard.png)
---

## 📂 Folder Structure

```
Leetcode-style-platform/
├── backend/          # Express server, APIs, DB models, Judge0 & Gemini integration
├── frontend/         # React app, components, pages, Redux store
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Saurabh29044004/Leetcode-style-platform.git
cd Leetcode-style-platform
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port) and the backend on the port defined in your `.env` file.

---

## 🔐 Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=
DB_CONNECT_STRING=
JWT_KEY=
REDIS_PASS=
JUDGE0_KEY=
JUDGE0_URL=
GEMINI_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_BACKEND_URL=
```

> ⚠️ Never commit your `.env` files. Make sure they are listed in `.gitignore`.

---

## 🚀 Deployment

| Layer | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## 📈 Future Improvements

- [ ] Coding Contests
- [ ] Leaderboard
- [ ] Discussion Forum
- [ ] Friend System
- [ ] Notifications
- [ ] Company-wise Questions
- [ ] Premium Problem Sets

---

## 👨‍💻 Author

**Saurabh Gupta**
B.Tech Computer Science
IIIT Bhagalpur

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/Saurabh29044004)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](www.linkedin.com/in/saurabhgupta523)

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
It really helps and motivates me to build more projects.
