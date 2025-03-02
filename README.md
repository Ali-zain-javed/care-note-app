# Care Notes App

This project is a **React-based Care Notes application** with offline-first support using **PouchDB**, a mock backend with **Express.js**, and global state management using **Redux Toolkit**. The app allows users to create, save, and retrieve care notes, even when offline.

## 🚀 Features

- **Offline-first architecture** (PouchDB stores notes locally when offline)
- **Redux Toolkit** for global state management
- **Express.js backend** (Mock API using a JSON file)
- **Auto-sync every 60 seconds** (fetches new notes from the backend)
- **Error handling** for API failures, and toast for error showing

---

## **Setup & Installation**

### 1️⃣ **Clone the Repository**

```sh
 git clone https://github.com/Ali-zain-javed/care-note-app.git
 cd care-note-app
```

### 2️⃣ **Install Dependencies**

Run the following command inside the project directory:

```sh
 npm install
```

Or if using Yarn:

```sh
 yarn install
```

### 3️⃣ **Start the Backend Server**

```sh
 cd backend
 npm install
 cd ts-node server.ts
```

OR

```sh
yarn ts-node backend/server.ts   # Runs Node app at http://localhost:3001
```

### 4️⃣ **Start the Frontend Application**

```sh
 yarn start   # Runs React app at http://localhost:3000
```

---

## **Assumptions & Design Decisions**

- **PouchDB is only used in the frontend** for offline support.
- **Redux only stores the last 5 notes** (most recent ones).
- **Data syncs every 60 seconds** to ensure the latest notes are available.
- **Backend is mock-based** (uses a JSON file instead of a real database).

---

## **Possible Improvements**

🔹 **Real Database Integration** → Use MongoDB or PostgreSQL instead of a mock JSON file.
🔹 **UI/UX Enhancements** → Improve design and accessibility.
🔹 **Push Notifications** → Notify users when new notes are available.
