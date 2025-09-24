function srchData() {
  const searchname = document.getElementById('srch').value;

  if (searchname.length === 0) {
    alert('Please enter a name to search.');
    return;
  }

  const xhr = new XMLHttpRequest();
  const url = '/search-student/?name=' + encodeURIComponent(searchname);

  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      let tbleBody = '';

      if (response.length === 0) {
        tbleBody = `
          <tr>
            <td colspan="2">No matches found</td>
          </tr>
        `;
      } else {
        for (let i = 0; i < response.length; ++i) {
          tbleBody += `
            <tr>
              <td>${response[i].name}</td>
              <td>${response[i].status}</td>
            </tr>
          `;
        }
      }

      document.getElementById('tbody').innerHTML = tbleBody;
    } else {
      console.error('Request failed. Status:', xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error('Request failed. Check your network connection.');
  };

  xhr.send();
}