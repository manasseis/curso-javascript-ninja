/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = [1, 'teste', true, {a1: 2}, null]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction(arg) {
	return arg
	}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myfunction(myvar)[1] // 'teste'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
> function ret(arg, num) {
  return arg[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myvar2 = [1, 'exec', 2.4, {teste: 1}, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
ret(myvar2, 0)
ret(myvar2, 1)
ret(myvar2, 2)
ret(myvar2, 3)
ret(myvar2, 4)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book ( nomeLivro ) {
var colecao = {
livro1: {pg: 100, autor: 'Autor1', editora: 'Ética1'},
livro2: {pg: 200, autor: 'Autor2', editora: 'Ética2'},
livro3: {pg: 300, autor: 'Autor3', editora: 'Ética3'}
} 

return !nomeLivro ? colecao : colecao[ nomeLivro ]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O autor do livro livro1' + book('livro1').pg)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro livro1' + book('livro1').autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O autor do livro livro1' + book('livro1').editora)
