function submit_form() {
     name= document.forms ['welcome_form']['name'].value;

     //sets value in local storage of browser.
     sessionStorage.setItem('name',name);
     //direct to page 
     location.href="quiz1.html";
     
     alert('Welcome '+ name);
     
}