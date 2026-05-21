## 1. Hosting Setup

Doings! is a Task Management Web App. it's deployed as a full-stack application 

### Where and how is the app hosted?

I hosted my app on the FHSTP Campus Cloud using a Node.js environment for both the frontend and backend. I connected to the server instance using FileZilla, uploaded all the necessary files, and made sure that both environments were properly structured.

For the **frontend**, I built the React project using Vite and placed the build output inside the Campus Cloud’s public_html directory so it can be publicly accessed.

For the **backend**, I set it up to run as a standalone Express.js server connected to MongoDB Atlas. I configured the server to run on port 8000 and pointed the correct path in the Campus Cloud's project settings.

### Tools & Services Used

- Backend: Node.js, Express.js
- Frontend: React.js with Vite
- Database: MongoDB Atlas
- Authentication: JWT & Cookies
- Design: Figma
- File Transfer: FileZilla
- Hosting: FHSTP Campus Cloud Node.js Instance


### Deployment Workflow

- **frontend**  
cd frontend/Doings
npm install
npm run build

This generated a production-ready **dist/** folder.

I then copied the contents of the dist folder into the Campus Cloud's public_html directory using FileZilla. This way, the React app could be accessed directly through the browser via the working URL.

**Backend & Database Notes**
- Node.js + Express.js server
- MongoDB Atlas with Mongoose ODM
- .env holds credentials like:
    - MONGO_URI
    - JWT_SECRET
- Auth is JWT-based with secure cookies

The server was structured in its own /backend folder. Before uploading, I removed the node_modules folder to reduce upload size.
On Campus Cloud, I set the working directory to /node/backend, selected port 8000, and defined the startup command:
node server.js
All secrets such as `MONGO_URI`, `JWT_SECRET`, and `API_BASE_URL` are stored in secure environment variables.


### Working Access Link
 https://cc241017-10817.node.fhstp.cc

This URL points to the deployed frontend. The app begins with a Landing Page with a Call-To-Action (CTA), allowing users to log in or sign up.


## Project Architecture

The application is organized into two separate modules: **backend** and **frontend**, following the MVC (Model-View-Controller) pattern on the server side and a modular, component-based approach in the client.

### Backend Structure (`/backend`)
```bash
/backend/
  ├── controllers/
  ├── routes/
  ├── middlewares/
  ├── models/
  ├── routes/
  ├── uploads/
  ├── .env
  ├── package-lock.json
  ├── package.json
  └── server.js
```

### Backend Structure (`/backend`)
```bash
/frontend/Doings/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── context/
  │   ├── hooks/
  │   ├── pages/
  │   ├── routes/
  │   ├── utils/
  │   └── context/
  │   ├── App.jsx
  │   ├── index.css
  │   ├── main.jsx
  ├── eslint.config.js
  ├── index.html
  ├── package-lock.json
  ├── package.json
  └── vite.config.js
```

### 🧩 What problem does the app solve?

**Doings** helps small teams avoid disorganized task workflows. It supports:
- Task assignment from lead to member
- Real-time checklist progress tracking
- Role-specific dashboards (Admin vs. User)
- Clear visual overviews of progress
- Visual summary of workload (charts & stats)

It's especially helpful for small teams or student project groups managing multiple deliverables.

### 🔍 What features should be tested?

- JWT-based login & registration flow
- Role-based access (Admin vs. User)
- Task creation with checklist & attachments (Admin only)
- User dashboard showing assigned tasks
- Dashboard charts with task summaries
- File upload and checklist progress tracking
- Mobile responsiveness and navigation flow
- Public landing page before authentication


### What is the main user flow?

1. **Landing Page:** with call-to-action.
2. **Authentication:** Users can register or log in either as a user or Admin using the Admin token 
3. **Role-Based Redirection:**
   - Admins are redirected to the Admin Dashboard
   - Users are redirected to the User Dashboard
4. **Task Management:**
   - Admins create and assign tasks with deadlines, checklists, and file uploads
   - Users view their assigned tasks and update checklist progress
5. **Logout:** Ends the session and redirects to the landing page



### Key Design Decisions

-  **Component-based UI:** Clean, reusable components with Tailwind utility classes.
-  **Role-based routing:** Navigation protected with React Router + context auth.
-  **Landing page experience:** First-time visitors are greeted with a call-to-action.
-  **Visual dashboards:** Users and admins get tailored dashboards with insights.
-  **Checklist logic:** Each task supports progress tracking through a dynamic checklist array.



### Known Issues / Limitations

- No password reset or email verification
- No task filters or priority sorting yet
- User deletion only via DB admin

