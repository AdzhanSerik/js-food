const tabButtons = document.querySelectorAll('.tab-button')
const tabContents = document.querySelectorAll('.tab-content')

tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', () => {
        getAllProducts()
        const tab = tabButton.getAttribute('data-tab')
        tabContents.forEach((content, index) => {
            content.classList.remove('active')
        })
        tabContents[tab - 1].classList.add('active')
    })
})

async function getAllProducts() {
    const fetchProducts = await fetch('http://localhost:3000/api/products/getAllProducts')
    const products = await fetchProducts.json()
    console.log(products)
}
