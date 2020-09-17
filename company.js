company = [
    {
        "name": "TIIDELAB",
        "email": "email@tiidelab.com",
        "phone": 08099387653,
        "country": "Nigeria"
    },
    {
        "name": "Google",
        "email": "email@google.com",
        "phone": 08099387690,
        "country": "United States"
    },
    {
        "name": "Bolt",
        "email": "support@bolt.eu",
        "phone": 08099387677,
        "country": "Estonia"
    }
]

function newCompany() {
    company[company.length] = {
        "name": prompt("Enter Company Name:"),
        "email": prompt("Enter Company mail:"),
        "phone": prompt("Enter Company Phone Number:"),
        "country": prompt("Enter Company Location:")
    };
    contentDisplay()
}   
function contentDisplay() {
    content = `<table cellpadding ="10" align="center">
    <tr>
    <th>S/N</th>
    <th>Company Name</th>
    <th>Company Email</th>
    <th>Company Phone</th>
    <th>Location</th>
    </tr>
    <tbody>`;
    for(i=0; i<company.length; i++) {
        content+= `
        <tr>
        <td>${i+1}</td>
        <td>${company[i].name}</td>
        <td>${company[i].email}</td>
        <td>${company[i].phone}</td>
        <td>${company[i].country}</td>
        </tr>
        `
    }
    content+= `
    </tbody>
    </table>
    `
    document.getElementById("content").innerHTML = content;
}
contentDisplay()