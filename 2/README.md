# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que
nos devuelve el código es el mismo valor en cada iteración.

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?

 -En un segundo imprimira cinco cincos, ya que en el setTimeout el valor de la variable es reemplazada a cada paso del bucle    quedando solo el último valor que es tomado por la función además esta configurado así, debido a que 1000 milisegundos son 1 segundo. 
 Además la función solo se ejecuta una vez. Si necesita repetir la ejecución, hay que usar el método setInterval ().

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas…
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

```
    > 0
    > 1
    > 2
    > 3
    > 4
```

-Realizando el console.log antes del setTimeout dentro del for
