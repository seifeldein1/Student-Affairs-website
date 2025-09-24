// document.getElementById("studentForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
//     let id = document.getElementById("id").value;
//     let name = document.getElementById("name").value;
//     let dob = document.getElementById("dob").value;
//     let gpa = document.getElementById("gpa").value;
//     let gender = document.getElementById("gender").value;
//     let level = document.getElementById("level").value;
//     let department = document.getElementById("department").value;
//     let email = document.getElementById("email").value;
//     let mobile = document.getElementById("mobile").value;
//     // Perform form validation
//     if (!id || !name || !dob || !gpa || !gender || !level || !department || !email || !mobile) {
//         alert("Please fill in all fields.");
//         return;
//     }
//     // Create an object to store the student information
//     let student = {
//         id: id,
//         name: name,
//         dob: dob,
//         gpa: gpa,
//         gender: gender,
//         level: level,
//         department: department,
//         email: email,
//         mobile: mobile
//     };

//     // Store the student object in local storage
//     localStorage.setItem(student.id, JSON.stringify(student));

//     alert("Student information has been stored in local storage.");
//     document.getElementById("studentForm").reset(); // Reset the form
// });
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let gpa = document.getElementById("gpa").value;
    let gender = document.getElementById("gender").value;
    let status = document.getElementById("status").value;
    let level = document.getElementById("level").value;
    let department = document.getElementById("department").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    // Perform form validation
    if (!id || !name || !dob || !gpa || !gender || !status|| !level || !department || !email || !mobile) {
        alert("Please fill in all fields.");
        return;
    }
    // Create an object to store the student information
    let student = {
        id: id,
        name: name,
        dob: dob,
        gpa: gpa,
        gender: gender,
        status: status,
        level: level,
        department: department,
        email: email,
        mobile: mobile
    };


    // Store the student object in local storage
    localStorage.setItem(student.id, JSON.stringify(student));

    alert("Student added successfully.");
    document.getElementById("studentForm").reset();// Reset the form
});