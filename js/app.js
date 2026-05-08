// FOTO DE PERFIL
const foto = document.getElementById("foto");
const preview = document.getElementById("preview");

foto.addEventListener("change", function(){

  const archivo = this.files[0];

  if(archivo){

    const lector = new FileReader();

    lector.addEventListener("load", function(){
      preview.src = lector.result;
    });

    lector.readAsDataURL(archivo);
  }

});


// VALIDAR CONTRASEÑAS
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const mensaje = document.getElementById("mensajePassword");

function validarPassword(){

  if(confirmar.value === ""){
    mensaje.textContent = "";
    return;
  }

  if(password.value === confirmar.value){

    mensaje.textContent = "✅ Las contraseñas coinciden";
    mensaje.style.color = "green";

  }else{

    mensaje.textContent = "❌ Las contraseñas no coinciden";
    mensaje.style.color = "red";

  }

}

password.addEventListener("keyup", validarPassword);
confirmar.addEventListener("keyup", validarPassword);


// MOSTRAR COLOR SELECCIONADO
const color = document.getElementById("color");
const textoColor = document.getElementById("textoColor");

color.addEventListener("input", function(){

  textoColor.textContent = 
  "Color seleccionado: " + color.value;

  textoColor.style.color = color.value;

});

// FORMULARIO
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

  // Evita que la página se recargue
  event.preventDefault();

  // Validar contraseñas
  if(password.value !== confirmar.value){

    alert("Las contraseñas no coinciden");
    return;
  }

  // Mensaje de éxito
  alert("✅ Datos guardados correctamente");

  // Limpiar formulario
  formulario.reset();

  // Regresar imagen por defecto
  preview.src = "https://via.placeholder.com/150";

  // Reiniciar texto del color
  textoColor.textContent = "Color seleccionado: Ninguno";
  textoColor.style.color = "#000";

  // Limpiar mensaje de contraseña
  mensaje.textContent = "";

});
