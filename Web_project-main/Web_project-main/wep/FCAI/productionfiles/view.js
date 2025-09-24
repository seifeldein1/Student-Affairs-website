const dataArray = []; 
 let temp;
function showData(){
    // Get all keys from localStorage 
const keys = Object.keys(localStorage); 
 
 // Create an array to store the retrieved data 
 
  
 // Loop through each key and retrieve its corresponding data 
 keys.forEach(key => { 
   const data = localStorage.getItem(key); 
    
   // Parse the retrieved data from string to object if necessary 
   const parsedData = JSON.parse(data); 
    
   // Add the parsed data to the dataArray 
   dataArray.push(parsedData); 
 }); 
  
 // Now, dataArray contains all the data from localStorage as objects in an array 
// console.log(dataArray);
 let tble ='';
    for(let i =0;i<dataArray.length;++i){
        tble += `
        <tr>
            <td>${dataArray[i].name}</td>
            <td>${dataArray[i].status}</td>
            <td>
                <button onclick="update(${i})" id ="upd"  >update</button>
            </td>
        </tr>
        `
       
    } 
    
    document.getElementById('tbody').innerHTML=tble;
   	

}
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

				// Open the dialog
				dialog.showModal();
			
        
          
}
function saveChanges(){ 
      s= document.getElementById("status").value;
      console.log(s);
    dataArray[temp].status = s;
    localStorage.setItem(dataArray[temp].id, JSON.stringify( dataArray[temp]));
      
              // Close the update dialog
				document.getElementById('updateForm').reset();
				document.querySelector('dialog').close();
				location.reload();
    
}
function cancelChanges() {
    // Close the update dialog
    document.getElementById('updateForm').reset();
    document.querySelector('dialog').close();
    location.reload();
    }
