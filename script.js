let newStr = '';

function reverseAString(str) {
    for (let i = str.length -1; i >= 0; i--) {
        newStr += str[i];
        console.log(newStr) /*se colocar fora do for, só aparece a string invertida */
    }
}

let resultado = reverseAString('Hello Gama Academy')