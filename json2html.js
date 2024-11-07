// json2html.js
export default function json2html(data) {
  // Define the columns based on expected properties in the data
  const columns = ["Name", "Age", "Gender"];
  
  // Initialize the HTML string with the table tag and data-user attribute
  let html = <table data-user="meghanakanagalla@gmail.com"><thead><tr>;
  
  // Add table headers
  columns.forEach(col => {
    html += <th>${col}</th>;
  });
  html += </tr></thead><tbody>;
  
  // Add data rows
  data.forEach(row => {
    html += <tr>;
    columns.forEach(col => {
      html += <td>${row[col] || ""}</td>; // Add cell content or empty if property is missing
    });
    html += </tr>;
  });

  html += </tbody></table>;
  return html; // Return the HTML table as a string
}
