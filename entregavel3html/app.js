
// =====================================================
// BLOCO 1 – FUNDAMENTOS E VARIÁVEIS
// =====================================================

console.log("===== BLOCO 1 – FUNDAMENTOS E VARIÁVEIS =====");

// 1. Variável let
let pontos = 50;

pontos += 10;

console.log("Pontos:", pontos);


// 2. Constante MAX_PONTOS e tentativa de reatribuição
const MAX_PONTOS = 100;

console.log("Máximo de pontos:", MAX_PONTOS);

// Uma constante não pode receber outro valor depois de declarada.
// A linha abaixo gera TypeError.
// Descomente para testar:
//
// MAX_PONTOS = 200;
//
// Erro esperado:
// TypeError: Assignment to constant variable.


// 3. Tipos primitivos

let texto = "JavaScript";       // string
let numero = 42;                // number
let ativo = true;               // boolean
let indefinido;                 // undefined
let vazio = null;               // null

console.log("Tipo de texto:", typeof texto);
console.log("Tipo de numero:", typeof numero);
console.log("Tipo de ativo:", typeof ativo);
console.log("Tipo de indefinido:", typeof indefinido);
console.log("Tipo de vazio:", typeof vazio);

// Observação:
// typeof null retorna "object" por uma particularidade histórica
// do JavaScript.


// 4. Template Literals

let nome = "Dalas";
let idade = 20;

let fraseTemplate = `Meu nome é ${nome} e eu tenho ${idade} anos.`;

console.log("Template Literal:");
console.log(fraseTemplate);


// A mesma frase utilizando concatenação com +

let fraseConcatenada =
    "Meu nome é " + nome + " e eu tenho " + idade + " anos.";

console.log("Concatenação:");
console.log(fraseConcatenada);


// =====================================================
// BLOCO 2 – FUNÇÕES
// =====================================================

console.log("\n===== BLOCO 2 – FUNÇÕES =====");

// 1. Função declarada e Hoisting

// A função é chamada ANTES de sua declaração.
// Isso funciona devido ao hoisting.
console.log("Maior de idade?", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}


// 2. Função de expressão

// A chamada abaixo NÃO pode ser feita antes da declaração.
// Ela geraria ReferenceError:
//
// console.log(ehMaiorDeIdadeExpressao(20));

const ehMaiorDeIdadeExpressao = function (idade) {
    return idade >= 18;
};

console.log(
    "Maior de idade usando função de expressão:",
    ehMaiorDeIdadeExpressao(20)
);


// 3. Função dobro – três formas

// Função declarada
function dobroDeclarada(n) {
    return n * 2;
}

// Função de expressão
const dobroExpressao = function (n) {
    return n * 2;
};

// Arrow Function
const dobroArrow = (n) => n * 2;

console.log("Dobro – função declarada:", dobroDeclarada(5));
console.log("Dobro – função expressão:", dobroExpressao(5));
console.log("Dobro – arrow function:", dobroArrow(5));


// 4. Parâmetro com valor padrão

function dobroComPadrao(n = 1) {
    return n * 2;
}

console.log("Dobro com argumento:", dobroComPadrao(10));
console.log("Dobro sem argumento:", dobroComPadrao());


// =====================================================
// BLOCO 3 – CONTROLE DE FLUXO
// =====================================================

console.log("\n===== BLOCO 3 – CONTROLE DE FLUXO =====");


// 1. Classificação da nota

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 5:", classificarNota(5));


// 2. Switch – Semáforo

let corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "verde":
        console.log("Siga");
        break;

    default:
        console.log("Cor inválida");
}


// 3. Tabuada do 5 usando for

console.log("\nTabuada do 5:");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// 4. Contagem regressiva usando while

console.log("\nContagem regressiva:");

let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}


// 5. Números de 1 a 20 – PAR ou ÍMPAR usando for

console.log("\nNúmeros pares e ímpares – FOR:");

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é ímpar`);
    }
}


// 6. Números de 1 a 20 – PAR ou ÍMPAR usando while

console.log("\nNúmeros pares e ímpares – WHILE:");

let numeroAtual = 1;

while (numeroAtual <= 20) {

    if (numeroAtual % 2 === 0) {
        console.log(`${numeroAtual} é par`);
    } else {
        console.log(`${numeroAtual} é ímpar`);
    }

    numeroAtual++;
}


// 7. Dia da semana usando switch

function diaDaSemana(numero) {

    switch (numero) {

        case 1:
            return "Domingo";

        case 2:
            return "Segunda-feira";

        case 3:
            return "Terça-feira";

        case 4:
            return "Quarta-feira";

        case 5:
            return "Quinta-feira";

        case 6:
            return "Sexta-feira";

        case 7:
            return "Sábado";

        default:
            return "Número inválido. Digite um número de 1 a 7.";
    }
}

console.log("\nDias da semana:");

console.log(diaDaSemana(1));
console.log(diaDaSemana(4));
console.log(diaDaSemana(7));
console.log(diaDaSemana(10));
