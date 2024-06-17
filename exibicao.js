import { menu } from "./menu.js";
import prompt from 'prompt-sync'
let ler = prompt()

export function logMenu (){
  console.log(menu());
  let respMenu = Number(ler())

  return respMenu
}


export function logSaque() {
  console.log("Quanto gostaria de sacar")
}

export function saldoAtual() {
  console.log("Quanto é seu saldo atual e quanto gostaria de dpositar");
  let saldoAtual = Number(ler())
  
  return saldoAtual
}



// export function logDeposito () {
//  return console.log("Quanto gostaria de depoistar")
// }
