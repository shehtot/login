var nameinput=document.getElementById('signupName');
var emailinput=document.getElementById('signupEmail');
var passwordinput=document.getElementById('signupPassword');
var btnup=document.getElementById('btnup')
var btnin=document.getElementById('btnin')
var ex=document.getElementById('exist')
var emailsignin=document.getElementById('signinEmail');
var passwordsignin=document.getElementById('signinPassword')
var success=document.getElementById('success')
var username=document.getElementById('username')
var logOut=document.getElementById('logOut')




/////////////////////////////////////////////////clear////////////////////////////////////////////////////////////////
function clear(){
    nameinput.value=''
    emailinput.value=''
    passwordinput.value=''
    nameinput.classList.remove('is-valid')
    emailinput.classList.remove('is-valid')
    passwordinput.classList.remove('is-valid')
    
            success.classList.replace('d-block','d-none')

}


/** signup */

 database=[];
 if(localStorage.getItem('all')!=null){
    database=JSON.parse(localStorage.getItem('all'));

};
function getitem(){
    contain={
        name:nameinput.value,
        email:emailinput.value,
        password:passwordinput.value,

    }
  if(validation(nameinput.id,nameinput.value)==true&&validation(emailinput.id,emailinput.value)==true&&prevent(database,contain)==true){

    database.unshift(contain);
    localStorage.setItem('all',JSON.stringify(database))
    }
    else{
        ex.classList.replace('d-none','d-block');
    }
    clear();
}
 


btnup?.addEventListener('click',getitem)





let main=document.getElementById('box');
main?.addEventListener('input',function(e){
   

    if(e.target.tagName=='INPUT'){
        let inputid=e.target.id
        let inputvalue=e.target.value
        validation(inputid,inputvalue)
    }
    
})

///         validation         ///


function validation(id,value){
    regex={
        signupName:/^[a-z]{3,20}/i,
        signupEmail:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        signupPassword:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,

    }
    let ele=document.getElementById(id);
    let error=document.getElementById(id+'Error');
    console.log(regex[id].test(value))
    if(regex[id].test(value)==true){
        ele.classList.add('is-valid');
        ele.classList.remove('is-invalid');
        error.classList.replace('d-block','d-none');
        
        return true;
    }
    else{
        ele.classList.add('is-invalid');
        ele.classList.remove('is-valid');
        error.classList.replace('d-none','d-block');
        

         return false;
    }


}

function prevent(arr,newObj){
    for(var i=0;i<arr.length;i++){
      if(arr[i].email==newObj.email){  
    
        return false;
      }
      
    }
    return true;}











   
    /** login */
  
    
    function login(email,password,arr){
        for(var i=0;i<arr.length;i++){
            if(arr[i].email==email.value&&arr[i].password==password.value){ 
                var index =i;
             localStorage.setItem('userName',arr[index].name)
                

          
              return true;
            }
            
          }
          return false;
    
    }
    
    
    btnin?.addEventListener('click',function(e){
        
        if(login(emailsignin,passwordsignin,database)==true){
          
            e.target.setAttribute('href','./home.html')
            
            invalid.classList.replace('d-block','d-none')
            success.classList.replace('d-none','d-block')
        }
        else{
            invalid.classList.replace('d-none','d-block')
            success.classList.replace('d-block','d-none')

        }
       

    })

    ///////////////////////welcome/////////////////////////////////////////////////////////////////

if(localStorage.getItem('userName')!=null){
    username.innerHTML +=' ' +localStorage.getItem('userName');

}
logOut?.addEventListener('click',function(){
    localStorage.removeItem('userName');
    window.location.href='./index.html'
})






///// reset password   /////////



var updata=document.getElementById('updata')

function updatapassword(){
    for(let i=0;i<database.length;i++){
        if(database[i].email==emailinput.value && validation(passwordinput.id,passwordinput.value)==true){
            database[i].password=passwordinput.value;
            localStorage.setItem('all',JSON.stringify(database))
            
            
            success.classList.replace('d-none','d-block')
        }
        else{
            
            success.classList.replace('d-block','d-none')

        }
       
        
    }
    
}


updata?.addEventListener('click',function(){
   
    updatapassword()
    database=JSON.parse(localStorage.getItem('all'))
    
   
   

})


let input=document.getElementById('reset');
input?.addEventListener('input',function(e){
   

    if(e.target.tagName=='INPUT'){
        let inputid=e.target.id
        let inputvalue=e.target.value
        validation(inputid,inputvalue)
    }
    
})


/*      */