const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringSemEspaço = minhaString.trim()

console.log(minhaString)

console.log(minhaStringSemEspaço)

console.log(`A frase inicial tem ${minhaString.length} caracteres\nA frase alterada tem ${minhaStringSemEspaço.length} caracteres`)

console.log(minhaStringSemEspaço.replace("________","sticioso"))