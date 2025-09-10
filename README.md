# 📸 Instagram Clone (React)

A fully functional **Instagram Clone** built with **React.js** that replicates the core features of Instagram:  
viewing stories, posts, profiles, and following/unfollowing users — all with a responsive layout.

---

## 🚀 Features

- 🏠 **Home Feed**
  - Displays posts with user info, likes, and captions.
  - Like, comment, and share icons (UI only).
  
- 📖 **Stories**
  - Fetches stories from an API.
  - Click a story to navigate between all stories dynamically.

- 👤 **Profile**
  - View and update profile information (username & profile picture).
  - Shows list of followers with **unfollow** functionality.

- 🤝 **Suggestions**
  - Displays suggested users to follow.
  - Follow button updates backend (via POST request).

- 🖼️ **Sidebar Navigation**
  - Instagram-like sidebar with navigation icons for Home, Search, Explore, Reels, Messages, Notifications, Create, and Profile.

- ⚡ **Dynamic Data Fetching**
  - Fetches all data (`stories`, `posts`, `profile`, `followers`, `suggestions`) from `json-server` or an API.
  - Updates UI automatically on state change (React Hooks).

- 🔄 **Routing**
  - Uses `react-router-dom` for navigating between feed, story view, and profile.

---

## 🛠️ Tech Stack

- **React.js** – Frontend framework
- **React Router DOM** – Navigation & dynamic routing
- **Axios / Fetch API** – HTTP requests
- **Bootstrap / Custom CSS** – Styling & layout
- **json-server** (for development) – Mock API backend

---

## 📂 Project Structure

Instagram-Clone/
├── src/
│ ├── components/
│ │ ├── App.jsx
│ │ ├── Sidebar.jsx
│ │ ├── Feed.jsx
│ │ ├── Stories.jsx
│ │ ├── Posts.jsx
│ │ ├── Suggestions.jsx
│ │ ├── Profile.jsx
│ │ └── ViewStory.jsx
│ ├── assets/
│ │ └── Instagram_logo.svg (logo)
│ └── index.js
├── db.json # (for json-server, if used)
├── package.json
└── README.md


---

## ⚡ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/instagram-clone.git
cd instagram-clone

Install dependencies

npm install

Start json-server (mock API)

npx json-server --watch db.json --port 3000

Start the React app

npm start

App will run at http://localhost:5173/
 (or as configured in Vite).