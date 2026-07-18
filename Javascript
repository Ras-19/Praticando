function Salvar() {
    let tabela = document.querySelector('table').innerHTML;
    localStorage.setItem('tabelaSalva', tabela);
    alert('Salvo!');
}
function Carregar() {
    let tabelaSalva = localStorage.getItem('tabelaSalva');
    if (tabelaSalva) {
        document.querySelector('table').innerHTML = tabelaSalva;
        alert('Carregado!');
    } else {
        alert('Nada salvo ainda.');
    }
}
function Editar() {
    let celulas = document.querySelectorAll('td');
    for (let i = 0; i < celulas.length; i++) {
        let editavel = celulas[i].getAttribute('contenteditable');
        if (editavel === 'true') {
            celulas[i].setAttribute('contenteditable', 'false');
        } else {
            celulas[i].setAttribute('contenteditable', 'true');
        }
    }
}
function Novalista() {
    let nome = prompt('Digite o nome da nova lista:');
    if (nome) {
        alert('Lista "' + nome + '" criada!');
    }
}
function Juntarlistas() {
    alert('Função Juntar listas em breve!');
}
function DeletarLista() {
    let certeza = confirm('Tem certeza que quer deletar a lista selecionada?');
    if (certeza) {
        alert('Lista deletada!');
    }
}