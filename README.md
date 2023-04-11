# bus-station-test

## Problema a resolver

Se plantea desarrollar una solución a un problema lógico, el cuál debe implementar una función AWS Lambda en Java o Node JS. Esta debe exponerse como API REST a través del servicio AWS API GATEWAY.

Hay n grupos de amigos y cada grupo es numerado del 1 al n. EL ith grupo contiene ai personas.

Todos viven cerca de una parada de bus, y solo un bus funciona en esa ruta. EL bus vacío llega a la parada y todos los grupos quieren viajar en el bus. Sin embargo, cada grupo de amigos no quiere separarse. Así que entran al bus solo si el bus puede llevar todo el grupo.

Además, los grupos no quieren cambiar su posición relativa mientras viajan. En otras palabras, el grupo 3 no puede viajar en el bus, a menos que el grupo 1 y el 2 ya hayan viajado, adicionalmente es necesario que todos estén sentados dentro del autobús en este momento, lo que quiere decir que un bus de capacidad x solo puede transportar x personas simultáneamente.

Encuentre todos los posibles tamaños de x del bus para que pueda transportar a todos los grupos, cumpliendo con las condiciones anteriores, y cada vez que el bus salga de la estación, no haya sillas vacías en el bus (es decir, el número total de personas presentes dentro del bus es igual a x).

**Ejemplo**

Request
{
    "groups" : "1,2,1,1,1,2,1,3"
}
Response
{
    "sizes" : "3,4,6,12"
}

## Descripción de la solución

**URL API :** https://6ay2h5tdi5.execute-api.us-east-2.amazonaws.com/test/bus-station-test

Se recibe el evento y se convierte en un array númerico para ser almacenado en la constante *group*

`const group = event.groups.split(",").map(Number);`

Usando *reduce* se obtiene el total de personas en la constante nPeople el cual es el valor máximo de capacidad del bus

`const nPeople = group.reduce((acc, cur) => acc + cur, 0);`

Se definen las variables a usar en el ejercicio, en el cual *x* se inicializa con valor minimo posible de la capacidad del bus que corresponde al número de personas de primer grupo

```
    let x = group[0];
    let size =[];
    let sum = 0;
    
```
Se realiza un bucle while con las capacidades *x* posibles del bus. En cada iteración se valida si *x* es un valor aceptable para la solución, de ser así se almacena en la lista *size*

```
    while (x <= nPeople) {

        for(var i=0;i<group.length;i++){
            sum = sum + group[i];
            if (sum == x){sum = 0;}
            else if (sum > x){break;}
        }

        if (sum == 0){size.push(x);}

        x++;
        sum = 0;
    }
```
La función *response* retorna la respuesta de las poibles capacidades *x* del bus 

```
    const response = {
        statusCode: 200,
        body: JSON.stringify({sizes: size}),
    };
    return response;
```

**Autor**

Angie Rincón












