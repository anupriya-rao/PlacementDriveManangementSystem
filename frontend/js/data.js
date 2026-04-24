/**
 * PDMS — FRONTEND ONLY (NO BACKEND)
 * Everything runs on local data
 */

(function () {

    // ── HELPERS ─────────────────────────────
    function uid(prefix) {
        return prefix + "_" + Date.now().toString(36);
    }

    function branchesMatch(a, b) {
        return String(a).toLowerCase().trim() === String(b).toLowerCase().trim();
    }

    function isEligibleForDrive(student, drive) {
        return student && drive &&
            Number(student.cgpa) >= Number(drive.minCgpa) &&
            branchesMatch(student.branch, drive.branch);
    }

    // ── DATA ────────────────────────────────
   let _students = [
  { reg: "00101032024", name: "Aakansha", email: "aakanshaverma104@gmail.com", branch: "IT", cgpa: 6.27, year: 2024 },
  { reg: "00201032024", name: "Aakriti Rajhans", email: "rajhansaakriti@gmail.com", branch: "IT", cgpa: 8.36, year: 2024 },
  { reg: "00501032024", name: "Aastha Garg", email: "gargaastha161@gmail.com", branch: "IT", cgpa: 9.23, year: 2024 },
  { reg: "00601032024", name: "Aastha Shakya", email: "aasthashakya94@gmail.com", branch: "IT", cgpa: 8.50, year: 2024 },
  { reg: "00701032024", name: "Aayushi Singh", email: "aayushisingh239@gmail.com", branch: "IT", cgpa: 9.32, year: 2024 },
  { reg: "00801032024", name: "Abhishree Bhardwaj", email: "abhishreebh.0208@gmail.com", branch: "IT", cgpa: 8.72, year: 2024 },
  { reg: "00901032024", name: "Aditi Gupta", email: "aditigupta1223@gmail.com", branch: "IT", cgpa: 9.05, year: 2024 },
  { reg: "01001032024", name: "Aditi Raj", email: "aditiraj0205@gmail.com", branch: "IT", cgpa: 9.27, year: 2024 },
  { reg: "01101032024", name: "Aditi Rana", email: "2006arana@gmail.com", branch: "IT", cgpa: 8.41, year: 2024 },
  { reg: "01201032024", name: "Akankcha Kumari", email: "akankchakumari10@gmail.com", branch: "IT", cgpa: 8.20, year: 2024 },
  { reg: "01301032024", name: "Ananshi Nayak", email: "ananshinayak2007@gmail.com", branch: "IT", cgpa: 7.86, year: 2024 },
  { reg: "01401032024", name: "Anjali Dwivedi", email: "dwivedianjali0812@gmail.com", branch: "IT", cgpa: 9.23, year: 2024 },
  { reg: "01501032024", name: "Anshika", email: "anshikamanoj07@gmail.com", branch: "IT", cgpa: 8.41, year: 2024 },
  { reg: "01601032024", name: "Anupriya", email: "anupriyarao75@gmail.com", branch: "IT", cgpa: 8.91, year: 2024 },
  { reg: "01701032024", name: "Anushka Varshney", email: "reachanushka15@gmail.com", branch: "IT", cgpa: 8.91, year: 2024 },
  { reg: "01801032024", name: "Apoorva Saraswat", email: "saraswatapoorva15@gmail.com", branch: "IT", cgpa: 8.23, year: 2024 },
  { reg: "01901032024", name: "Aradhana Dash", email: "Aradhana.d1005@gmail.com", branch: "IT", cgpa: 9.05, year: 2024 },
  { reg: "02001032024", name: "Archi", email: "archi7584@gmail.com", branch: "IT", cgpa: 9.23, year: 2024 },
  { reg: "02101032024", name: "Ariza Wasim", email: "arizawasim@gmail.com", branch: "IT", cgpa: 8.91, year: 2024 },
  { reg: "02201032024", name: "Arni Goyal", email: "arnigoyal2006@gmail.com", branch: "IT", cgpa: 9.95, year: 2024 },
  { reg: "02301032024", name: "Aviral", email: "aviralkakodia27@gmail.com", branch: "IT", cgpa: 9.09, year: 2024 },
  { reg: "02401032024", name: "Bhoomi Verma", email: "vermabhoomi183@gmail.com", branch: "IT", cgpa: 8.36, year: 2024 },
  { reg: "02501032024", name: "Bhoomika Garg", email: "bhoomikagarg2212@gmail.com", branch: "IT", cgpa: 8.77, year: 2024 },
  { reg: "02601032024", name: "Bhumika Goyal", email: "bhumi.kagoyal1402@gmail.com", branch: "IT", cgpa: 8.64, year: 2024 },
  { reg: "02701032024", name: "Bhumika", email: "bhumikaalohran@gmail.com", branch: "IT", cgpa: 5.64, year: 2024 }
];

   let _companies = [
  {
    id: "c1",
    name: "Google",
    industry: "Product Based",
    hr: "Rahul Sharma",
    email: "hr@google.com",
    contact: "9876543210"
  },
  {
    id: "c2",
    name: "Microsoft",
    industry: "Product Based",
    hr: "Neha Verma",
    email: "hr@microsoft.com",
    contact: "9876543211"
  },
  {
    id: "c3",
    name: "Amazon",
    industry: "Product Based",
    hr: "Amit Singh",
    email: "hr@amazon.com",
    contact: "9876543212"
  },
  {
    id: "c4",
    name: "Infosys",
    industry: "Service Based",
    hr: "Pooja Mehta",
    email: "hr@infosys.com",
    contact: "9876543213"
  },
  {
    id: "c5",
    name: "TCS",
    industry: "Service Based",
    hr: "Karan Patel",
    email: "hr@tcs.com",
    contact: "9876543214"
  },
  {
    id: "c6",
    name: "Wipro",
    industry: "Service Based",
    hr: "Simran Kaur",
    email: "hr@wipro.com",
    contact: "9876543215"
  },
  {
    id: "c7",
    name: "Accenture",
    industry: "Consulting",
    hr: "Arjun Nair",
    email: "hr@accenture.com",
    contact: "9876543216"
  },
  {
    id: "c8",
    name: "Capgemini",
    industry: "Consulting",
    hr: "Sneha Kapoor",
    email: "hr@capgemini.com",
    contact: "9876543217"
  },
  {
    id: "c9",
    name: "Deloitte",
    industry: "Consulting",
    hr: "Ritika Jain",
    email: "hr@deloitte.com",
    contact: "9876543218"
  },
  {
    id: "c10",
    name: "Cognizant",
    industry: "Service Based",
    hr: "Vikas Gupta",
    email: "hr@cognizant.com",
    contact: "9876543219"
  },
  {
    id: "c11",
    name: "Adobe",
    industry: "Product Based",
    hr: "Anjali Roy",
    email: "hr@adobe.com",
    contact: "9876543220"
  },
  {
    id: "c12",
    name: "Oracle",
    industry: "Product Based",
    hr: "Rohit Das",
    email: "hr@oracle.com",
    contact: "9876543221"
  },
  {
    id: "c13",
    name: "IBM",
    industry: "Service Based",
    hr: "Meera Iyer",
    email: "hr@ibm.com",
    contact: "9876543222"
  },
  {
    id: "c14",
    name: "Flipkart",
    industry: "Product Based",
    hr: "Siddharth Malhotra",
    email: "hr@flipkart.com",
    contact: "9876543223"
  },
  {
    id: "c15",
    name: "Paytm",
    industry: "FinTech",
    hr: "Nikita Sinha",
    email: "hr@paytm.com",
    contact: "9876543224"
  }
];

   let _drives = [
  { id: "d1", companyId: "c1", role: "Software Engineer", branch: "IT", minCgpa: 8.0, date: "2026-01-10" },
  { id: "d2", companyId: "c2", role: "SDE", branch: "IT", minCgpa: 8.5, date: "2026-01-15" },
  { id: "d3", companyId: "c3", role: "Backend Developer", branch: "IT", minCgpa: 7.5, date: "2026-01-20" },
  { id: "d4", companyId: "c4", role: "System Engineer", branch: "IT", minCgpa: 6.5, date: "2026-01-25" },
  { id: "d5", companyId: "c5", role: "Assistant System Engineer", branch: "IT", minCgpa: 6.0, date: "2026-01-28" },

  { id: "d6", companyId: "c6", role: "Project Engineer", branch: "IT", minCgpa: 6.5, date: "2026-02-02" },
  { id: "d7", companyId: "c7", role: "Associate Software Engineer", branch: "IT", minCgpa: 7.0, date: "2026-02-05" },
  { id: "d8", companyId: "c8", role: "Analyst", branch: "IT", minCgpa: 6.8, date: "2026-02-08" },
  { id: "d9", companyId: "c9", role: "Consultant", branch: "IT", minCgpa: 7.5, date: "2026-02-12" },
  { id: "d10", companyId: "c10", role: "Programmer Analyst", branch: "IT", minCgpa: 6.2, date: "2026-02-15" },

  { id: "d11", companyId: "c11", role: "Software Developer", branch: "IT", minCgpa: 9.0, date: "2026-02-18" },
  { id: "d12", companyId: "c12", role: "Database Engineer", branch: "IT", minCgpa: 8.0, date: "2026-02-20" },
  { id: "d13", companyId: "c13", role: "System Analyst", branch: "IT", minCgpa: 7.0, date: "2026-02-22" },
  { id: "d14", companyId: "c14", role: "Frontend Developer", branch: "IT", minCgpa: 8.2, date: "2026-02-25" },
  { id: "d15", companyId: "c15", role: "Full Stack Developer", branch: "IT", minCgpa: 7.8, date: "2026-02-28" }
];

    let _applications = [
  { student: "Aakansha", drive: "Google - Software Engineer", status: "Applied" },
  { student: "Aakriti Rajhans", drive: "Google - Software Engineer", status: "Shortlisted" },
  { student: "Aastha Garg", drive: "Microsoft - SDE", status: "Rejected" },
  { student: "Aastha Shakya", drive: "Amazon - Backend Developer", status: "Applied" },
  { student: "Aayushi Singh", drive: "Microsoft - SDE", status: "Selected" },

  { student: "Abhishree Bhardwaj", drive: "Google - Software Engineer", status: "Applied" },
  { student: "Aditi Gupta", drive: "Infosys - System Engineer", status: "Shortlisted" },
  { student: "Aditi Raj", drive: "Amazon - Backend Developer", status: "Applied" },
  { student: "Aditi Rana", drive: "Microsoft - SDE", status: "Rejected" },
  { student: "Akankcha Kumari", drive: "TCS - Assistant System Engineer", status: "Applied" },

  { student: "Ananshi Nayak", drive: "Google - Software Engineer", status: "Selected" },
  { student: "Anjali Dwivedi", drive: "Infosys - System Engineer", status: "Applied" },
  { student: "Anshika", drive: "TCS - Assistant System Engineer", status: "Shortlisted" },
  { student: "Anupriya", drive: "Amazon - Backend Developer", status: "Selected" },
  { student: "Anushka Varshney", drive: "Microsoft - SDE", status: "Applied" },

  { student: "Apoorva Saraswat", drive: "Infosys - System Engineer", status: "Rejected" },
  { student: "Aradhana Dash", drive: "Google - Software Engineer", status: "Shortlisted" },
  { student: "Archi", drive: "TCS - Assistant System Engineer", status: "Applied" },
  { student: "Ariza Wasim", drive: "Microsoft - SDE", status: "Selected" },
  { student: "Arni Goyal", drive: "Amazon - Backend Developer", status: "Applied" },

  { student: "Aviral", drive: "Infosys - System Engineer", status: "Shortlisted" },
  { student: "Bhoomi Verma", drive: "TCS - Assistant System Engineer", status: "Rejected" },
  { student: "Bhoomika Garg", drive: "Google - Software Engineer", status: "Selected" },
  { student: "Bhumika Goyal", drive: "Microsoft - SDE", status: "Applied" },
  { student: "Bhumika Gautam", drive: "Amazon - Backend Developer", status: "Shortlisted" }
];

    let _results = [
  { id: "r1", reg: "01401032024", companyId: "c2", package: "28 LPA" },
  { id: "r2", reg: "01601032024", companyId: "c1", package: "30 LPA" },
  { id: "r3", reg: "00701032024", companyId: "c3", package: "26 LPA" },
  { id: "r4", reg: "00201032024", companyId: "c11", package: "32 LPA" },
  { id: "r5", reg: "01301032024", companyId: "c14", package: "22 LPA" },
  { id: "r6", reg: "02101032024", companyId: "c9", package: "8 LPA" },
  { id: "r7", reg: "02501032024", companyId: "c3", package: "26 LPA" },
  { id: "r8", reg: "01701032024", companyId: "c7", package: "7 LPA" },
  { id: "r9", reg: "01001032024", companyId: "c12", package: "20 LPA" },
  { id: "r10", reg: "01901032024", companyId: "c6", package: "5.5 LPA" }
];
    let _skills = [
  { reg: "00101032024", skill: "Python" },
  { reg: "00101032024", skill: "SQL" },

  { reg: "00201032024", skill: "Java" },
  { reg: "00201032024", skill: "DBMS" },

  { reg: "00501032024", skill: "C++" },
  { reg: "00501032024", skill: "DSA" },

  { reg: "00601032024", skill: "JavaScript" },
  { reg: "00601032024", skill: "React" },

  { reg: "00701032024", skill: "Machine Learning" },
  { reg: "00701032024", skill: "Python" },

  { reg: "00801032024", skill: "HTML" },
  { reg: "00801032024", skill: "CSS" },

  { reg: "00901032024", skill: "Node.js" },
  { reg: "00901032024", skill: "MongoDB" },

  { reg: "01001032024", skill: "Data Science" },
  { reg: "01001032024", skill: "Python" },

  { reg: "01101032024", skill: "C" },
  { reg: "01101032024", skill: "Operating Systems" },

  { reg: "01201032024", skill: "Cyber Security" },
  { reg: "01201032024", skill: "Networking" },

  { reg: "01301032024", skill: "Cloud Computing" },
  { reg: "01301032024", skill: "AWS" },

  { reg: "01401032024", skill: "Android Dev" },
  { reg: "01401032024", skill: "Kotlin" },

  { reg: "01501032024", skill: "UI/UX" },
  { reg: "01501032024", skill: "Figma" },

  { reg: "01601032024", skill: "Python" },
  { reg: "01601032024", skill: "AI" },

  { reg: "01701032024", skill: "Web Dev" },
  { reg: "01701032024", skill: "React" },

  { reg: "01801032024", skill: "SQL" },
  { reg: "01801032024", skill: "Data Analysis" },

  { reg: "01901032024", skill: "Java" },
  { reg: "01901032024", skill: "Spring Boot" },

  { reg: "02001032024", skill: "Testing" },
  { reg: "02001032024", skill: "Automation" },

  { reg: "02101032024", skill: "DevOps" },
  { reg: "02101032024", skill: "Docker" },

  { reg: "02201032024", skill: "AI" },
  { reg: "02201032024", skill: "Deep Learning" },

  { reg: "02301032024", skill: "Blockchain" },
  { reg: "02301032024", skill: "Solidity" },

  { reg: "02401032024", skill: "C++" },
  { reg: "02401032024", skill: "Competitive Programming" },

  { reg: "02501032024", skill: "Full Stack" },
  { reg: "02501032024", skill: "MERN" }
];
    // ── STUDENTS ────────────────────────────
    function getStudents() { return _students; }

    function studentByReg(reg) {
        return _students.find(s => s.reg === reg);
    }

    function saveStudentAdd(student) {
        _students.push(student);
        return { ok: true };
    }

    function saveStudentDelete(reg) {
        _students = _students.filter(s => s.reg !== reg);
        return { ok: true };
    }

    function saveStudents(list) {
        _students = list;
    }

    // ── SKILLS ──────────────────────────────
    function getSkills() { return _skills; }

    function saveSkillAdd(reg, skill) {
        _skills.push({ reg, skill });
        return { ok: true };
    }

    function saveSkillDelete(reg, skill) {
        _skills = _skills.filter(s => !(s.reg === reg && s.skill === skill));
        return { ok: true };
    }

    function saveSkills(list) {
        _skills = list;
    }

    // ── COMPANIES ───────────────────────────
    function getCompanies() { return _companies; }

    function companyById(id) {
        return _companies.find(c => c.id === id);
    }

    function saveCompanyAdd(company) {
        _companies.push(company);
        return { ok: true };
    }

    function saveCompanies(list) {
        _companies = list;
    }

    // ── DRIVES ──────────────────────────────
    function getDrives() { return _drives; }

    function driveById(id) {
        return _drives.find(d => d.id === id);
    }

    function saveDriveAdd(drive) {
        _drives.push(drive);
        return { ok: true };
    }

    function saveDrives(list) {
        _drives = list;
    }

    // ── APPLICATIONS ────────────────────────
    function getApplications() { return _applications; }

    function saveApplicationAdd(app) {
        app.id = uid("a");
        _applications.push(app);
        return { ok: true };
    }

    function saveApplicationStatus(id, status) {
        const app = _applications.find(a => a.id === id);
        if (app) app.status = status;
        return { ok: true };
    }

    function saveApplications(list) {
        _applications = list;
    }

    // ── RESULTS ─────────────────────────────
    function getResults() { return _results; }

    function saveResultAdd(result) {
        result.id = uid("r");
        _results.push(result);
        return { ok: true };
    }

    function saveResults(list) {
        _results = list;
    }

    // ── EXPORT ──────────────────────────────
    window.PDMS = {
        uid,
        branchesMatch,
        isEligibleForDrive,

        getStudents, studentByReg, saveStudents,
        saveStudentAdd, saveStudentDelete,

        getSkills, saveSkills, saveSkillAdd, saveSkillDelete,

        getCompanies, companyById, saveCompanies, saveCompanyAdd,

        getDrives, driveById, saveDrives, saveDriveAdd,

        getApplications, saveApplications,
        saveApplicationAdd, saveApplicationStatus,

        getResults, saveResults, saveResultAdd
    };

})();