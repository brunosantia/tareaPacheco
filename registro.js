const bodyDiv = document.createElement("div");
bodyDiv.style.backgroundColor = "violet";

// Establecer otros estilos para llenar la pantalla
bodyDiv.style.position = "fixed";
bodyDiv.style.top = "0";
bodyDiv.style.left = "0";
bodyDiv.style.width = "100%";
bodyDiv.style.height = "100%";
bodyDiv.style.zIndex = "-1";

// Agregar el elemento div al cuerpo del documento
document.body.appendChild(bodyDiv);

// Ahora puedes agregar contenido, como texto, imágenes u otros elementos, en la página.
// Por ejemplo, puedes crear un párrafo de texto:
const texto = document.createElement("p");
texto.style.fontSize = "24px";
texto.style.textAlign = "center";

// Agregar el párrafo al cuerpo del documento
document.body.appendChild(texto);

const formContainer = document.createElement("div");
formContainer.style.maxWidth = "300px";
formContainer.style.margin = "0 auto";
formContainer.style.padding = "20px";
formContainer.style.border = "1px solid #ccc";
formContainer.style.backgroundColor = "#f0f0f0";
formContainer.style.textAlign = "center";


const titulo = document.createElement("h2");
titulo.textContent = "Registro";

const nombreInput = document.createElement("input");
nombreInput.setAttribute("type", "text");
nombreInput.setAttribute("placeholder", "Nombre");
nombreInput.style.marginBottom = "10px";
nombreInput.style.padding = "5px";


const apellidoInput = document.createElement("input");
apellidoInput.setAttribute("type", "text");
apellidoInput.setAttribute("placeholder", "Apellido");
apellidoInput.style.marginBottom = "10px";
apellidoInput.style.padding = "5px";


const contrasenaInput = document.createElement("input");
contrasenaInput.setAttribute("type", "password");
contrasenaInput.setAttribute("placeholder", "Contraseña");
contrasenaInput.style.marginBottom = "10px";
contrasenaInput.style.padding = "5px";

const correoInput = document.createElement("input");
correoInput.setAttribute("type", "email");
correoInput.setAttribute("placeholder", "Correo");
correoInput.style.marginBottom = "10px";
correoInput.style.padding = "5px";

formContainer.appendChild(titulo);
formContainer.appendChild(nombreInput);
formContainer.appendChild(apellidoInput);
formContainer.appendChild(contrasenaInput);
formContainer.appendChild(correoInput);

<View style={styles.imageRoll}>
<TouchableOpacity style={styles.buttonRoll} onPress={pickImage}>
  <Text style={styles.textRoll}>Selecciona una imagen de perfil</Text>
  {image && <Image source={{ uri: image }} style={{ width: 170, height: 130,}} />}
</TouchableOpacity>
{/* <Button title="Selecciona una imagen de perfil" onPress={pickImage} />
*/}
</View>

const boton = document.createElement("button");
boton.textContent = "Enviar";
boton.style.backgroundColor = "#007bff";
boton.style.color = "white";
boton.style.border = "none";
boton.style.padding = "10px";
boton.style.cursor = "pointer";
boton.style.width = "100%";

// Agregar el botón de registro al contenedor del formulario
formContainer.appendChild(boton);

// Agregar el contenedor del formulario al cuerpo del documento
document.body.appendChild(formContainer);

// Agregar evento al botón de registro
boton.addEventListener("click", function() {
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const contrasena = contrasenaInput.value;
  const correo = correoInput.value;

  // Realizar alguna acción con los datos del formulario
  console.log("Nombre: " + nombre);
  console.log("Apellido: " + apellido);
  console.log("Contraseña: " + contrasena);
  console.log("Correo: " + correo);
});
