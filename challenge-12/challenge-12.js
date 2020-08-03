k
Mosre nokk
// ?Crie um objeto chamado `person`, com as propriedades:
    `name`: 
   `lastname`: String
    `age`: Number
	
var person = {name:'Manasseis', lastname: 'Ferreira', age:46}

Preencha cada propriedade com seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
* /
//?
console.log(person)
/ *
Mostrar no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie ou organize manualmente.
* /
console.log(Object.keys( person ))
/ *
Crie um array vazio chamado `books`.
 var books =[]

* /
//?
/ *
Coloque nesse araya 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
* /
//?
books.push({name: 'Calculo', pages: 50})

books.push({name: 'Calculo II', pages: 150})

books.push({name: 'Calculo IIi', pages: 250})
console . log (  '\ nLista de livros:'  ) ;
/ *
Mostrar no console todos os livros.
* /
books
/ *
Remova o último livro, e mostre-o no console.
* /
 console.log('Livro que está sendo removido:' + books.pop())
console . log (  '\ nAgora sobraram somente os livros:'  ) ;
/ *
Mostrar no console os livros restantes.a
* /
books
/ *
Converta os objetos que ficaram em `books` para strings.
* /
books = JSON.stringify( books )
console . log (  '\ nLivros em formato string:'  ) ;

/ *
Mostrar os livros nesse formato no console:
* /
//?

/ *
Converta os livros novamente para o objeto.
* /
//?
console . log (  '\ nAgora os livros são objetos novamente:'  ) ;
/ *
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
* /
//?
/ *
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
* /
//?
console . log (  '\ nMeu nome é:'  ) ;
/ *
Juntando todos os itens do array, mostre no console seu nome.
* /
//?
console . log (  '\ nMeu nome invertido é:'  ) ;
/ *
Ainda usando o objeto acima, mostre no console seu nome invertido.
* /
//?
console . log (  '\ nAgora em ordem alfabética:'  ) ;
/*
Mostre  TODOS  OS  itens  fazer  variedade  Acima ,  odenados  alfabeticamente .
console.log( '\nMeu nome é:' );
/*
Juntando todos os itens do array, mostre no console seu nome.k
// ?
console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
k
