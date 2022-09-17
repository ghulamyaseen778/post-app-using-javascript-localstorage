function get() {
    
    var inp1 = document.getElementById("username").value
    var inp2 = document.getElementById("pass").value
    // var img = document.getElementById("img")
  if (inp1.trim()=="") {
    alert("please write a username!")
  }
  else if (inp2.trim()=="") {
    alert("please write a password!")
}
else{
    var oj_of_users = new Array()
    oj_of_users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    oj_of_users.push({
        username: inp1,
        password: inp2
    })
    localStorage.setItem("users", JSON.stringify(oj_of_users))
    window.open("login.html")
}
  

        
    
    // var innn =  `<img src="${inp1.value}" alt="" id="img">`
    // // inn.innerHTML=innn
    // // inp.value=img
    // console.log(inn)
    // console.log(innn)
    // var inn = document.getElementById("inn").innerHTML=innn

    // var dd = document.getElementById("con").innerHTML
    // console.log(dd)
    // if (dd.trim()!=="") {
    //     var cc = document.getElementById("inn").style.backgroundColor="red"
    // }
}
