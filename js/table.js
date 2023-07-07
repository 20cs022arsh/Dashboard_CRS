var reportsData = [
    { date: '12/12/2022', reportID: '01', District: 'India' ,Zone:"Alua"},
    { date: '13/12/2022', reportID: '02', District: 'Pakisthan' ,Zone:"Eloor"},
    { date: '14/12/2022', reportID: '03', District: 'Australia' ,Zone:"Kothamangalam"}
  ];

  // Function to generate the table rows
  function generateTableRows() {
    var tableBody = document.querySelector('#reportTable tbody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Iterate over the data array
    reportsData.forEach(function (report) {
      var row = document.createElement('tr');

      // Create table cells for each property
      var dateCell = document.createElement('td');
      dateCell.textContent = report.date;
      row.appendChild(dateCell);

      var reportIDCell = document.createElement('td');
      reportIDCell.textContent = report.reportID;
      row.appendChild(reportIDCell);

      var DistrictCell = document.createElement('td');
      DistrictCell.textContent = report.District;
      row.appendChild(DistrictCell);

      var ZoneCell = document.createElement('td');
      ZoneCell.textContent = report.Zone;
      row.appendChild(ZoneCell);

      

      tableBody.appendChild(row);
    });
  }
  generateTableRows();