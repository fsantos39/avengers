document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tabAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${tabAlvo}]`);
            escondeAbas();
            aba.classList.add('films__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('films__tabs__button--is-active');
        })
    }
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('films__tabs__button--is-active');
    }
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('films__list--is-active');
    }
}