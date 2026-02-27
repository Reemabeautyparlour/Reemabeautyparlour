// Your mobile number
const ADMIN_MOBILE = "9758993554";


// First time password create
if(!localStorage.getItem("adminPass")){
  let p = prompt("Create New Password:");
  localStorage.setItem("adminPass", p);
  alert("Password Saved!");
}


// Login function
function login(){

  let m = document.getElementById("mobile").value;
  let p = document.getElementById("pass").value;

  let saved = localStorage.getItem("adminPass");

  if(m === ADMIN_MOBILE && p === saved){

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("panel").style.display = "block";

  }else{
    alert("Wrong Login Details!");
  }

}


// Upload function
function upload(){

  let file = document.getElementById("file").files[0];

  if(!file){
    alert("Please select file");
    return;
  }

  let reader = new FileReader();

  reader.onload = function(){

    let gallery = JSON.parse(localStorage.getItem("gallery")) || [];

    let type = file.type.includes("video") ? "video" : "image";

    gallery.push({
      type: type,
      src: reader.result
    });

    localStorage.setItem("gallery", JSON.stringify(gallery));

    alert("Uploaded Successfully!");

  }

  reader.readAsDataURL(file);

}
