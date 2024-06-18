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

export function jurosCapital() {
  console.log("Qual será o capital")
  let capital = Number(ler())

  return capital
}

export function jurosJuros() {
  console.log("Qual será o juros")
  let juros = Number(ler())

  return juros
}

export function jurosTempo() {
  console.log("Qual será o tempo")
  let tempo = Number(ler())

  return tempo
}