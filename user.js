//convert the stored data back into object
internalUsers = JSON.parse(localStorage.getItem("internalUsers"))
	
//check if local storage contains data
if(internalUsers == null) {
    internalUsers = []; 
    //assign an empty array if no user is found
   }
//No User Message
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

function SearchForm() {
    formContent = `
    <form action="#">
        <input type="text" id="search" placeholder="Search name" required> <br>
        <button class="formBtn" onClick="SearchUser()">Search Filter</button>
        <button class="formBtn" onClick="SearchSingleUser()">Search Find</button> 
        <button class="formBtn" onClick="SearchAllUser()">Search Include</button>
    </form>
`
  document.getElementById("SearchForm").innerHTML = formContent;
  document.getElementById("SearchForm").style.display = "block";
}

function editForm(userId) {
    formContent = `
    <h1>Edit User Form</h1>
    <form onsubmit="editUser(${userId});" action="#">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" value="${internalUsers[userId].fullName}" required> <br>
        <label for="email">Email</label>
        <input type="text" id="email" value="${internalUsers[userId].email}" required> <br>
        <label for="phone">Phone Number</label>
        <input type="text" id="phone" value="${internalUsers[userId].phone}" required> <br>
        <input type="file" id="editProfilePic" required>
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
    document.getElementById("SearchForm").style.display = "none";

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

function SearchUser(){
    param =(document.getElementById("search").value).toLowerCase();
    internalUsers = internalUsers.filter(x=>(x.fullName.toLowerCase()) === param);
    if (internalUsers == null || internalUsers == undefined || internalUsers==""){
        alert(`No record for Found for ${param}`);
        closeForm();
    }
    else {
        SearchResultNo ="";
        if (internalUsers.length === 1) {
            SearchResultNo+= 
            `<div><h3>${internalUsers.length} User Found</h3></div>`
        } else {
            SearchResultNo+= 
            `<div><h3>${internalUsers.length} Users Found</h3></div>`
        }
        document.getElementById("SearchResult").innerHTML = `${SearchResultNo}`;
        contentDisplay();
        closeForm();
    }
}

function SearchAllUser(){
    param =(document.getElementById("search").value).toLowerCase();
    internalUsers = internalUsers.filter(x=>x.fullName.toLowerCase().includes(param));
    if (internalUsers == null || internalUsers == undefined || internalUsers==""){
        alert(`No record for Found for ${param}`);
        closeForm();
    }
    else {
        SearchResultNo ="";
        if (internalUsers.length === 1) {
            SearchResultNo+= 
            `<div><h3>${internalUsers.length} User Found</h3></div>`
        } else {
            SearchResultNo+= 
            `<div><h3>${internalUsers.length} Users Found</h3></div>`
        }
        document.getElementById("SearchResult").innerHTML = `${SearchResultNo}`;
        contentDisplay();
        closeForm();
    }
}

function SearchSingleUser(){
    param =(document.getElementById("search").value).toLowerCase();
    NewInternalUsers = internalUsers.find(x=>(x.fullName.toLowerCase()) === param);
    if ( NewInternalUsers == null ||  NewInternalUsers == undefined ||  NewInternalUsers==""){
        alert(`No record for Found for ${param}`);
        closeForm();
    }
    else {
        internalUsers= [];
        internalUsers.push(NewInternalUsers);
        SearchResultNo ="";
        if (internalUsers.length === 1) {
            SearchResultNo+= 
            `<div><h3>${internalUsers.length} User Found</h3></div>`
        } else {
            SearchResultNo+= 
            `<div><h3>${internalUsers.length} Users Found</h3></div>`
        }
        document.getElementById("SearchResult").innerHTML = `${SearchResultNo}`;
        contentDisplay();
        closeForm();
    }
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
    // if (internalUsers.length<1) {
    //     NoUser = `<h2>No Internal User Yet. Add one now</h2>`
    //     document.getElementById("SearchResult").innerHTML = `${NoUser}`;
    // }
    document.getElementById("content").innerHTML = `${content}`;
}
contentDisplay()