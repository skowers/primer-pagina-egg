function showAlert() { alert('¡Hola, esta es una alerta desde javascript');}

const form = document.getElementById("myForm")

form.addEventListener("submit", function (event) {
  event.preventDefault()
  validateform()
})

function validateform() {
  const emailInput = document.getElementById("email")
  const email = emailInput.value;

  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electronico válido.")
  } else {
    alert("Correo eletronico enviado correctamente")
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+.[^\s@]{2,7}$/
  return regex.test(email);
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})