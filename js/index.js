const d = new Date();
document.getElementById('demo').innerHTML = 'Copyright ' + d.getFullYear();
function alertaContacto () {
    const formContacto = document.querySelector("#formContacto");
    formContacto.addEventListener("submit", (e)=> {
      e.preventDefault();
      Swal.fire({
        icon: 'success',
        title: "Mensaje enviado correctamente",
        text: 'Responderemos su consulta a la brevedad',
        showConfirmButton: false,
      })
      setInterval(() => {
        window.location.pathname = "/index.html" // Para probar en local "/a5-g4-tienda-on-line/Frontend/index.html"
      }, 2500);
    })
  }
  
  if (window.location.pathname === "/contacto.html" || window.location.pathname === "/a5-g4-tienda-on-line/Frontend/contacto.html") {alertaContacto()}; 
  