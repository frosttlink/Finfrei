import prompt from "prompt-sync";
let ler = prompt()

function depositar(saldoAtual) {
  let depositado;
  while (depositado <= 0){
  depositado = Number(ler());
  }
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