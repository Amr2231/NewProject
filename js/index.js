var index = document.getElementById("index");   //  ===> Section sign in 
var Home = document.getElementById("Home");//  ===> Section sign up
//                                                      log in                                                                      


////////                                Start movement 


const movingElement = document.getElementById('movingElement');
var sub = document.getElementById("sub-main"); 
sub.classList.add("d-none"); 
var Account = document.getElementById("text");

var content = document.getElementById("content");
content.classList.add("d-none");
var main = document.getElementById("main");

const signupButton = document.getElementById('signupButton');
signupButton.addEventListener('click', () => {
    movingElement.classList.add('moved');
    signupButton.classList.add("d-none");
    Visible.classList.remove("d-none");
    Account.classList.add("d-none");
    content.classList.remove("d-none");
    main.classList.add("d-none");
    sub.classList.remove("d-none");
    reset()
    document.getElementById("FirstName").classList.remove("is-invaild");
    document.getElementById("FirstName").classList.remove("is-valid");
    document.getElementById("signinEmail").classList.remove("is-invaild");
    document.getElementById("signinEmail").classList.remove("is-valid");
    document.getElementById("signinPassword").classList.remove("is-invaild");
    document.getElementById("signinPassword").classList.remove("is-valid");
    successful.classList.add("d-none");
    Faild2.classList.add("d-none")
    

});
var Visible = document.getElementById("signinButton"); 
Visible.classList.add("d-none");
Visible.addEventListener('click', () => {
    movingElement.classList.remove("moved");
    Visible.classList.add("d-none");
    signupButton.classList.remove("d-none");
    Account.classList.remove("d-none");
    content.classList.add("d-none");
    main.classList.remove("d-none");
    sub.classList.add("d-none");
    

    document.getElementById("FirstName").classList.remove("is-invaild");
    document.getElementById("FirstName").classList.remove("is-valid");
    document.getElementById("SecondName").classList.remove("is-invaild");
    document.getElementById("SecondName").classList.remove("is-valid");
    document.getElementById("signupEmail").classList.remove("is-invaild");
    document.getElementById("signupEmail").classList.remove("is-valid");
    document.getElementById("signupPassword").classList.remove("is-invaild");
    document.getElementById("signupPassword").classList.remove("is-valid");
    exist.classList.add("d-none");

}
)

////////                                            Finish movement 


////////                                              Start Log in 
var successful2 = document.getElementById("Successful2")
var Faild2 = document.getElementById("Faild2")
Faild2.classList.add("d-none");
successful2.classList.add("d-none");



const signinButton2 = document.getElementById('signinButton2');
signinButton2.addEventListener('click', () => {
    const enteredEmail = document.getElementById('signinEmail').value;
    const enteredPassword = document.getElementById('signinPassword').value;
    

    
    // استرجاع المعلومات من localStorage
    const saved = localStorage.getItem('registeredEmail');

    // قارن المعلومات
    for(var i = 0 ; i<emailcontainer.length; i++){
        if (enteredEmail === emailcontainer[i].email && enteredPassword === emailcontainer[i].password) {
            console.log(emailcontainer[i].password);
            console.log(emailcontainer[i].email);
            reset();
            Faild2.classList.add("d-none");
            successful2.classList.remove("d-none");
            index.classList.add("d-none")
            Home.classList.remove("d-none")
            document.getElementById("exist2").innerHTML = "Welcome  " + emailcontainer[i].Sname 
            
            break;
        } else {
            Faild2.classList.remove("d-none");
            successful2.classList.add("d-none");
            reset();
        }
    }
});


////////                                             Finish Log in 


//                                                      Sign up                                    

