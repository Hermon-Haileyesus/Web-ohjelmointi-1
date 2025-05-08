console.log("Keskustelu-sivu avattu");


function send(event) {
    event.preventDefault(); 

    
    let birthdayField = document.getElementById("birthdate");
    let emailField = document.getElementById("email");
    let typeField = document.getElementById("type");
    let massagefield = document.getElementById("message");
    let markkinointifield = document.getElementById("markkinointi");


    let birthday = birthdayField.value;
    let email = emailField.value;
    let type = typeField.value;
    let message = massagefield.value;
    let markkinointi = markkinointifield.checked? "Hyväksytty" : "Ei hyväksytty";

    console.log("Syntymäpäivä:", birthday);
    console.log("Sähköposti:", email);
    console.log("Viestin tyyppi:", type);
    console.log("Viesti:", message);
    console.log("Hyväksyn, että tietojani käytetään markkinoinnissa:", markkinointi );
  
   const currentDate = new Date();
   const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} klo ${currentDate.getHours()}:${currentDate.getMinutes()}`;

 
   const newComment = document.createElement("article");
   newComment.classList.add("comment");

   newComment.innerHTML = `
       <h4>${email} - ${formattedDate}</h4>
       <p>${message}</p>
   `;

   
   document.querySelector("section").appendChild(newComment);
    document.getElementById("kommentoiDialog").close();
}
function openDialog() {
    let form = document.querySelector("#kommentoiDialog form"); 
    form.reset();
    
    document.getElementById("kommentoiDialog").showModal(); 
}
