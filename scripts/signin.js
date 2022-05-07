// if(localStorage.getItem("userData") === null) {
//      localStorage.setItem("userData" , JSON.stringify([]))
//  }
 
//  function onSignIn(googleUser) {
//      var profile = googleUser.getBasicProfile();
//      let name = profile.getName()
//      let email = profile.getEmail()
//      let image = profile.getImageUrl();
 
//      let obj = {
//          name: name,
//          email: email,
//          img:image
//      }
     
//      let getlocal = JSON.parse(localStorage.getItem("userData"))
//      getlocal.push(obj)
 
//      if(getlocal.length > 1) {
//          window.location.href = "index.html"
//      }
     
//      localStorage.setItem("userData" , JSON.stringify(getlocal))
 
//  }



//console.log("Hello")
let data=JSON.parse(localStorage.getItem("signUp"));


//console.log(res)

document.getElementById("submitVerification").addEventListener("click",myFun);

function myFun(event){
      event.preventDefault();
      var res =document.getElementById("email").value;
     //console.log(res)
     for(let i=0;i<data.length;i++){
          if(res===data[i].mobile || res===data[i].email)
          {
               
               window.location.href=`index.html`;
              
              
          }
          else{
               
               window.location.href="signup.html";
               
               
          }
     }
}


