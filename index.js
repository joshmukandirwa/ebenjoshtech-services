document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const btn = document.getElementById('submitBtn');

        btn.innerText = "Envoi...";
        btn.disabled = true;

        emailjs.sendForm(
            "service_qo1iuee",
            "template_fjo7ubr",
            this
        ).then(() => {

            message.style.display = "block";
            message.style.color = "green";
            message.innerText = "Message envoyé avec succès ✅";

            form.reset();

            btn.innerText = "Envoyer avec succès";
            btn.disabled = false;

        }, (error) => {

            message.style.display = "block";
            message.style.color = "red";
            message.innerText = `❌ Echec de la connexion.
            Vérifiez votre connexion internet et réessayer.`;

            btn.innerText = "Envoyer";
            btn.disabled = false;

            console.log(error);
        });
    });
}

document.getElementById("newsletterForm").addEventListener(
  "submit",function(e) {
    e.preventDefault();

    const email =
    document.getElementById("newsletterInput").value;

    if(email){
      alert("Merci ! L'email"+ email +"a été ajouté à la newsletter");
      document.getElementById("newsletterInput").value ="";
    } 
    else{
      alert("Veuillez entrer un email valide");
    }
  }
)

const menu = document.querySelector('.menu h2');
const dropdown = document.querySelector('.menu .dropdown');
menu.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('show');
});

const openProfile = document.getElementById("openProfile");
const profileOverlay = document.getElementById("profileOverlay");
const closeProfile = document.getElementById("closeProfile");

openProfile.addEventListener("click", () => {
  profileOverlay.style.display = "flex";
});

closeProfile.addEventListener("click", () => {
  profileOverlay.style.display = "none";
});

profileOverlay.addEventListener("click", (e) => {
  if (e.target === profileOverlay) {
    profileOverlay.style.display = "none";
  }
});

const phrase = `Votre solution, notre expertise`;

const typingSpeed = 80;
const deletingSpeed = 50;
const waitTime = 5000;

let i = 0;
let isDeleting = false;

const textElement = document.getElementById("text");
const cursor = document.getElementById("cursor");

setInterval(() => {
  cursor.style.visibility =
    cursor.style.visibility === "hidden" ? "visible" : "hidden";
}, 500);

function typeEffect() {

  if (!isDeleting) {
    textElement.textContent = phrase.substring(0, i++);
    
    if (i > phrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, waitTime);
      return;
    }

    setTimeout(typeEffect, typingSpeed);

  } else {
    textElement.textContent = phrase.substring(0, i--);

    if (i < 0) {
      isDeleting = false;
    }

    setTimeout(typeEffect, deletingSpeed);
  }
}

  typeEffect();

});