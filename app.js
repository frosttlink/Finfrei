import { capital as cap, capital, exibicao, juros as jur, juros, logMenu, logSaque, saldoAtualDeposito, tempo as temp, tempo } from "./exibicao.js"
import { depositar, exibirSaldo, jurosCompostos, sacar } from "./financeiro.js"
import { menu } from "./menu.js"

import prompt from "prompt-sync"
let ler = prompt()

console.clear()
let respMenu = logMenu()
let saldo = 0
let cap = 0
let jur = 0
let temp = 0

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
    cap = capital()
    jur = juros()
    temp = tempo()

    jurosCompostos(cap, jur, temp)

    respMenu = logMenu()
  }
}
