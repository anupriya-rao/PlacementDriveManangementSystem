# 🎓 Placement Drive Management System (PDMS)

> An admin-controlled placement workflow system built as a Database Systems (DBS) project.

---

## 👩‍💻 Author

**Anupriya Rao**

GitHub: [@anupriya-rao](https://github.com/anupriya-rao)

---

## 📌 Overview

PDMS is a web-based Placement Drive Management System that gives college placement coordinators full control over the entire placement workflow — managing students, companies, drives, applications, and results — all from a single admin dashboard.

No student login. No company login. Just clean, centralized admin control.

---

## ✨ Features

| Module | Description |
|--------|-------------|
| 👩‍🎓 **Student Management** | Add, edit, and track student profiles, academic records, and placement eligibility |
| 🏢 **Company Directory** | Maintain a database of recruiting companies, contacts, and job descriptions |
| 📅 **Drive Scheduling** | Create and manage placement drives with eligibility filters and student shortlisting |
| 📊 **Results & Analytics** | Record placement outcomes and generate branch-wise or company-wise reports |

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge)
- A local server (optional, for DB integration)

### Running Locally

```bash
# Clone the repository
git clone https://github.com/anupriya-rao/PDMS.git

# Navigate into the project directory
cd PDMS

# Open in browser
open index.html
# or just double-click index.html
```

If using a backend / virtual environment:

```bash
. .venv/bin/activate
python -m http.server 8000
# Visit http://localhost:8000
```

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Database:** (Add yours — MySQL / PostgreSQL / SQLite)
- **Backend:** (Add yours — Flask / Node.js / PHP)

---

## 📸 Screenshots

> _Add screenshots of the landing page, dashboard, and modules here._

---

## 📋 Database Schema (Overview)

```
Students      → student_id, name, branch, cgpa, status
Companies     → company_id, name, contact, package, domain
Drives        → drive_id, company_id, date, eligibility_criteria
Applications  → app_id, student_id, drive_id, round, status
Results       → result_id, student_id, drive_id, offer_status
```

---

## 🤝 Contributing

This is a personal academic project. Feel free to fork it and build on top of it.

```bash
# Fork → Clone → Create a branch → Make changes → Open a PR
git checkout -b feature/your-feature-name
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- Built as part of the **Database Systems (DBS)** course project
- Inspired by the pain of managing placement drives in spreadsheets

---

<p align="center">Made with love by <a href="https://github.com/anupriya-rao">Anupriya Rao</a></p>
