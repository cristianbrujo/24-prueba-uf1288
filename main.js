//Generar el programa que detecte si la paridad de filas de bytes de la siguiente matriz es correcta:

let bytes_a_comprobar = [
    [1, 0, 0, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1]
    ]

    function verificarParidad(matriz) {
        let resultados = matriz.map(fila => {
            let numeroDeUnos = fila.reduce((suma, bit) => suma + bit, 0);  //Para cada fila, se cuenta el número de unos usando reduce.
            return numeroDeUnos % 2 === 0;  //Se determina si el número de unos es par (% 2 === 0).
        });
    
        return resultados;   //Devuelve un array de booleanos indicando si cada fila tiene la paridad correcta.
    }
    
    let paridadCorrecta = verificarParidad(bytes_a_comprobar);
    
    paridadCorrecta.forEach((resultado, indice) => {
        console.log(`La paridad de la fila ${indice + 1} es ${resultado ? 'correcta' : 'incorrecta'}.`);
    });