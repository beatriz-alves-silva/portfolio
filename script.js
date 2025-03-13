async function carregarProjetos() {
    const container = document.getElementById('projetos-container');

    try {
        const response = await fetch('projetos.json');
        const projetos = await response.json();

        projetos.forEach(projeto => {
            const card = document.createElement('div');
            card.classList.add('projeto-detalhes');

            card.innerHTML = `
                <img src="${projeto.imagemCapa}" alt="Imagem de capa do projeto ${projeto.titulo}">
                <span>${projeto.titulo}</span>
                <p>${projeto.descricao}</p>
                <div class="botoes">
                    ${projeto.linkSite ? `<a href="${projeto.linkSite}" target="_blank" class="btn">Ver projeto</a>` : ''}
                    ${projeto.linkRepositorio ? `<a href="${projeto.linkRepositorio}" target="_blank" class="btn">Repositório</a>` : ''}
                </div>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.log('Erro ao carregar projetos', error);
    }
}

carregarProjetos();
