(function () {

    // ── helpers ─────────────────────────
    function uid(prefix) {
        return prefix + "_" + Date.now().toString(36);
    }

    function branchesMatch(a, b) {
        return String(a).toLowerCase() === String(b).toLowerCase();
    }

    function isEligibleForDrive(student, drive) {
        return student.cgpa >= drive.minCgpa &&
               branchesMatch(student.branch, drive.branch);
    }

    // ── DATA (LOCAL) ─────────────────────

    let _students = [
        { reg: "001", name: "Aakansha", branch: "IT", cgpa: 6.2 },
        { reg: "002", name: "Aakriti", branch: "IT", cgpa: 8.3 },
        { reg: "003", name: "Aastha", branch: "IT", cgpa: 9.2 }
    ];

    let _companies = [
        { id: "c1", name: "Google" },
        { id: "c2", name: "Microsoft" },
        { id: "c3", name: "Amazon" }
    ];

    let _drives = [
        { id: "d1", companyId: "c1", role: "SDE", branch: "IT", minCgpa: 8 },
        { id: "d2", companyId: "c2", role: "Engineer", branch: "IT", minCgpa: 7 }
    ];

    let _applications = [
        { id: "a1", studentReg: "001", driveId: "d1", status: "Applied" }
    ];

    let _results = [
        { id: "r1", reg: "002", companyId: "c1", package: "20 LPA" }
    ];

    let _skills = [
        { reg: "001", skill: "Python" },
        { reg: "002", skill: "Java" }
    ];

    // ── STUDENTS ─────────────────────────
    function getStudents() { return _students; }

    function saveStudentAdd(student) {
        _students.push(student);
    }

    function saveStudentDelete(reg) {
        _students = _students.filter(s => s.reg !== reg);
    }

    // ── COMPANIES ───────────────────────
    function getCompanies() { return _companies; }

    function saveCompanyAdd(company) {
        _companies.push(company);
    }

    function companyById(id) {
        return _companies.find(c => c.id === id);
    }

    // ── DRIVES ──────────────────────────
    function getDrives() { return _drives; }

    function saveDriveAdd(drive) {
        _drives.push(drive);
    }

    function driveById(id) {
        return _drives.find(d => d.id === id);
    }

    // ── APPLICATIONS ────────────────────
    function getApplications() { return _applications; }

    function saveApplicationAdd(app) {
        app.id = uid("a");
        _applications.push(app);
    }

    function saveApplicationStatus(id, status) {
        let app = _applications.find(a => a.id === id);
        if (app) app.status = status;
    }

    // ── RESULTS ─────────────────────────
    function getResults() { return _results; }

    function saveResultAdd(result) {
        result.id = uid("r");
        _results.push(result);
    }

    // ── SKILLS ──────────────────────────
    function getSkills() { return _skills; }

    function saveSkillAdd(reg, skill) {
        _skills.push({ reg, skill });
    }

    function saveSkillDelete(reg, skill) {
        _skills = _skills.filter(s => !(s.reg === reg && s.skill === skill));
    }

    // ── EXPORT ──────────────────────────
    window.PDMS = {
        uid,
        isEligibleForDrive,

        getStudents,
        saveStudentAdd,
        saveStudentDelete,

        getCompanies,
        saveCompanyAdd,
        companyById,

        getDrives,
        saveDriveAdd,
        driveById,

        getApplications,
        saveApplicationAdd,
        saveApplicationStatus,

        getResults,
        saveResultAdd,

        getSkills,
        saveSkillAdd,
        saveSkillDelete
    };

})();