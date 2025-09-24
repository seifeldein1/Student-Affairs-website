	// Function to search for a student by ID
	function searchStudent() {
	    var searchId = document.getElementById('searchInput').value;
		var studentInfoDiv = document.createElement('div');
	        studentInfoDiv.classList.add('student-info');

	        // Add student information to the div
	        studentInfoDiv.innerHTML = `
			{% for student in students %}
				{% if student.id == searchId %}
					<div id="studentInfoDiv" class="table-container">
					<table>
						<tr>
							<td><strong>ID:</strong> <span id="studentId">${student.id}</span></td>
							<td><strong>Name:</strong> <span id="studentName">${student.name}</span></td>
						</tr>
						<tr>
							<td><strong>Date of Birth:</strong> <span id="studentDob">${student.date_of_birth}</span></td>
							<td><strong>GPA:</strong> <span id="studentGpa">${student.GPA}</span></td>
						</tr>	
						<tr>
							<td><strong>Status:</strong> <span id="studentStatus">${student.status}</span></td>
							<td><strong>Gender:</strong> <span id="studentGender">${student.gender}</span></td>
							</tr>
							<tr>
								<td><strong>Level:</strong> <span id="studentLevel">${student.level}</span></td>
								<td><strong>Department:</strong> <span id="studentDepartment">${student.department}</span></td>
							</tr>
							<tr>
								<td><strong>Email:</strong> <span id="studentEmail">${student.email}</span></td>
								<td><strong>Mobile:</strong> <span id="studentMobile">${student.mobile}</span></td>
							</tr>
						</table>
						<div class="buttons-container">
							<button onclick="updateStudent('${student.id}')">Update</button>
							<button onclick="deleteStudent('${student.id}')">Delete</button>
						</div>
					</div>
				{% endif %}
				
			{% endfor %}
			{% if student.id != searchId %}
				<script>alert("Student not found !!!   fdvcdsvdfsvdf");</script>
			{% endif %}
		
			`;
		// Append the student info div to the container
		document.getElementById('studentInfoContainer').appendChild(studentInfoDiv);
	}


			
	// Function to update a student's information
	function updateStudent(student) {
		
		// Create a dialog element
		var dialog = document.createElement('dialog');
		dialog.innerHTML = `
				<form id="updateForm">
						<label for="name">Name</label>
						<input type="text" id="name" value="${studentData.name}" required><br>
						<label for="dob">Date of Birth</label>
						<input type="text" id="dob" value="${studentData.dob}" required><br>
						<label for="gpa">GPA</label>
						<input type="text" pattern="(^[0-9]{0,1}$)|(^[0-9]{0,2}\.[0-9]{1,2}$)" maxlength="4"  id="gpa" name="gpa" value="${studentData.gpa}" required><br>
						<label for="gender">Gender</label>
						<select id="gender" name="gender">
						<option value="male" ${studentData.gender === 'male' ? 'selected' : ''}>Male</option>
						<option value="female" ${studentData.gender === 'female' ? 'selected' : ''}>Female</option>
						</select><br>
						<label for="status">Status</label>
						<select id="status" name="status">
						<option value="active" ${studentData.status === 'active' ? 'selected' : ''}>Active</option>
						<option value="inactive" ${studentData.status === 'inactive' ? 'selected' : ''}>Inactive</option>
						</select><br>

						<label for="level">Level</label>
						<input type="text" id="level" value="${studentData.level}" required><br>
						<label for="department">Department</label>
						<input type="text" id="department" value="${studentData.department}" disabled><br>
						<label for="email">Email</label>
						<input type="text" id="email" value="${studentData.email}" required><br>
						<label for="mobile">Mobile</label>
						<input type="text" id="mobile" value="${studentData.mobile}" required><br>
						<button type="button" id = "save" onclick="saveChanges('${studentId}')">Save Changes</button>
						<button type="button" id = "cancle" onclick="cancelChanges()">Cancel</button>
				</form>
		`;

		// Append the dialog to the body
		document.body.appendChild(dialog);

		// Open the dialog

		dialog.showModal() ;
		}

		// Function to save the changes made in the update dialog
		function saveChanges(studentId) {
		// Retrieve the updated values from the input fields
		var name = document.getElementById('name').value;
		var dob = document.getElementById('dob').value;
		var gpa = document.getElementById('gpa').value;
		var gender = document.getElementById('gender').value;
		var level = document.getElementById('level').value;
		// var department = document.getElementById('department').value;
		var email = document.getElementById('email').value;
		var mobile = document.getElementById('mobile').value;

		// Update the student data object
		var studentData = JSON.parse(localStorage.getItem(studentId));
		studentData.name = name;
		studentData.dob = dob;
		studentData.gpa = gpa;
		studentData.gender = gender;
		studentData.level = level;
		// studentData.department = department;
		studentData.email = email;
		studentData.mobile = mobile;

		// Store the updated student data back to local storage
		localStorage.setItem(studentId, JSON.stringify(studentData));

		// Close the update dialog
		document.getElementById('updateForm').reset();
		document.querySelector('dialog').close();

		// Refresh the student info div
		document.getElementById('studentInfoContainer').innerHTML = '';
			alert('Student data has been Updated successfully.');
		location.reload();
		}

		// Function to cancel the changes made in the update dialog
		function cancelChanges() {
		// Close the update dialog
		document.getElementById('updateForm').reset();
		document.querySelector('dialog').close();
		location.reload();
		}

		function deleteStudent(studentId) {
    // Confirm deletion with a confirmation dialogue
    var confirmDelete = confirm('Are you sure you want to delete this student?');

    if (confirmDelete) {
        // Remove student data from local storage
        localStorage.removeItem(studentId);

        // Refresh the student info div
        document.getElementById('studentInfoContainer').innerHTML = '';
        alert('Student data has been deleted successfully.');
				location.reload();
    }
}