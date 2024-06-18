import prompt from "prompt-sync";
let ler = prompt()

export function depositar(saldoAtual) {
  let  depositado;

  do {depositado = Number(ler())} 
    while (depositado <= 0)

  let novoValor = saldoAtual + depositado;

  return novoValor
}


export function sacar(saldoAtual) {
  let sacado;

  do {sacado = Number(ler())} 
    while (sacado <= 0)

  let novoValor = saldoAtual - sacado;

  return novoValor
}

export function exibirSaldo(saldo) {
  let saldoA = saldo

  return saldoA
}

export function jurosCompostos (juros, tempo, capital) {
  let montante;

  montante = capital (1 + (juros / 100))**tempo 

  return montante
}