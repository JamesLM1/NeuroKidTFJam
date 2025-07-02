let form = document.getElementById('formularioTestimonio'),
    nombre = document.getElementById('nombre'),
    correo = document.getElementById('correo'),
    mensaje = document.getElementById('mensaje');

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario por defecto

    // Verificar que todos los campos estén llenos
    if (nombre.value.trim() === '' || correo.value.trim() === '' || mensaje.value.trim() === '') {
        alert("⚠️ Por favor, completa todos los campos.");
        return;
    }

    // Verificar formato de correo electrónico
    if (!validarCorreo(correo.value)) {
        alert("❌ El formato del correo es inválido.");
        return;
    }

    // Si pasa la validación, puedes hacer algo aquí (por ejemplo, enviar el formulario)
    alert("✅ ¡Mensaje enviado correctamente!");
    form.reset(); // Limpia los campos
});

function validarCorreo(correo) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return re.test(String(correo).toLowerCase());
}
