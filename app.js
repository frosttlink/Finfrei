import { capital as capital, exibicao, juros as jr, juros, logMenu, logSaque, resultadoLucro, saldoAtualDeposito, tempo, tempo as tp } from "./exibicao.js"
import { depositar, exibirSaldo, jurosCompostos, sacar } from "./financeiro.js"
import { menu } from "./menu.js"

import prompt from "prompt-sync"
let ler = prompt()

console.clear()
let respMenu = logMenu()

let saldo = 0;
let cpt = 0;
let jr = 0;
let tp = 0;
let r = 0;

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
    cpt = capital()
    jr = juros()
    tp = tempo()

    r = jurosCompostos(cpt, jr, tp)

    resultadoLucro(r)
    
    respMenu = logMenu()
  }
}
