document.getElementById('dynamicButton').addEventListener('click', function () {
    var Nombre = document.getElementById('nombre').value;
    var Apellido = document.getElementById('apellido').value;
    var NumTelefonico = document.getElementById('numtelefonico').value;
    var CorreoElectronico = document.getElementById('correoelectronico').value;
    var OpSug = document.getElementById('opsug').value;

    if (Nombre === "" || Apellido === "" || NumTelefonico === "" || CorreoElectronico === "" || OpSug === "") {
        alert(" Ingrese Informacion en los Campos Vacios Porfavor");
    } else {
        window.location.href = "Formulario.html"
    }
});
