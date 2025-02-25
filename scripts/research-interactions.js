document.addEventListener('DOMContentLoaded', () => {
    const researchCards = document.querySelectorAll('.research-card');
    
    researchCards.forEach(card => {
        card.addEventListener('click', () => {
            const project = card.dataset.project;
            loadResearchDetails(project);
        });
    });

    function loadResearchDetails(project) {
        const details = {
            'sweetgreen': {
                title: 'Sweetgreen Data Analytics Strategy',
                url: 'research/sweetgreen.html'
            },
            'ai-adoption': {
                title: 'AI Organizational Adoption Research',
                url: 'research/ai-adoption.html'
            }
        };

        if (details[project]) {
            window.location.href = details[project].url;
        }
    }
});