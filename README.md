# Express-login-form
A simple login form built using HTML, Node.js, and Express that stores user credentials in a local JSON file.
# 🔐 LOGIN FORM WITH NODE.JS & EXPRESS

A simple login form built using **HTML (Frontend)** and **Node.js with Express.js (Backend)** that stores submitted login credentials into a local JSON file (`DATA.json`) along with timestamps.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Node Version](https://img.shields.io/badge/node-18.x-blue)

---

## 📁 Project Structure

```
2. LOGIN_FORM/
├── Backend/
│   ├── DATA.json         # Stores submitted user data
│   ├── index.js          # Express server code
│   ├── package.json      # Project metadata and dependencies
│   └── .gitignore        # Files/folders to ignore in Git
├── Frontend/
│   └── index.html        # Frontend login form
```

---

## 🚀 Features

* Simple and clean login form UI.
* Server-side handling of POST requests using Express.
* Stores login data into a JSON file with a timestamp.
* Uses `fs` module to read/write data.
* Nodemon support for auto-reload on changes.

---

## 🛠️ Technologies Used

| Technology | Description                                            |
| ---------- | ------------------------------------------------------ |
| HTML       | For creating the frontend form                         |
| Node.js    | Runtime environment for the server                     |
| Express.js | Backend framework to handle routing                    |
| fs         | Built-in Node.js module to manage file reading/writing |
| JSON       | Stores user data persistently                          |

---

## 💽 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/LOGIN_FORM.git
cd LOGIN_FORM/Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
nodemon index.js
```

Make sure the server is listening on [http://localhost:8000](http://localhost:8000)

### 4. Open the Frontend

* Navigate to `Frontend/index.html`
* Open it in your browser (You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for convenience)

---

## 📝 Sample Output (`DATA.json`)

```json
[
  {
    "username": "Ajinkya",
    "password": "hello",
    "timestamp": "2025-07-17T05:41:59.653Z"
  },
  {
    "username": "Pratik",
    "password": "pass",
    "timestamp": "2025-07-17T05:50:08.965Z"
  },
  {
    "username": "Harsh",
    "password": "bro",
    "timestamp": "2025-07-17T05:50:41.885Z"
  }
]
```

---

## 📦 .gitignore Suggestions

Add the following to `.gitignore`:

```
node_modules/
DATA.json
.env
```

---

## ❗ Note

* This project does **not implement user authentication**. It is intended as a demo to understand form submission and basic file handling with Node.js.
* For a production-grade login system, consider adding:

  * User validation
  * Hashing passwords (e.g., bcrypt)
  * Environment variable management
  * Proper error handling and response status codes

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Developed by **Madhur Biradar** as a learning project to explore backend form handling with Express.

---
