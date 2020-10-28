iusers = [ 
    //array that contains dummy info about users
        {
            "userID" : 1,
            "img" : "1.png",
            "userName" : "Maureen3",
            "fullName" : "Anyanwu Maureen",
            "mail" : "A3Maureen@tiidelab.com",
            "bio" : "Team Infinity",
            "phone" : "09048940949",
            "password" : "",
            "location" : "Lagos",
            "sex" : "Female",
            "userType" : "user",
            "level" : "0" ,
            "latlong" : [6.4412,3.418]
        },
        {
            "userID" : 2,
            "img" : "2.png",
            "userName" : "Jan3",
            "fullName" : "Jane Andeh",
            "mail" : "AndehJane@tiidelab.com",
            "phone" : "09099377477",
            "password" : "",
            "location" : "Abuja",
            "sex" : "Female",
            "userType" : "user",
            "level" : "0" ,
            "latlong" : [9.0667,7.4833]
        },
        {
            "userID" : 3,
            "img" : "3.png",
            "userName" : "Ife2020",
            "fullName" : "Adepoju Ifeoluwa",
            "mail" : "Ife@tiidelab.com",
            "phone" : "09063627278",
            "password" : "",
            "location" : "Abuja",
            "sex" : "Male",
            "userType" : "user",
            "level" : "0" ,
            "latlong" : [9.0667,7.4833]
        },
        {						
            "userID" : 4,
            "img" : "4.png",
            "userName" : "TJ4shot",
            "fullName" : "Oyetunji Atilade",
            "mail" : "OyetunjiAtilade@tiidelab.com",
            "phone" : "09097363723",
            "password" : "",
            "location" : "Abuja",
            "sex" : "Male",
            "userType" : "admin",
            "level" : "1" ,
            "latlong" : [7.4233,3.9846]
        },
        {
            "userID" : 5,
            "img" : "5.png",
            "userName" : "Rasho",
            "fullName" : "Ayoade Rasheed",
            "mail" : "Rasho@tiidelab.com",
            "phone" : "09037463836",
            "password" : "",
            "location" : "Ibadan",
            "sex" : "Male",
            "userType" : "admin",
            "level" : "2" ,
            "latlong" : [7.4233,3.9846]
        }
    ];

    function ChatUpdate() {
        var receiver = titleCase(JSON.parse(localStorage.getItem("chat")));
        const privateChatID = getPrivateChatID(isender, receiver);
        chatRef.doc(privateChatID).collection('imessages').onSnapshot(snapshot => {
          if (snapshot.docChanges()[0] === undefined) {
              const msg = `
              <li id="no-msg" class="mchat-msg-other">
                            <span id="chat-new">
                            <p>No Previous Messages found. Send message now to Start Chatting!</p>
                            </span>
                        </li>
        `
            messageScreen.innerHTML += msg;
            setTimeout(function(){ 
                var elem = document.querySelector('#no-msg');
                elem.parentNode.removeChild(elem);
                }, 3000);
                } else {
                shown = snapshot.docChanges()[0].doc.data()
                const {isender, text} = shown;
                if (shown) {
                    if (!shown.createdAt && snapshot.metadata.hasPendingWrites) {
                        // 
                    }
                    else {
                        // now we have the final timestamp value
                        console.log(`ons = ${shown}`)
                        if (isender === loggedUser) {
                            var msg = `
                            <li class="mchat-msg-self">
                            <span id="chat-new">
                            <p>${text}<p>
                            </span>
                        </li>
                        `
                        } else {
                          var msg = `
                            <li class="mchat-msg-other">
                            <span id="chat-new">
                            <p>${text}<p>
                            </span>
                        </li>
                        `
                        }
                        messageScreen.innerHTML += msg;
                        document.getElementById("pmessages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
                    }}
                }
        });
        }
        function showChat() {
          var receiver = titleCase(JSON.parse(localStorage.getItem("chat")));
          getDp(receiver);
          const privateChatID = getPrivateChatID(isender, receiver);
          var t = document.createTextNode(`${ChatScreenName(privateChatID)}`);     // Create a text node
          Chatheaders.appendChild(t);
            chatRef.doc(privateChatID).collection('imessages').orderBy("timestamp", "asc").get().then((querySnapshot) => {                                                                                                                                                                                                                                                                                                                                              
            querySnapshot.forEach((doc) => {
                const {isender, text} = doc.data();
                console.log(`get = ${doc.data()}`)
                if (isender === loggedUser) {
                  var msg = `
                            <li class="mchat-msg-self">
                            <span id="chat-new">
                            <p>${text}<p>
                            </span>
                        </li>
                        `
                } else {
                  var msg = `
                            <li class="mchat-msg-other">
                            <span id="chat-new">
                                <p>${text}<p>
                            </span>
                        </li>
                        `}
                messageScreen.innerHTML += msg;
                });
                });
            setTimeout(function(){ document.getElementById("pmessages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}, 1000);
            }
        
        // showChat();
        // ChatUpdate();