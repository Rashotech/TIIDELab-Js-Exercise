//convert the stored data back into object
internalUsers = JSON.parse(localStorage.getItem("internalUsers"))
	
//check if local storage contains data
if(internalUsers == null) {
    internalUsers = []; 
    //assign an empty array if no user is found
   }

function newUser() { // New User Function
    // Adding user object to the InternalUser Array
    internalUsers[internalUsers.length] = 
    { "fullName" : document.getElementById("fullName").value,
       "email" : document.getElementById("email").value,
       "phone" : document.getElementById("phone").value,
       "pics" : reader.result
     };
    localStorage.setItem("internalUsers",JSON.stringify(internalUsers)) //Storing User info in Local Storage
    contentDisplay(); //New DEtails are updated
    closeForm(); //New User Pop Up form closed
}

function openForm() {
    formContent = `
    <h1>Fill in the form to Register a User</h1> 
    <form onsubmit="newUser();" action="#">
        <input type="text" id="fullName" placeholder="Full name" required> <br>
        <input type="text" id="email" placeholder="Email" required> <br>
        <input type="text" id="phone" placeholder="Phone" required> <br>
        <input type="file" id="profilePic" required>
        <button class="formBtn">Add new user</button> 
        <button class="formBtn" onClick="closeForm()"> Close</button>
    </form>
`
  document.getElementById("NewUserForm").innerHTML = formContent;
  document.getElementById("NewUserForm").style.display = "block";
  document.querySelector("#profilePic").addEventListener("change", function() {
    reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
})
}

function editForm(userId) {
    formContent = `
    <h1>Edit User Form</h1>
    <form onsubmit="editUser(${userId});" action="#">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" value="${internalUsers[userId].fullName}"> <br>
        <label for="email">Email</label>
        <input type="text" id="email" value="${internalUsers[userId].email}"> <br>
        <label for="phone">Phone Number</label>
        <input type="text" id="phone" value="${internalUsers[userId].phone}"> <br>
        <input type="file" id="editProfilePic">
        <button class="formBtn" type="submit">Edit user</button> 
        <button class="formBtn" onClick="closeForm()">Close</button>
    </form>
`
document.getElementById("editForm").innerHTML = formContent;
document.getElementById("editForm").style.display = "block";
document.querySelector("#editProfilePic").addEventListener("change", function() {
    editReader = new FileReader();
    editReader.readAsDataURL(this.files[0]);
})
}

function closeForm() { //Close form function
    document.getElementById("NewUserForm").style.display = "none";
    document.getElementById("editForm").style.display = "none";
}

function editUser(userId) {
    //Edit User details of a particular user
    internalUsers[userId] = 
    { "fullName" : document.getElementById("fullName").value,
       "email" : document.getElementById("email").value,
       "phone" : document.getElementById("phone").value,
       "pics" : editReader.result
     };
    localStorage.setItem("internalUsers",JSON.stringify(internalUsers))
    contentDisplay();
    closeForm();
}

function deleteUser(userId) { // InterUser delete function
    if (confirm(`Are you sure you want to delete ${internalUsers[userId].fullName}'s Account?`)) {
        internalUsers =JSON.parse(localStorage.getItem("internalUsers"));
        internalUsers.splice(userId, 1);
        localStorage.setItem("internalUsers", JSON.stringify(internalUsers));
    }
    contentDisplay();
}

function contentDisplay() { //Function to render User Details Content
    content="";
    for( let i=0; i<internalUsers.length; i++) {
        if(internalUsers[i]!=null || internalUsers[i]!=undefined )
        {
            content+= `
            <div class="user-profile">
            <div class="userInfo">
            <img src= "${internalUsers[i].pics}"> <br>
            <div class="user-container">
            <strong>Full Name</strong>: ${internalUsers[i].fullName} <br>
            <strong>Email</strong>: ${internalUsers[i].email}<br>
            <strong>Phone</strong>: ${internalUsers[i].phone}<br>
            <button class="btn-del" onclick="deleteUser(${i});">Delete</button> &nbsp; <button class="btn-del" onclick="editForm(${i});"> Edit</button>

            </div>
            </div>
            </div>
            `;
        }
    }
    document.getElementById("content").innerHTML = `${content}`;
}
contentDisplay()