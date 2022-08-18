

let text = "Hola mundo, como estan? ji";
let key = "Juan";


let textArr = text.toLowerCase().replace(/[\s^(,|.)]*/g, '').split('');

const encode = (arr, key) =>{
    const rows = key.length;
    const firstElement = key.toLowerCase().split('');
    const matrix = [];
    matrix.push(firstElement);
    let counter = 0;
    let element = [];
    
    for(let i = 0; i < arr.length; i++){
        if(counter < rows){
            counter++;
            element.push(arr[i]);
            if(i == arr.length-1){
                matrix.push(element);
            }
        }else{
            counter = 0;
            counter++;
            matrix.push(element);
            element = [...[]];
            element.push(arr[i]);
            if(i == arr.length-1){
                matrix.push(element);
            }
        }
    }

    while(matrix[0].length > matrix[matrix.length-1].length){
        matrix[matrix.length-1].push('x');
    }

    return matrix;
}

console.log(encode(textArr, key));