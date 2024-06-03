document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const direccion = document.getElementById('direccion').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirm_password = document.getElementById('confirm_password').value;

        if (password !== confirm_password) {
            alert('Las contraseñas no coinciden');
            return;
        }

        
        const user = {
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            email: email,
            password: password
        };

        console.log('Registro exitoso:', user);
        registerForm.reset();
    });
});
