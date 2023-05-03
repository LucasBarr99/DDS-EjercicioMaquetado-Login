function validarDatosUsuario(){
    var nombre = document.getElementById("userNameInput").value;
    var pass = document.getElementById("userPassInput").value;
    //console.log(nombre)
    //console.log(pass)
    var hayError = false;

    switch (nombre){
        case '':
            document.getElementById("userNameInput").style.border = '3px solid red'
            alert('[ERROR] El nombre no puede estar vacio. Por favor, complete todos los datos');
            return false
        case 'admin':
            document.getElementById("userNameInput").style.border = '3px solid red'
            alert('[ERROR] El nombre \'admin\' no es valido como usuario. Por favor, elija otro nombre')
            return false
        default:
            console.log('Validacion Nombre: [OK]')
            break
    }

    switch (pass){
        case '':
            document.getElementById("userPassInput").style.border = '3px solid red'
            alert('[ERROR] La contraseña no puede estar vacia. Por favor, complete todos los datos');
            return false
        case '123': case 'admin':
            document.getElementById("userPassInput").style.border = '3px solid red'
            alert('[ERROR] La contraseña es muy debil. Por favor, elija una mas segura')
            return false
        default:
            console.log('Validacion Pass: [OK]')
            break
    }

    console.log('Registro exitoso')
    document.getElementById("formRegistro").style.display = "none"
    document.getElementById("usuario").innerHTML = nombre
    return true;
}