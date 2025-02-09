const campoEntrada = document.getElementById("campoEntrada");
const formTarefa = document.getElementById("formTarefa");
const listaTarefas = document.getElementById("listaTarefas");

function adicionarNovaTarefa() {
    const nomeTarefa = campoEntrada.value.trim();

    if (nomeTarefa === "") {
        campoEntrada.classList.add("input-erro");
        setTimeout(() => campoEntrada.classList.remove("input-erro"),
            1500);
        return;
    }

    const itemTarefa = document.createElement("li");
    const span = document.createElement("span");
    const btnExcluir = document.createElement("button");

    span.innerText = nomeTarefa;
    btnExcluir.innerHTML = "<i class='bi bi-trash'></i>";

    span.onclick = (evento) => {
        evento.target.classList.toggle("concluida");
    };

    btnExcluir.setAttribute("aria-label", "Excluir tarefa");

    btnExcluir.onclick = () => {
        listaTarefas.removeChild(itemTarefa);
    };

    itemTarefa.appendChild(span);
    itemTarefa.appendChild(btnExcluir);
    listaTarefas.appendChild(itemTarefa);

    campoEntrada.value = "";
}

formTarefa.addEventListener("submit", (evento) => {
    evento.preventDefault();
    adicionarNovaTarefa();
});