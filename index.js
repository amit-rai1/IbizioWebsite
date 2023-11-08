const fname= document.getElementById('fname');
const email= document.getElementById('email');
const phone= document.getElementById('phone');
const loc= document.getElementById('loc');
const subject= document.getElementById('subject');

const submit = document.getElementsByClassName('form-data')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "contact@ibizo.in",
        Password : "139898635BCA70C88BE7B4383A98C7A6D15D",
        To : 'amit.rai@celetel.com',
        From : "amit.rai@celetel.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
})