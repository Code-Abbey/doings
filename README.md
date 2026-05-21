# SSC2025_CCL_CC241033
# Doings! – Team Task Management App

A lightweight, full-stack task management tool for small teams, featuring role-based dashboards, real-time checklist progress, and Excel report export.

---

## 🚀 Features

- **Admin Dashboard** with charts and stats
- **Task Creation** (deadlines, checklists, attachments)
- **Real-Time Progress** via dynamic checklists
- **Excel Export** of task reports
- **Role-Based Access** (Admin vs. User)
- **Public Landing Page** with Call-To-Action
- **Secure Auth** with JWT + HTTP-only cookies

---

## 📦 Getting Started

### Prerequisites

- [Node.js (>=14)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A MongoDB Atlas cluster (free tier OK)

### Installation

1. **Clone the repo**

  - git clone [https://git.nwt.fhstp.ac.at/ssc2025/ssc2025_ccl_cc241033.git](https://git.nwt.fhstp.ac.at/ssc2025/ssc2025_ccl_cc241033.git/)
  - cd ssc2025_ccl_cc241033

2. **Backend**

   ```bash
   cd backend
   npm install
   cp .env.example .env   # fill in MONGO_URI, JWT_SECRET, PORT
   npm run dev
   ```

3. **Frontend**

   ```bash
   cd ../frontend/Doings
   npm install
   npm run dev
   ```

   Visit [http://localhost:5173](http://localhost:5173) (or the port shown) in your browser.

---

## 🖠 Usage

1. **Landing Page** – choose “Login” or “Sign Up”
2. **Admin** – create/assign tasks, view team dashboard, export reports
3. **User** – view “My Tasks,” update checklist items
4. **Real-Time Sync** – Admin dashboard updates as Users check off todos

---

## 🤝 Contributing & Git Best Practices

- **Branching:**

  - `main` for production-ready code
  - `develop` for integration
  - `feature/<short-description>` for new features
  - `fix/<issue-number>` for bug fixes

- **Commits:**\
  Use [Conventional Commits](https://www.conventionalcommits.org/), e.g.:

  ```
  feat: add task checklist progress
  fix: correct user-dashboard loading error
  chore: update README with setup instructions
  ```

- **Pull Requests:**

  - Target `develop` branch
  - Reference issue numbers (e.g. `Fixes #12`)
  

---

## 📄 License

This project is licensed under the MIT License. 

---

## 📬 Contact

This project is my Creative Code Lab (CCL) 2nd Semester Project at St. Polten University of Apllied Sciences, Austria July 2025 – feel free to open issues or reach out at [biodun.adefusi@gmail.com](mailto\:biodun.adefusi@gmail.com)
