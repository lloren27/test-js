# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises*
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones,
pero tenemos un pequeño problema… No es una solución totalmente cross-browser.
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo
modificarías nuestro código (`test.js`) para que funcione correctamente.

-Para que este tipo de código se ejecute en IE11 (que no es compatible con gran parte de ES6),
debe obtener una biblioteca de promesas de terceros (como Bluebird),
incluir esa biblioteca y cambiar su codificación para usar estructuras de codificación ES5.
(sin funciones de flecha, sin let, etc.)

<script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js">
</script>

<script>
var promise = new Promise(function(resolve){
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
});

promise.then(function(successMessage){
        console.log("Yes! " + successMessage);
    })
    .catch(function(failMessage){
        console.log("No! " + failMessage);
    });

</script>