var Sname = document.getElementById("FirstName");
var secondName = document.getElementById("SecondName");
var successful = document.getElementById("Successful")  
successful.classList.add("d-none");
var emailcontainer = [];    
if(localStorage.getItem("registeredEmail") == null){
    emailcontainer = [];
}else{
    emailcontainer = JSON.parse(localStorage.getItem("registeredEmail"))
}
var exist= document.getElementById('exist');
exist.classList.add("d-none");
const signupButton2 = document.getElementById('signupButton2');
signupButton2.addEventListener('click', () => {
    if(Sname.classList.contains("is-valid")
        &&secondName.classList.contains("is-valid")
        && signupEmail.classList.contains("is-valid")
        && signupPassword.classList.contains("is-valid")
        ){
            var info = {    
                Sname : document.getElementById("FirstName").value,
                secondName : document.getElementById("SecondName").value,
                email : document.getElementById('signupEmail').value,
                password : document.getElementById('signupPassword').value,
           }
           function isEmailExist() {
            for (var i = 0; i < emailcontainer.length; i++) {
                if (info.email.toLowerCase() == emailcontainer[i].email.toLowerCase()) {
                    return false
                }
            }
        }
                if (isEmailExist() == false) {
                    successful.classList.add("d-none");
                    exist.classList.remove("d-none");
                    reset();
                }else{
                    emailcontainer.push(info);
                    console.log(emailcontainer);
                    localStorage.setItem('registeredEmail', JSON.stringify(emailcontainer));
                    successful.classList.remove("d-none");
                    reset();
                    exist.classList.add("d-none")
                }
                document.getElementById("FirstName").classList.remove("is-invaild");
                document.getElementById("FirstName").classList.remove("is-valid");
                document.getElementById("SecondName").classList.remove("is-invaild");
                document.getElementById("SecondName").classList.remove("is-valid");
                document.getElementById("signupEmail").classList.remove("is-invaild");
                document.getElementById("signupEmail").classList.remove("is-valid");
                document.getElementById("signupPassword").classList.remove("is-invaild");
                document.getElementById("signupPassword").classList.remove("is-valid");
    
   }else {
    boxModal.classList.remove("d-none");

}} );
////////                                     Start Validation
////////                                     Regex of FirstName
function validationName(){
    var regex = /^[A-Z][a-z0-9]{2,}$/;
    if(regex.test(Sname.value)){
        console.log("Matched");
        document.getElementById("FirstName").classList.remove("is-invaild");
        document.getElementById("FirstName").classList.add("is-valid");

    }else{
        console.log("Not Mathced");
        document.getElementById("FirstName").classList.add("is-invaild");
        document.getElementById("FirstName").classList.remove("is-valid");

    }

}
////////                                     Regex of SecondName

function validationSecondName(){
    var regex = /^[A-Z][a-z0-9]{2,}$/;
    if(regex.test(secondName.value)){
        console.log("Matched");
        document.getElementById("SecondName").classList.remove("is-invaild");
        document.getElementById("SecondName").classList.add("is-valid");

    }else{
        console.log("Not Mathced");
        document.getElementById("SecondName").classList.add("is-invaild");
        document.getElementById("SecondName").classList.remove("is-valid");

    }

}
////////                                     Regex of Email

function validationEmail(){
    var regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if(regex.test(signupEmail.value)){
        console.log("Matched");
        document.getElementById("signupEmail").classList.remove("is-invaild");
        document.getElementById("signupEmail").classList.add("is-valid");

    }else{
        console.log("Not Mathced");
        document.getElementById("signupEmail").classList.add("is-invaild");
        document.getElementById("signupEmail").classList.remove("is-valid");
    }

}
////////                                     Regex of password

function validationPass(){
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    if(regex.test(signupPassword.value)){
        console.log("Matched");
        document.getElementById("signupPassword").classList.remove("is-invaild");
        document.getElementById("signupPassword").classList.add("is-valid");

    }else{
        console.log("Not Mathced");
        document.getElementById("signupPassword").classList.add("is-invaild");
        document.getElementById("signupPassword").classList.remove("is-valid");
    }

}
////////                                     Finish Validation

////////                                Start boxModel [Error when SignUp]
var deleteBtns;
var visitBtns;
var closeBtn = document.getElementById("closeBtn");
var boxModal = document.querySelector(".info-box");

function closeModal() {
    boxModal.classList.add("d-none");
  }
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeModal();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("info-box")) {
    closeModal();
  }
});
////////                                     Finish boxModel [Error when SignUp]


////////                                       Reset values
function reset(){
    Sname.value = null;
    secondName.value = null;
    document.getElementById('signinEmail').value= null;
    document.getElementById('signinPassword').value = null;
    document.getElementById('signupEmail').value= null;
    document.getElementById('signupPassword').value = null;
}

function logout(){
    index.classList.remove("d-none")
    Home.classList.add("d-none")
    successful2.classList.add("d-none");
}