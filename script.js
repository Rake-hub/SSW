function validar() {

    var usuario = document.getElementById("campo1").value;

    var contrasena = document.getElementById("campo2").value;

    var usuarioValido = 70;

    var contrasenaValida = 123;

    if (usuario == usuarioValido && contrasena == contrasenaValida) {

        // document.getElementById("miContenedor").innerHTML = `<img src="imagenes/dentro.webp" alt="foto verde" style="width:80px;">`;

        location.replace("convertidorGeorgina.html");

    } else {
        document.getElementById("miContenedor").innerHTML = `<h5 style="color:red;"> Datos incorrectos</h5>`;

        //opcional. Este código limpia los caampos del form en caso de equivocarnos

        document.getElementById("campo1").value = " ";

        document.getElementById("campo2").value = " ";

    }



}

function calcular() {

    var metros = document.getElementById("campo3").value;



    var resultado = metros * 39.3701;

    if (metros == " ") {} else {
        metros = document.getElementById("campo3").value;

        resultado = metros * 39.3701;

        document.getElementById("mimuestra").innerHTML = `${metros} Metros = ${resultado} Pulgadas `;

        if (metros <= 1) {
            document.getElementById("imagenes").innerHTML = `<img src="1.webp" alt="" class="fotoAltura">`;

        } else if (metros > 1 && metros <= 2) {
            document.getElementById("imagenes").innerHTML = `<img src="2.webp" alt="" class="fotoAltura">`;
        } else {

            document.getElementById("imagenes").innerHTML = `<img src="3.webp" alt="" class="fotoAltura">`;

        }
    }

    function eurosDolares(valNum) {
        document.getElementById("inputDolares").value=valNum*1.156236;
      }
      function dolaresEuros(valNum) {
        document.getElementById("inputEuros").value=valNum*0.864875337;
      }
      


}