const textArea = document.querySelector("#textarea");
const mensaje = document.querySelector("#mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    document.querySelector("#imagen").style.display = "none";
    document.querySelector("#texto-mensaje").style.display = "none";
    document.querySelector("#parrafo").style.display = "none";
    document.querySelector("#mensaje").style.display = "show";
    document.querySelector("#mensaje").style.display = "inherit";
    document.querySelector("#copiar").style.display = "show";
    document.querySelector("#copiar").style.display = "inherit";
}

textArea.addEventListener("keydown", (e)=>{
    const expre = /[a-z ]/;
    if(!expre.test(e.key))  e.preventDefault(); 
       
})

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["u","ufat"],["o","ober"],["a","ai"],["i","imes"],["e","enter"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0; i < (matrizCodigo.length); i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function copiar(){
    let contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");
}


