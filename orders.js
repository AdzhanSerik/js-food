const API = 'https://272048b109ede573.mokky.dev/orders'

async function renderOrders() {
    const fetchOrders = await fetch(API)
    const orders = await fetchOrders.json()

    orders.forEach(order => {
        let pizzas = ''
        order.products.forEach(item => {
            pizzas += `
                <div>${item.name}</div>
                <div>${item.price}</div>
            `
        })
        document.body.insertAdjacentHTML('beforeend', `
            <div>${order.userID}</div>
            ${pizzas}
        `)
    });

}

renderOrders()