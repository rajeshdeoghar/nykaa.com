document.getElementById("btn").addEventListener("click",myFun);

let arr=JSON.parse(localStorage.getItem("signUp"))||[];
function myFun(event){
     event.preventDefault();
     let dataObj={
          name:document.getElementById("name").value,
          mobile:document.getElementById("mobile").value,
          email:document.getElementById("email").value
     };

     arr.push(dataObj);
     console.log(arr);
     localStorage.setItem("signUp",JSON.stringify(arr));
     window.location.href="index.html";
};


    


    
