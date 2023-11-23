
import { setData } from "../components/sessionStorage.js";
import { getData } from "../components/sessionStorage.js";


// Evento de clic en el botón de login
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (e) => {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (email !== "" && password !== "") {
    const login = {
      correo: email,
      contra: password
    };

    // Guardar la información del usuario en sessionStorage
    sessionStorage.setItem('userData', JSON.stringify(login));

    // Redirigir a la página principal
    window.location.href = "/page/html_principal/index.html";
  }
});














