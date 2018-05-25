# Test 1

Para responder a este test encontrarás un archivo llamado `test.js` en esta
misma carpeta donde hay un pequeño fragmento de código que deberás analizar
y responder a las siguientes cuestiones.

1. En el fragmento de código de nuestro archivo (`test.js`) podemos encontrar
 hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al
 finalizar la ejecución del script?

 -Estos son los valores que se obtendrian al ejecutar este script ,
 ya que Object.assign cambia el objeto de destino que en este caso es rgb
VAR RGB { red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  white: '#FFFFFF',
  black: '#000000' }
VAR WB { white: '#FFFFFF', black: '#000000' }
VAR COLORS { red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  white: '#FFFFFF',
  black: '#000000' }

2. Modifica el código para que las variables `rgb` y `wb` mantengan sus valores
iniciales y `colors` tenga los valores de ambas al finalizar la ejecución del
script.

-Para que no se modifique el objeto rgb hay que incluir unas llaves en la declaracion de la variable color
var colors = Object.assign({},rgb, wb);

3. Además, tenemos un bug localizado en dispositivos con Internet Explorer…
El código de nuestro script no funciona y necesitamos que se ejecute también
en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos
 propones?

-IE 11 no soporta Object.assign.
-Podría iterar la matriz y las claves y tomar los valores como una nueva propiedad del objeto resultante.


**PS**: No es estrictamente necesario tener Internet Explorer para poder identificar y/o resolver el bug.
