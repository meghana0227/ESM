

// json2html.js
export default function json2html(data) {
    // Start the HTML table with data-user attribute
    let html = '<table data-user="meghanakanagalla@gmail.com">';
    
    // Extract headers from data keys
    const headers = ["Name", "Age", "Gender"];
    html += "<thead><tr>" + headers.map(header => <th>${header}</th>).join("") + "</tr></thead>";
    
    // Add rows for each object in the data array
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>" + headers.map(header => <td>${row[header] || ""}</td>).join("") + "</tr>";
    });
    html += "</tbody></table>";
    
    return html;
  }
