import prompt from "prompt-sync";
let ler = prompt()

export function depositar(saldoAtual) {


  let  depositado;

  do {depositado = Number(ler())} 
    while (depositado <= 0)

  let novoValor = saldoAtual + depositado;

  return novoValor
}


function sacar(saldoAtual) {
  let sacado;
  while (sacado <= 0) {
    sacado = Number(ler());
  }
  let novoValor = saldoAtual - sacado;

  return novoValor
}

function exibirSaldo(saldoAtual) {
  
}