function log() {
    var username1 = document.getElementById("username").value
    var password1 = document.getElementById("pass").value
    var get_users = JSON.parse(localStorage.getItem("users"))
    if (username1.trim()=="") {
        alert("please write a username!")
      }
      else if (password1.trim()=="") {
        alert("please write a password!")
    }
    else{
        for (let i = 0; i < get_users.length; i++) {
            if (get_users[i].username == username1 && get_users[i].password == password1) {
                // window.location.href = "main.html"
                // document.getElementById("heading").innerHTML ="Hello" + get_users[i].name
                alert("hello")
                // document.getElementById("main1").style.display="none"
                window.open("postpage.html")  
                var user = {
                    user:username1,
                    pass:password1
                }
                localStorage.setItem("currentuser",user.user)
            } 
        }
    }
}