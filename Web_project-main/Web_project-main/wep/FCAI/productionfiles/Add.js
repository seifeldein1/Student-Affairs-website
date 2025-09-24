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

    // Send the student data to the server using AJAX (Assuming you have included the jQuery library)
    $.ajax({
        url: "/add-student",
        type: "POST",
        data: student,
        success: function(response) {
            alert("Student added successfully.");
            document.getElementById("studentForm").reset(); // Reset the form
        },
        error: function(xhr, errmsg, err) {
            alert("Error occurred while adding the student.");
            console.log(xhr.status + ": " + xhr.responseText);
        }
    });
});
