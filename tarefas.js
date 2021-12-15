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
}

for(tarefa of tarefas){
    insereTarefaNaPagina(tarefa);
}