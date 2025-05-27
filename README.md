# employee-directory-app
A complete MERN (MongoDB, Express, React, Node.js) stack application for managing employee records with department filtering.

---

## 📁 File Structure

```
my-fullstack-app/
├── backend/
│   ├── models/
│   │   └── employee.js         # Database schema
│   ├── routes/
│   │   └── employeeRoutes.js   # API endpoints
│   ├── server.js               # Express server
│   └── package.json            # Backend dependencies
└── frontend/
    ├── src/
    │   ├── components/         # React components
    │   │   ├── Home.js
    │   │   ├── Employees.js
    │   │   └── Department.js
    │   ├── App.js              # Main app
    │   └── index.js            # Entry point
    └── package.json            # Frontend dependencies
```

---

## 🚀 Setup Instructions

### 1. Install Dependencies

Make sure you have **Node.js** and **MongoDB** installed locally.

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

---

### 2. Configure MongoDB

Start MongoDB locally or use MongoDB Atlas.

Ensure the connection string in `backend/server.js` is correctly set:

```javascript
mongoose.connect('mongodb+srv://oabusamadubung41:oabusa123@employeesdb.g92xqcp.mongodb.net/?retryWrites=true&w=majority&appName=employeesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

---

### 3. Run the Application

Start the backend and frontend in separate terminal windows:

```bash
# Terminal 1 - Backend (http://localhost:5000)
cd backend
npm run dev

# Terminal 2 - Frontend (http://localhost:3000)
cd ../frontend
npm start
```

---

## 🔧 Features

- ✅ View all employees → `GET /api/employees`
- 🔍 Filter by department → `GET /api/employees?department=engineering`
- ➕ Add a new employee → `POST /api/employees`
- ✏️ Update employee record → `PUT /api/employees/:id`
- ❌ Delete an employee → `DELETE /api/employees/:id`

---

## 🧪 Testing Guide

### Backend
Use [REST client] for testing

**Example POST Request:**

```http
POST http://localhost:5000/api/employees
Content-Type: application/json

{
  "name": "Sarah",
  "surname": "Connor",
  "gender": "Female",
  "department": "security",
  "salary": 85000
}
```

### Frontend
Open your browser and go to:

```
http://localhost:3000
```

Verify UI and API interactions.

---

## ⚠️ Important Notes

- `node_modules` folders are **not included** — run `npm install` as shown above.
- MongoDB must be running before starting the backend server.
- Use `Ctrl + C` in each terminal to stop the servers.
- Make sure your backend is running before using the frontend interface.

---

## 📄 License

This project is licensed for educational and developmental use.
