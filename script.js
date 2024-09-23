document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Silahkan masukkan nama kamu:");
    let nameElement = document.querySelector(".name");
    let cardGreeting = document.querySelector(".cardInside p");
    if (userName) {
        nameElement.textContent = userName;
        cardGreeting.innerHTML = `Dear ${userName},`; 
    }
});
