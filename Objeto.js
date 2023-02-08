class Objeto {
  _id;
  _peso;
  _lucro;
  
  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
  
  get peso() {
    return this._peso;
  }

  set peso(value) {
    this._peso = value;
  }
  
  get lucro() {
    return this._lucro;
  }

  set lucro(value) {
    this._lucro = value;
  }

  constructor(id, peso, lucro) {
    this.id = id;
    this.peso = peso;
    this.lucro = lucro;
  }

  get custoBeneficio() {
    return this.calcularCustoBeneficio();
  }

  calcularCustoBeneficio() {
    return this._lucro / this._peso;
  }

}

// Cria os objetos

const caminhao1 = new Objeto(1, 400, 200);
const caminhao2 = new Objeto(2, 500, 200);
const caminhao3 = new Objeto(3, 700, 300);
const caminhao4 = new Objeto(4, 900, 400);
const caminhao5 = new Objeto(5, 600, 400);

// Calcula o custo beneficio

caminhao1.lucroPorPeso = caminhao1.custoBeneficio
caminhao2.lucroPorPeso = caminhao2.custoBeneficio
caminhao3.lucroPorPeso = caminhao3.custoBeneficio
caminhao4.lucroPorPeso = caminhao4.custoBeneficio
caminhao5.lucroPorPeso = caminhao5.custoBeneficio

// Um array recebe os objetos, para usar os metodos de array

const caminhoes = [
  caminhao1,
  caminhao2,
  caminhao3,
  caminhao4,
  caminhao5,
]

// Imprime nao ordenado
// console.table(caminhoes);

// declara para obter os pesos nao ordenados
const arrayPesosNaoOrdenados = []

for (let i = 0; i < 5; i++) {
  arrayPesosNaoOrdenados.push(caminhoes[i].peso)  
}

caminhoes.sort((a, b) => {
  if (a.lucroPorPeso > b.lucroPorPeso) {
    return -1
  } else {
    return true
  }
})

// Imprime ordenado pelo maior lucro sobre o peso
// console.table(caminhoes);

// declara a carga do caminhao
let cargaCaminhao = 2000;

// insere de forma dimamica no array somente os pesos dos caminhoes de forma ordenada
const arrayPesos = [];

for (let i = 0; i < 5; i++) {
  arrayPesos.push(caminhoes[i].peso)  
}

// Imprime somente os pesos ordenados
//console.log(arrayPesos);

// declara a variavel que vai guardar os pesos, para se tirar os indices

var aux = [];

// Com os pesos ordenados ja pelo lucro, vai adicionando enquanto a carga do caminhao aguentar

for (let i = 0; i < 5; i++) {
  if (cargaCaminhao > 0 && cargaCaminhao >= arrayPesos[i]) {
    cargaCaminhao = cargaCaminhao - arrayPesos[i];

    //console.log(cargaCaminhao); // imprime o peso que sobra, dps das cargas adicionadas   
    //console.log(i); // imprime os indices que foram adicionados. 
    //console.log(arrayPesos[i]);  // imprime os pesos adicionados     
    
    aux.push(arrayPesos[i]) // coloca dentro do array os indices      
  }
  
}

// Imprime os pesos que foram adicionados e salva numa variavel auxiliar

// console.log(aux); 

// Imprime os pesos nao ordenados

// console.log(arrayPesosNaoOrdenados);

const contador = aux.length; // 3
let acumulador = 0;
var guardaIndice = [];

// cria um conjunto solucao vazio, com todos em 0
const solucao = [0, 0, 0, 0, 0]

while (acumulador < contador) {
  guardaIndice.push(arrayPesosNaoOrdenados.indexOf(aux[acumulador])) // Guarda o indice de forma dinamica, de todos os pesos adicionados
  acumulador++;
}

// Imprime os indices dos pesos do caminhao

// console.log(guardaIndice);

// Insere 1 no conjunto solucao, onde encontra o indice dos pesos adicionados no array original

for (let i = 0; i < guardaIndice.length; i++) {
  solucao.splice(guardaIndice[i], guardaIndice[i] - 1 , 1)  
}

console.log(solucao);









































