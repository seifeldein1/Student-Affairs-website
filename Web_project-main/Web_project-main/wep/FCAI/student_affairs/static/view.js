dataArray = []; 
 let temp;


let s ;
function update(i){
    temp=i;
    var dialog = document.createElement('dialog');
				dialog.innerHTML = `
						<form id="updateForm">
            <label for="status">Status</label>
                  <select id="status" name="status">
                  <option value="active" ${dataArray[i].status === 'active' ? 'selected' : ''}>Active</option>
                  <option value="inactive" ${dataArray[i].status === 'inactive' ? 'selected' : ''}>Inactive</option>
                </select><br>				
                  <button type="button" id = "stat" onclick="saveChanges()">Save Changes</button>
								  <button type="button" id = "stat" onclick="cancelChanges()">Cancel</button>
						</form>
				`;

				// Append the dialog to the body
				document.body.appendChild(dialog);

        dialogPolyfill.registerDialog(dialog);

				// Open the dialog
				dialog.showModal();         
}





function saveChanges() {
  var s = document.getElementById("status").value;
  var csrfToken = getCookie('csrftoken');

  // Send an AJAX request to the Django server
  $.ajax({
      url: '/update_data/',  // URL for your Django view
      type: 'POST',
      data: {
          'data_id': dataArray[temp].id,
          'status': s
      },
      dataType: 'json',

      headers: {
        'X-CSRFToken': csrfToken  // Include the CSRF token in the headers
      },
      
      success: function(response) {
          // Handle the success response
          console.log(response);
          // Additional actions after saving changes
          document.getElementById('updateForm').reset();
          document.querySelector('dialog').close();
          location.reload();
      },
      error: function(error) {
          // Handle the error response
          console.log(error);
      }
  });
}



function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}




function cancelChanges() {
    // Close the update dialog
    document.getElementById('updateForm').reset();
    document.querySelector('dialog').close();
    location.reload();
    }






function showData()
{
  
  $(document).ready(function() {
    $.ajax({
        url: '/get_data/',  
        method: 'GET',
        success: function(response) {
            dataArray= response;
            var tableBody = $('#tbody');
            
            for (var i = 0; i < dataArray.length; i++) {
                var row = $('<tr>');
                row.append($('<td>').text(dataArray[i].name));
                // row.append($('<td>').text(dataArray[i].id));
                row.append($('<td>').text(dataArray[i].status));
                row.append($('<button onclick="update(' + i + ')"  id ="upd">').text("UPDATE"));


                // Add more cells for additional fields
                
                tableBody.append(row); 
            }
        },
        error: function(_xhr, _status, error) {
            console.error(error);
            alert("response error")
        }
    });
  });

}
