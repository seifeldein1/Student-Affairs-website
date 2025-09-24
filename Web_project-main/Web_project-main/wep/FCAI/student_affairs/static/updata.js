function searchStudent() {
    var searchId = document.getElementById('searchInput').value;

    // Send an AJAX request to the server to search for the student by ID
    $.ajax({
        url: `/search-student/?id=${searchId}`,
        type: 'GET',
        dataType: 'json',
        success: function(studentData) {
            if (studentData !== null) {
                // Create a new div to display student information
                var studentInfoDiv = $('<div>').addClass('student-info');
            
            } else {
                alert('Student not found!');
            }
        },
        error: function() {
            alert('Error occurred while searching for the student.');
        }
    });
}

function updateStudent(studentId) {
    var name = $('#studentName').text();
    var dob = $('#studentDob').text();
    var gpa = $('#studentGpa').text();
    var status = $('#studentStatus').text();
    var gender = $('#studentGender').text();
    var level = $('#studentLevel').text();
    var department = $('#studentDepartment').text();

    var data = {
        name: name,
        dob: dob,
        gpa: gpa,
        gender: gender,
        level: level,
      
    };

    $.ajax({
        url: `/update-student/${studentId}/`,
        type: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken() // Use the getCSRFToken function to retrieve the CSRF token
        },
        data: JSON.stringify(data),
        dataType: 'json',
        success: function(response) {
            location.reload();
        },
        error: function() {
            alert('Error occurred while updating student data.');
        }
    });
}








function deleteStudent(studentId) {
    if (confirm('Are you sure you want to delete this student?')) {
        // Send an AJAX request to the server to delete the student
        $.ajax({
            url: `/delete-student/${studentId}/`,
            type: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()
            },
            dataType: 'json',
            success: function(response) {
                if (response.success_message) {
                    // Delete successful, redirect to the homepage or display a success message
                    // You can modify this part based on your requirements
                    window.location.href = "{% url 'index' %}";
                } else {
                    // Delete failed, display an error message
                    alert('Failed to delete the student.');
                }
            },
            error: function() {
                alert('Error occurred while deleting the student.');
            }
        });
    }
}

