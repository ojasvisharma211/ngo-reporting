# NGO Reporting App

A MERN stack application to manage NGO monthly reports, including single report submission, bulk CSV uploads, and an admin dashboard with aggregated data.

---

## **Tech Stack**
- **Frontend:** React.js  
- **Backend:** Node.js, Express  
- **Database:** MongoDB Atlas  
- **Styling:** CSS / Bootstrap  

---

## **Features**
- Submit **single report** via form  
- Upload **CSV files** with multiple reports (processed asynchronously)  
- **Job progress UI** for CSV uploads  
- **Admin dashboard** to view monthly summaries:
  - Total NGOs Reporting  
  - Total People Helped  
  - Total Events Conducted  
  - Total Funds Utilized  

- Prevents duplicate submissions (idempotency)  
- Basic validation and error handling  

---

## **Setup Instructions**

1. **Clone the repository**

```bash
## **write up**
Project Writeup

This project is a simple NGO Reporting System built using the MERN stack (MongoDB, Express, React, Node.js). The main objective is to allow NGOs to submit monthly reports, either individually or in bulk via CSV, and to provide an admin dashboard for aggregated insights.

Architectural Decisions:
The backend is implemented using Node.js and Express with MongoDB Atlas as the database for persistent storage. Two main endpoints are provided: one for submitting single reports (/report) and another for bulk uploads (/reports/upload) which are processed asynchronously. A separate endpoint (/dashboard) aggregates monthly data for admin reporting. For CSV uploads, the system uses background processing with job IDs to avoid blocking the main thread and provide progress updates. The frontend is built with React.js, offering a clean and functional interface with form validation, file upload support, and status notifications. CORS and JSON parsing middleware are used to ensure smooth communication between frontend and backend.

Use of AI Tools:
AI-assisted tools such as GitHub Copilot were utilized to speed up repetitive coding tasks, like writing boilerplate API routes and React components. These tools helped maintain consistency and reduced manual errors.

Future Improvements:
With more time, the project could be enhanced with production-grade features such as authentication and role-based access control, improved error handling, real-time updates via WebSockets instead of polling, better data validation, and deployment optimizations for scalability. Additionally, unit and integration tests could be added to ensure reliability.

This project demonstrates a full-stack workflow, from user input to backend processing and database storage, while keeping the UI simple and the system modular and maintainable.

git clone https://github.com/yourusername/ngo-reporting.git
cd ngo-reporting

