
document.addEventListener('DOMContentLoaded', function() {
    const newsText = document.querySelector('.news-text');
    const text = newsText.textContent;
    
    // Limpar o conteúdo original
    newsText.innerHTML = '';
    
    // Criar spans para cada caractere
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        span.classList.add('rainbow-letter');
        
        // Adicionar mais espaço entre palavras
        if (text[i] === ' ') {
            span.style.marginRight = '8px';
        }
        
        newsText.appendChild(span);
    }
});
