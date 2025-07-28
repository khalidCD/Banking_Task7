# Banking Application with Node.js

A secure and responsive banking web application built with Node.js, Express, and POstGreSQL that allows users to login, perform transactions, and view account info.


## Tech Stack

**Frontend:**
- HTML, CSS, JavaScript
- Vanilla JS

**Backend:**
- Node.js
- Express.js
- PostgreSQL

**Other Tools:**
- Nodemon
- Dotenv 


# How To Do In Your Own System
**Ensure you have these installed on your system:**

## For this project, use:
```bash
Node.js: v16.x or v18.x (LTS versions)
npm: v8.x or v9.x
PostgreSQL: v12+
```

## Check installed versions
```bash
node -v  
npm -v  
psql --version  
```
**If Not Installed Then Install It.**

# Installation :
### Clone Repository
```bash
git clone https://github.com/KhalidCD/Banking_Task7.git
cd Banking_Task7
```
### Install dependencies :
```bash
npm install
```

# List of API Endpoints:
**1.POST ```/api/login```**

**What it does:**
**Authenticates a user based on ```username ```and ```password```**

**command:**
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"username":"CD1001", "password":"12121212"}'
  ```
**Expected Output (Success):**
```bash
{
  "message": "Login successful",
  "user": "CD1001"
} 
```
**2. Get User Accounts ```GET/api/accounts/:username```**

**Command:**
```bash
curl http://localhost:3000/api/accounts/CD1001 
```
**Expected Output:**
```bash
[
  {
    "account_type": "savings",
    "account_number": "123456789",
    "balance": 10000,
    "name": "khalid",
    "branch": "madurai",
    "ifsc_code": "CDBL1000",
    "bank_name": "Canara",
    "expiry": "null"
  }
]
```

# DB Configuration
**Find or create a ```.env``` file in the root of your project with this content:**
```bash
DB_USER=postgres
DB_HOST=localhost
DB_NAME=db_name
DB_PASSWORD=your_password 
DB_PORT=your_DB_port(Default 5432)
```
**Your Node.js project should use this ```.env``` file via dotenv:**
```bash
require('dotenv').config();
```
**Then use it in your DB connection code:**
```bash
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
```