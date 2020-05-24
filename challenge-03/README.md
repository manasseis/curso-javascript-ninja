


# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var myvar = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {
 nome: 'Manasseis'
 ,sobrenome: 'Ferreira'
 ,sexo: 'Masculino'
 ,idade: 46
 ,altura: 1.85
 ,peso: 85
 ,andando: false
 ,caminhometros: 0
 }

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazeraniversario = function () {
pessoa.idade++
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function(metros) {
 pessoa.caminhometros += metros
 pessoa.andando = true
 }

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function() {
 pessoa.andando = false
 }

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomecompleto = function() {
 return 'Olá, meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome
 }

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostraridade = function() {
return 'Olá, eu tenho ' + pessoa.idade + ' anos'
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarpeso = function() {
return 'Eu tenho ' + pessoa.peso + ' Kg'
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostaraltura = function() {
'Minha altura é ' + pessoa.altura
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
 pessoa.nomecompleto() // 'Olá, meu nome é Manasseis Ferreira'

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
 pessoa.idade // 46

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.peso // 85

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.altura // 1.85

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazeraniversario()

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
pessoa.idae // 49

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(10)
pessoa.andar(20)
pessoa.andar(20)

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.andando // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar()

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.andando //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhometros // 50

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = function() {
 var sexo = pessoa.sexo
 var idade = pessoa.idade
 var metros = pessoa.caminhometros
 
 if( sexo == 'Feminino' ) {
	 inicio = 'Olá, eu sou a '
 } else {
	 inicio = 'Olá, eu sou o '
 }
 
 if( idade == 1 ) {
	 anos = 'ano'
 } else {
	 anos = 'anos'
 }
 
 if ( metros == 1 ) {
	 metro = 'metro'
 } else {
	 metro = 'metros'
 }
 
 return inicio 
 + pessoa.nome 
 + ' '
 + pessoa.sobrenome + ' ' 
 + ', tenho ' + pessoa.idade + ' ' + anos + ' ' + pessoa.altura + ' ' 
 + 'meu peso é ' + pessoa.peso + ' ' 
 + ' e hoje eu já caminhei ' 
 + pessoa.caminhometros + ' ' + metro
    }

// Agora, apresente-se ;)
pessoa.apresentacao()
```
