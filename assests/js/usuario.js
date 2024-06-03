document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const direccion = document.getElementById('direccion').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirm_password = document.getElementById('confirm_password').value;

        // Validar que las contraseñas coincidan
        if (password !== confirm_password) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Construir el objeto de usuario
        const user = {
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            email: email,
            password: password
        };

        // Simular el envío del formulario (aquí iría tu lógica para enviar los datos al servidor)
        console.log('Registro exitoso:', user);
        // Aquí podrías enviar los datos del usuario al servidor mediante una solicitud HTTP

        // Limpiar el formulario después del registro exitoso
        registerForm.reset();
    });
});