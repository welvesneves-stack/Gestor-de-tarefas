import { actualizar } from "./filtro.js";
let tarefas = res.children;
let remove = false;
//Botão de adicionar
export function adicionar() {
  let txt = String(tarefa.value);
  if (tarefa.value == "") {
    return;
  } else {
    tarefa.value = "";
    //criar lista para armazenar as tarefas
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.style.color = "red";
    span.innerHTML = "Pendente";
    let p = document.createElement("p");
    p.className = "paragrafo";
    div.className = "div";
    //concluir com clique na tarefa
    let clique = true;
    p.addEventListener("click", () => {
      if (clique) {
        p.classList.toggle("concluido");
        if (span.innerHTML == "Pendente") {
          span.innerHTML = "Concluída";
          span.style.color = "green";
        } else {
          span.innerHTML = "Pendente";
          span.style.color = "red";
        }
      }
      actualizar()
    });
    //garantir que tenha ponto no final
    if (txt.endsWith(".")) {
      p.innerHTML = "📍 " + txt[0].toLocaleUpperCase() + txt.slice(1); // slice so vai remover a primeira letra
    } else {
      txt += ".";
      p.innerHTML = "📍 " + txt[0].toLocaleUpperCase() + txt.slice(1); // o toLocaleuppercase garante que aprimeira letra sempre seja maiúscula
    }
    //adicionar o elemento criado na tela
    res.appendChild(div);
    div.appendChild(p);
    div.appendChild(span);
  }
}
//Botão de remover
export function remover() {
  if (remove == false) {
    criarRadio();
    removerbtn.innerHTML = "Concluir";
    remove = true;
  } else {
    removerRadio();
    removerbtn.innerHTML = "Remover";
    esconderRadio();
  }
}
//Botão de editar
export function editar() {
  if (remove == false) {
    criarRadio();
    editarbtn.innerHTML = "Concluir";
    remove = true;
  } else {
    for (let i = 0; i < tarefas.length; i++) {
      let marcado = tarefas[i].lastElementChild;
      if (marcado.checked) {
        editarbtn.innerHTML = "Editar";
        tarefa.value = "";
        let inf = tarefas[i].firstChild;
        tarefa.value = String(`${inf.innerHTML}`).replace("📍 ", "");
        tarefas[i].remove();
      }
    }
    esconderRadio();
  }
}

//Funções reutilizaveis
function criarRadio() {
  for (let i = 0; i < tarefas.length; i++) {
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "radio";
    tarefas[i].appendChild(radio);
  }
}
function removerRadio() {
  for (let i = 0; i < tarefas.length; i++) {
    let marcado = tarefas[i].lastElementChild;
    if (marcado.checked) {
      tarefas[i].remove();
    }
  }
}
function esconderRadio() {
  for (let i = 0; i < tarefas.length; i++) {
    let radio = tarefas[i].lastElementChild;
    radio.remove();
    remove = false;
  }
}
