const url="https://api.github.com/users";

//Using .THEN method: 
function loadUserData1(){    
    fetch(url , {
        method: "get"
    }).then(res => res.json())
            .then(users => {
                displayUsers(users);
            })
}

//Using AWAIT ASYNC method:
 const loadUserData2 = async () => {
    const response =  await fetch (url, {
        method : "get"
    });
    const users = await response.json();
    displayUsers(users);
}

//Displaying Edited response:
const displayUsers = (users) => {
    document.getElementById('heading').style.display = "block";
    document.getElementById('para').style.display = "block";
    for(let i = 0 ; i < users.length; i++){
        const img =  document.createElement("img");
        img.setAttribute("src", users[i].avatar_url);
        img.setAttribute("alt", users[i].login);
        document.getElementById("person").appendChild(img);

        const name = document.createElement("a");
        name.setAttribute("href", users[i].url);
        name.textContent = users[i].login;
        document.getElementById("person").appendChild(name);
    }
}