// Search Functionality
function searchProducts() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const productName = item.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
