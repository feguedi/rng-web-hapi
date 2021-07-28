# Generador de Números Pseudo aleatorios

## Descripción

Generador de números pseudo-aleatorios donde el usuario pueda elegir el tipo de método para generar.

Siguiendo el libro _"Simulación. Un enfoque práctico"_ del autor **Raúl Coss Bú**, donde el autor sugiere dos tipos de métodos congruenciales para poder experimentar en una simulación: congruencial mixto y congruencial multiplicativo.

> Estos números se consideran pseudoaleatorios, porque aunque pasan todas las pruebas estadísticas de aleatoriedad, ellos son de hecho completamente determinísticos.

Parte del proyecto es utilizar una API para que pueda generarse un archivo, ya sea JSON o CSV, mediante una solicitud. En cambio, si se quiere obtener un archivo de Excel con los números, se debe ingresar directamente a la versión web.

## API

El backend funciona a manera de API Rest. Los siguientes son los parámetros necesarios \(utilizando el método HTTP GET\) para que el web service pueda responder adecuadamente:

| Variable | Descripción | Tipo de dato |
| :---: | :--- | :---: |
| x | Semilla | _**número**_ |
| a | Multiplicador | _**número**_ |
| c | Constante aditiva | _**número**_ |
| m | Módulo | _**número**_ |
| metodo | Método congruencial | _**mixto / multiplicativo**_ |

## Pendientes

### Front end

* Cliente en ReactJS
* Gráfica en D3
  * Recibir un arreglo como valores a gráficar
  * Interacción para visualizar los datos

### Back end

* Agregar salida de datos con un archivo de Excel, JSON o CSV

## Notas

* Aquí algunos ejemplos de la librería SheetJS con Node [este es el tutorial](https://github.com/SheetJS/js-xlsx/tree/master/demos/server)
