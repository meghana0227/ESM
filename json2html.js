// json2html.js
export default function json2html(data) {
  // Start table with data-user attribute
  let html = `<table data-user="meghanakanagalla@gmail.com">`;
  
  // Generate table header
  html += `
    <thead>
      <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
    </thead>
    <tbody>
  `;
  
  // Generate table rows
  data.forEach(item => {
    html += `<tr><td>${item.Name}</td><td>${item.Age}</td><td>${item.Gender || ''}</td></tr>`;
  });

  // Close table body and table
  html += `</tbody></table>`;
  
  return html;
}
