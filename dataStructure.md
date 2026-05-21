
# 📊 Project Data Structure

This document outlines the custom data structure used in the backend of my project. It includes two main models: `User` and `Task`.

---
## API Documentation

https://documenter.getpostman.com/view/42919910/2sB2x6nYJ3

## 👤 User Model

Represents users of the system (e.g., admins or regular users).

| Field       | Type    | Required | Description                     |
|-------------|---------|----------|---------------------------------|
| `username`  | String  | ✅        | Unique username                 |
| `email`     | String  | ✅        | User's email address            |
| `password`  | String  | ✅        | Encrypted password              |
| `role`      | String  | ❌        | User role (e.g. admin, user)    |
| `createdAt` | Date    | ✅        | Auto-generated timestamp        |

### Sample JSON

```json
{
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "hashed_password",
  "role": "admin",
  "createdAt": "2025-06-12T12:00:00Z"
}
```

---

## ✅ Task Model

Used for creating and managing project tasks assigned to users.

| Field        | Type     | Required | Description                          |
|--------------|----------|----------|--------------------------------------|
| `title`      | String   | ✅        | Title of the task                    |
| `description`| String   | ❌        | Details about the task               |
| `status`     | String   | ✅        | Task status: pending, in progress... |
| `assignedTo` | ObjectId | ❌        | Reference to the `User` model        |
| `createdAt`  | Date     | ✅        | Auto-generated timestamp             |
| `dueDate`    | Date     | ❌        | Optional deadline                    |

### Sample JSON

```json
{
  "title": "Create API endpoints",
  "description": "Build authentication routes",
  "status": "in progress",
  "assignedTo": "64dabbcd1234567890abcd12",
  "createdAt": "2025-06-12T12:00:00Z",
  "dueDate": "2025-06-20"
}
```

---

## 🧩 Notes

- The `password` is hashed using bcrypt before being saved.
- `assignedTo` uses MongoDB `ObjectId` to reference users.
- `createdAt` is generated automatically using Mongoose timestamps.
