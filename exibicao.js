import { menu } from "./menu.js";
import prompt from 'prompt-sync'
let ler = prompt()

export function logMenu (){
  console.log(menu());
  let respMenu = Number(ler())

  return respMenu
}

export function perguntaDeposito () {
  console.log("Quanto gostaria depoistar")
}

