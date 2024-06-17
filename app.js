import { logMenu, saldoAtual } from "./exibicao.js"
import { depositar } from "./financeiro.js"
import { menu } from "./menu.js"

import prompt from "prompt-sync"
let ler = prompt()

console.clear()
let respMenu = logMenu()
let saldo;

while (respMenu != 0) {
  if (respMenu == 1) {
    saldo = depositar(saldoAtual(saldo))
    respMenu = logMenu()
  }
}
