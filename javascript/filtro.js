let statusDeTarefas = []; // usei um unico array para obter os tres tipos de informacao
export function Total() {
  pegarInfo();
  total.innerHTML = statusDeTarefas.length;
  statusDeTarefas = []
}
export function Concluidas() {
  pegarInfo();
  let conc = statusDeTarefas.filter((valor) => {
    return valor == true;
  });
  concluidas.innerHTML = conc.length;
   statusDeTarefas = []
}
export function Pendentes() {
  pegarInfo();
  let conc = statusDeTarefas.filter((valor) => {
    return valor == false;
  });
  pendentes.innerHTML = conc.length;
   statusDeTarefas = []
}
//peguei essa funcao para evitar a repeticao de codico
function pegarInfo() {
  let quantidadeTarefas = res.children;
  for (let item of quantidadeTarefas) {
    statusDeTarefas.push(item.innerHTML.includes("Concluída"));
  }
}

export function actualizar(){
  Pendentes()
  Concluidas()
  Total()
}

export function selecionarPor() {
  let divs = res.children;
  if (selpendentes.selected) {
    for (let div of divs) {
      if (div.innerHTML.includes("Concluída") == true) {
        div.classList.toggle("ocultar");
      }
    }
  }
  if (selconcluídas.selected) {
    for (let div of divs) {
      if (div.innerHTML.includes("Pendente") == true) {
        div.classList.toggle("ocultar");
      }
    }
  }
  if (seltodas.selected) {
    for (let div of divs) {
      div.classList.toggle("Mostrar");
    }
  }
}

