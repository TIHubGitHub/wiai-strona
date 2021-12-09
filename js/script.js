// Przekierowywanie ze zdjęcia na stronę główną
const navlogo = document.getElementById("nav-logo")
navlogo.addEventListener("click", () => {
    window.location.href = "../";
})

// Data z copyright
const fdate = document.getElementById("fdate");
let date =  new Date().getFullYear();
fdate.innerText = date;