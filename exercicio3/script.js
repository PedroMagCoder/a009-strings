//Crie a const para a frase aqui

const string = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const frase = string

console.log(frase)

const frase2 = (frase.replace("verde","rosa"))
const frase3 = (frase2.replace("azul","laranja"))

console.log(frase3)

const frase4 = (frase3.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"))
 
console.log(frase4)