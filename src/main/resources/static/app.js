// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const categoryCards = document.querySelectorAll('.category-card');
    const productCards = document.querySelectorAll('.product-card');
    const hearts = document.querySelectorAll('.heart-icon');

    // 1. Search filter
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        productCards.forEach(card => {
            const name = card.querySelector('.product-name').textContent.toLowerCase();
            card.style.display = name.includes(query) ? 'block' : 'none';
        });
    });

    // 2. Category filter
    categoryCards.forEach(cat => {
        cat.addEventListener('click', () => {
            // Remove active class
            categoryCards.forEach(c => c.classList.remove('active'));
            cat.classList.add('active');

            const category = cat.querySelector('.category-name').textContent.toLowerCase();
            productCards.forEach(card => {
                const productCategory = card.getAttribute('data-category');
                if(category === 'all products' || productCategory === category){
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Heart toggle
    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            heart.classList.toggle('favorited');
        });
    });
});
