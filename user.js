internalUsers = [
    {
        "fullName": "Ayoade Rasheeed",
        "email": "email@tiidelab.com",
        "phone": "08099387653",
        "pics": "./images/1.jpg"
    },
    {
        "fullName": "Eric Lamela",
        "email": "eric@gmail.com",
        "phone": "08099387653",
        "pics": "./images/2.jpg"
    },
    {
        "fullName": "Dash Wallet",
        "email": "dash_tb@ymail.com",
        "phone": "08099387653",
        "pics": "./images/3.jpg"
    }
]
function deleteUser(userId) {
    if (confirm(`Are you sure you want to delete ${internalUsers[userId].fullName}'s Account?`)) {
        internalUsers.splice(userId, 1);
    }
    contentDisplay();
}
function newUser() {
    internalUsers[internalUsers.length] = {
        "fullName": prompt("Full Name:"),
        "email": prompt("Email:"),
        "phone": prompt("Phone Number:"),
        "pics": `./images/${internalUsers.length}.jpg`
    };
    contentDisplay();
}
function contentDisplay() {
    content="";
    for( let i=0; i<internalUsers.length; i++) {
            content+= `
            <div class="user-profile">
            <div class="userInfo">
            <img src= "${internalUsers[i].pics}"> <br>
            <div class="user-container">
            <strong>Full Name</strong>: ${internalUsers[i].fullName} <br>
            <strong>Email</strong>: ${internalUsers[i].email}<br>
            <strong>Phone</strong>: ${internalUsers[i].phone}<br>
            <button class="btn-del" onclick="deleteUser(${i});">Delete</button>
            </div>
            </div>
            </div>
            `;
    }
    if (internalUsers == null) {
        content= `<p>No Internal User, Add one</p>`;
    }
    document.getElementById("content").innerHTML = `${content}`;
}
contentDisplay()