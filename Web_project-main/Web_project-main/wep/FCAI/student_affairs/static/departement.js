function select() {
    let stud_id = document.getElementById("sID").value;
    console.log(stud_id);

    // Perform AJAX request to the Django view
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "{% url 'department' %}", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.success_message) {
                alert(response.success_message);
            } else if (response.error_message) {
                alert(response.error_message);
            }
        }
    };

    if (localStorage.getItem(stud_id)) {
        let stud_info = JSON.parse(localStorage.getItem(stud_id));
        stud_info.department = document.getElementById("dep").value;

        localStorage.setItem(stud_id, JSON.stringify(stud_info));

        // Prepare the data to send to the Django view
        const data = new URLSearchParams();
        data.append("id", stud_id);
        data.append("department", stud_info.department);

        // Send the AJAX request
        xhr.send(data.toString());
    } else {
        alert("Please enter an existing ID");
    }
}
