let tarefas = [
    {
        nome: 'Comprar leite',
        categoria: 'compras',
        realizada: false
    },
    {
        nome: 'Escutar chimbinha',
        categoria: 'lazer',
        realizada: true
    },
    {
        nome: 'Terminar TP Web',
        categoria: 'estudos',
        realizada: true
    },
    {
        nome: 'Comprar café',
        categoria: 'compras',
        realizada: true
    }
];

function insereTarefaNaPagina(tarefa) {
    let listaTarefas = document.querySelector('ul#lista-tarefas')
    let tarefaEl = document.createElement('li');

    tarefaEl.innerHTML = `${tarefa.nome}`;
    tarefaEl.classList.add(`item-tarefa`, `categoria-${tarefa.categoria}`);

    if (tarefa.realizada) {
        tarefaEl.classList.add('marcado');
    }

    listaTarefas.appendChild(tarefaEl);
    tarefaEl.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('marcado');
    });
}

for (tarefa of tarefas) {
    insereTarefaNaPagina(tarefa);
}

let btnAddTarefa = document.querySelector('#incluir-nova-tarefa');
let nomeNovaTarefaEl = document.querySelector('#nova-tarefa-nome');

function addTarefa() {
    let categoriaNovaTarefaEl = document.querySelector('#nova-tarefa-categoria');
    let tarefa = {
        nome: nomeNovaTarefaEl.value,
        categoria: categoriaNovaTarefaEl.value,
        realizada: false
    };

    tarefas.push(tarefa);
    insereTarefaNaPagina(tarefa);
    nomeNovaTarefaEl.value = '';
    nomeNovaTarefaEl.focus();
}

btnAddTarefa.addEventListener('click', addTarefa);

let filtroCategoriaEl = document.querySelector('#filtro-de-categoria');

filtroCategoriaEl.addEventListener('click', (e) => {
    let tarefaNode = document.querySelectorAll('#lista-tarefas > li');
    for (tarefa of tarefaNode) {
        if (e.currentTarget.value === '' || tarefa.classList.contains(`categoria-${e.currentTarget.value}`)) {
            tarefa.classList.remove('retido-no-filtro');
        } else {
            tarefa.classList.add('retido-no-filtro');
        }
    }

});

nomeNovaTarefaEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addTarefa();
    }
});