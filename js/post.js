function postsee() {
    let area = document.getElementById("imgarea")
    let currentuser =localStorage.getItem("currentuser")
    let post = JSON.parse(localStorage.getItem("posts"))
    let showimages =document.getElementById("showimages")
    let cur = document.getElementById("currentuser").innerText=currentuser
    console.log(cur)
    let logo = document.getElementById("logoimg").innerText=currentuser.trim().toUpperCase()[0]
    for (let i = 0; i <post.length; i++) {
        if (post[i].user==currentuser){
            showimages.innerHTML+=`
               <div class="imgcolum">
                <div class="top1">
                    <div class="logo1">
                        <p class="logo" id="logoimg">${currentuser.trim().toUpperCase()[0]}</p>
                        <div class="date1">
                            <p class="usernamenmae" id="currentuser">${post[i].user}</p>
                            <p class="date">${post[i].date1}</p>
                        </div>
                    </div>
                    <button class="btn1" onclick="delet()">delete</button>

                </div>
                <p class="title">${post[i].title}</p>
                <p class="description1">${post[i].desc}</p>
                <div class="imgbox1"><img
                        src="${post[i].image}" id="img1"
                        alt=""></div>
            </div>
        `
        }
        //   postarr.unshift(area)
          console.log(showimages)
        }
}
function upload() {
  let title = document.getElementById("title")
  let img = document.getElementById("image")
  let description = document.getElementById("Description")
  let currentuser =localStorage.getItem("currentuser")
  let area = document.getElementById("imgarea")
  let showimages =document.getElementById("showimages")
  if (title.value.trim()==""){
    alert("please enter title")
  }
  if (img.value.trim()==""){
    alert("please enter image source")
  }
  if (description.value.trim()==""){
    alert("please enter description")
  }
  else{
    let cur = document.getElementById("currentuser").innerText=currentuser
    console.log(cur)
    let logo = document.getElementById("logoimg").innerText=currentuser.trim().toUpperCase()[0]
    let data1 =new Date()
    data1=data1.getDate()+"/"+data1.getMonth()+"/"+data1.getFullYear()
  let post = new Array()
  post = JSON.parse(localStorage.getItem("posts")) ? JSON.parse(localStorage.getItem("posts")) :[]
  post.unshift({
    title:title.value,
    image:img.value,
    desc:description.value,
    date1:data1,
    user:currentuser
  })
  localStorage.setItem("posts",JSON.stringify(post))
  console.log(post.length)
area.innerHTML=""
//   let postarr = []
  for (let i = 0; i <post.length; i++) {
    if (post[i].user==currentuser){
        showimages.innerHTML+=`
        <div class="imgcolum">
                <div class="top1">
                    <div class="logo1">
                        <p class="logo" id="logoimg">${currentuser.trim().toUpperCase()[0]}</p>
                        <div class="date1">
                            <p class="usernamenmae" id="currentuser">${post[i].user}</p>
                            <p class="date">${post[i].date1}</p>
                        </div>
                    </div>
                    <button class="btn1" onclick="delet()">delete</button>

                </div>
                <p class="title">${post[i].title}</p>
                <p class="description1">${post[i].desc}</p>
                <div class="imgbox1"><img
                        src="${post[i].image}" id="img1"
                        alt=""></div>
            </div>
        `
    }
    //   postarr.unshift(area)
    //   console.log(postarr)
    }
    title.value=""
    img.value=""
    description.value=""
    // console.log(showimages)
   location.reload()
  }
}
function showimg() {
  let img2 = document.getElementById("image")
  let img = document.getElementById("img").src=img2.value
  
}

