key = 'cat'
word = 'The sky is blue'
word2 = 'HKSUTSILEYBE'

function fixingKey(key) {
    key = key.toUpperCase()
    key = key.trim()
    return key.split('')
}

function generateMatrix(word, size) {   
    word = word.replace(/\s+/g, '')
    word = word.toUpperCase()
    matrix = []

    let j = 0
    let row = []
    for (let i = 0; i < word.length; i++) {
        if(j < size && i < word.length-1) {
            row.push(word[i])
            j++
        }
        else if(i == word.length-1) {
            row.push(word[i])
            matrix.push(row)
        }
        else {
            matrix.push(row)
            row = []
            j = 1
            row.push(word[i])
        }
    }
    return matrix
}

function cypher(word, key) {
    let cypherWord = ''
    matrix = generateMatrix(word, key.length)
    arrKey = fixingKey(key)
    dict = {}
    for(let i = 0; i < arrKey.length; i++) {
        let col = []
        for(let j = 0; j < matrix.length; j++) {
            col.push(matrix[j][i])
        }
        dict[arrKey[i]] = col
    }
    sortedKey = arrKey.sort()
    for(let i = 0; i < sortedKey.length; i++) {
        let partWord = dict[sortedKey[i]].join('') 
        cypherWord += partWord
    }   
    return cypherWord
}

function decode(word, key) {
    let wordDecode = ''
    let colSize = word.length / key.length
    let regex = new RegExp(`.{1,${colSize}}`, 'g')
    matrix = word.match(regex);
    arrKey = fixingKey(key)
    sortedKey = arrKey.sort()
    dict = {}
    let aux = []
    
    for(let i = 0; i < sortedKey.length; i++) {
        dict[sortedKey[i]] = matrix[i]
    }
    arrKey = fixingKey(key)
    for(let i = 0; i < arrKey.length;  i++) {
        aux.push(dict[arrKey[i]].split(''))
    }
    for(let i = 0; i < aux[0].length; i++) {
        for(let j = 0; j < arrKey.length; j++) {
            wordDecode += aux[j][i]
        }
    }
    return wordDecode;
}


const getValueInput = () => {
    const key = document.getElementById('key').value;
    const oration = document.getElementById('oration').value;
    const encondedText = document.getElementById('encodedText');
    if(key == '' || oration ==''){
        alert('Asegurece de llenar todos los campos. ')
    }else{
        document.getElementById('oration').value = '';
        document.getElementById('key').value = '';
    }

    encondedText.innerHTML = '';

    cypher(oration, key).split('').map(element => {
        let span = document.createElement('p');
        let text = document.createTextNode(element);
        span.appendChild(text);
        span.style.display = 'inline-block'
        span.className = 'animate__animated animate__fadeIn animate__infinite';
        encondedText.appendChild(span);
    })
    
}

const decodeWord = () => {
    const key = document.getElementById('key').value;
    const oration = document.getElementById('oration').value;
    const decodedText = document.getElementById('encodedText');
    if(key == '' || oration ==''){
        alert('Asegurece de llenar todos los campos. ')
    }else{
        document.getElementById('oration').value = '';
        document.getElementById('key').value = '';
    }

    decodedText.innerHTML = '';

    decode(oration, key).split('').map(element => {
        let span = document.createElement('p');
        let text = document.createTextNode(element);
        span.appendChild(text);
        span.style.display = 'inline-block'
        span.className = 'animate__animated animate__fadeIn animate__infinite';
        decodedText.appendChild(span);
    })
}

console.log('Hola mundo')




