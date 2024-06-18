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

export function capital() {
  console.log("Qual será o capital")
  let c = Number(ler())

  return c
}

export function juros() {
  console.log("Qual será o juros")
  let j = Number(ler())

  return j
}

export function tempo() {
  console.log("Qual será o tempo")
  let t = Number(ler())

  return t
}

export function resultadoLucro (r){
  console.log(`o seu lucro é ${r}`);
}