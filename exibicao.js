import { menu } from "./menu.js";
import prompt from 'prompt-sync'
let ler = prompt()

export function logMenu (){
  console.log(menu());
  let respMenu = Number(ler())

  return respMenu
}


export function logSaque() {
  console.log("Quanto é seu saldo atual");
  let saldoAtual = Number(ler())
  console.log("Quanto deseja sacar");
  return saldoAtual
}

export function saldoAtualDeposito() {
  console.log("Quanto é seu saldo atual");
  let saldoAtual = Number(ler())
  console.log("Quanto deseja depositar");
  return saldoAtual
}

export function exibicao(saldo) {
  console.log(`Seu Saldo Atual é ${saldo}`);
}

export function capital(capital) {
  console.log("Qual será o capital")
  capital = Number(ler())

  return capital
}

export function juros(juros) {
  console.log("Qual será o juros")
  juros = Number(ler())

  return juros
}

export function tempo(tempo) {
  console.log("Qual será o tempo")
  tempo = Number(ler())

  return tempo
}

export function resultadoLucro (r){
  console.log(`o seu lucro é ${r}`);
}