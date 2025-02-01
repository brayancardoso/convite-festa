// Obtém os elementos HTML pelo ID
let input = document.getElementById("nome");
let textarea = document.getElementById("palavras");
let botao = document.getElementById("botao");
let recados = document.getElementById("item-recados");
let botaoExcluir = document.getElementById("excluir"); // Novo botão para excluir todos os recados

// Recupera os recados armazenados no localStorage (caso existam), ou um array vazio se não houver recados salvos
let arraydeRecados = JSON.parse(localStorage.getItem('recados')) || [];

// Função para mostrar os recados na tela
function mostrarnaTela() {
    let novosrecados = ""; // Variável para armazenar os recados como uma string HTML

    // Percorre cada recado no array 'arraydeRecados' e adiciona um item de lista para cada recado
    arraydeRecados.forEach((recado, index) => {
        novosrecados += ` 
        <li class="item-recados">
            <p>${recado}</p>
            <button onclick="excluirRecado(${index})">Excluir</button> <!-- Botão para excluir um recado específico -->
        </li>`;
    });

    // Atualiza o conteúdo da lista de recados na tela com os novos recados
    recados.innerHTML = novosrecados;
}

// Função que é chamada quando o botão é clicado
function cliqueiNoBotao() {
    // Verifica se os campos de nome ou recado estão vazios
    if (input.value.trim() === "" || textarea.value.trim() === "") {
        alert("Por favor, preencha o nome e o recado.");
        return;
    }

    // Adiciona o nome e o recado concatenados ao array 'arraydeRecados'
    arraydeRecados.push(`${input.value}: ${textarea.value}`);

    // Limpa os campos de entrada após adicionar o recado
    input.value = "";
    textarea.value = "";

    // Atualiza a lista de recados na tela para refletir as alterações
    mostrarnaTela();

    // Armazena os recados no localStorage para persistência
    localStorage.setItem('recados', JSON.stringify(arraydeRecados));
}

// Função para excluir um recado específico
function excluirRecado(index) {
    // Remove o recado do array com base no índice
    arraydeRecados.splice(index, 1);

    // Atualiza a lista de recados na tela e no localStorage
    mostrarnaTela();
    localStorage.setItem('recados', JSON.stringify(arraydeRecados));
}

// Função para excluir todos os recados
function excluirTodosRecados() {
    // Limpa o array de recados
    arraydeRecados = [];

    // Atualiza a lista de recados na tela e no localStorage
    mostrarnaTela();
    localStorage.setItem('recados', JSON.stringify(arraydeRecados));
}

// Adiciona um evento de clique ao botão de adicionar recado
botao.addEventListener("click", cliqueiNoBotao);

// Adiciona um evento de clique ao botão de excluir todos os recados
botaoExcluir.addEventListener("click", excluirTodosRecados);

// Exibe os recados ao carregar a página (caso já existam armazenados no localStorage)
mostrarnaTela();


