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
git clone https://github.com/yourusername/ngo-reporting.git
cd ngo-reporting

