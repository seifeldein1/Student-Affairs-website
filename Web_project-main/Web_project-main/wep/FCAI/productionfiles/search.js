function srchData() {
  const searchname = document.getElementById('srch').value;

  if (searchname.length === 0) {
    alert('Please enter a name to search.');
    return;
  }

  const keys = Object.keys(localStorage);
  const dataArray = [];

  keys.forEach(key => {
    const data = localStorage.getItem(key);
    const parsedData = JSON.parse(data);
    dataArray.push(parsedData);
  });

  let tbleHead = `
    <td class="head">Name</td>
    <td class="head">Status</td>
  `;

  let tbleBody = '';

  for (let i = 0; i < dataArray.length; ++i) {
    if (dataArray[i].name.includes(searchname)) {
      tbleBody += `
        <tr>
          <td>${dataArray[i].name}</td>
          <td>${dataArray[i].status}</td>
        </tr>
      `;
    }
  }

  // Check if any matches were found
  if (tbleBody === '') {
    tbleBody = `
      <tr>
        <td colspan="2">No matches found</td>
      </tr>
    `;
  }

  document.getElementById('tbody').innerHTML = tbleBody;
  document.getElementById('thead').innerHTML = tbleHead;
}
