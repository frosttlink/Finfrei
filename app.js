import { exibicao, jurosCapital, logMenu, logSaque, saldoAtualDeposito } from "./exibicao.js"
import { depositar, exibirSaldo, sacar } from "./financeiro.js"
import { menu } from "./menu.js"

import prompt from "prompt-sync"
let ler = prompt()

console.clear()
let respMenu = logMenu()
let saldo = 0

while (respMenu != 0) {
  if (respMenu == 1) {
    saldo = depositar(saldoAtualDeposito(saldo))
    respMenu = logMenu()
  } else if (respMenu == 2) {
    saldo = sacar(logSaque(saldo))
    respMenu = logMenu()
  } else if (respMenu == 3) {
    exibicao(exibirSaldo(saldo))
    respMenu = logMenu()
  } else if (respMenu == 4) {
    jurosCapital()
  }
}
