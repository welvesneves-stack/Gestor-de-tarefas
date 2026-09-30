let adicionarbtn = document.getElementById("adicionarbtn");
let removerbtn = document.getElementById("removerbtn");
let editarbtn = document.getElementById("editarbtn");
let res = document.getElementById("res");
let tarefa = document.getElementById("tarefa");
let concluidas = document.getElementById("concluidas");
let total = document.getElementById("total");
let pendentes = document.getElementById("pendentes");
let seltodas = document.getElementById("seltodas");
let selpendentes = document.getElementById("selpendentes");
let selconcluídas = document.getElementById("selconcluídas");
let select = document.getElementById("filtro");

import * as funções from "./funcoesbtns.js";
adicionarbtn.addEventListener("click", () => {
  funções.adicionar();
  filtros.actualizar();
});
removerbtn.addEventListener("click", () => {
  funções.remover();
  filtros.actualizar();
});
editarbtn.addEventListener("click", () => {
  funções.editar();
  filtros.actualizar();
});

import * as filtros from "./filtro.js";

select.addEventListener("click", filtros.selecionarPor);
