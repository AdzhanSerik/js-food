const pizzas = [
    {
        "id": 1,
        "imageUrl": "/pizzas/1.svg",
        "name": "Сырная",
        "types": [0],
        "sizes": [26, 40],
        "price": 245,
        "category": 1,
        "rating": 6
    },
    {
        "id": 2,
        "imageUrl": "/pizzas/2.svg",
        "name": "Цыпленок барбекю",
        "types": [0],
        "sizes": [26, 40],
        "price": 295,
        "category": 1,
        "rating": 4
    },
    {
        "id": 3,
        "imageUrl": "/pizzas/3.svg",
        "name": "Кисло-сладкий цыпленок",
        "types": [1],
        "sizes": [26, 30, 40],
        "price": 275,
        "category": 2,
        "rating": 2
    },
    {
        "id": 4,
        "imageUrl": "/pizzas/4.svg",
        "name": "Чизбургер-пицца",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 415,
        "category": 3,
        "rating": 8
    },
    {
        "id": 5,
        "imageUrl": "/pizzas/5.svg",
        "name": "Крэйзи пепперони",
        "types": [0],
        "sizes": [30, 40],
        "price": 580,
        "category": 2,
        "rating": 2
    },
    {
        "id": 6,
        "imageUrl": "/pizzas/6.svg",
        "name": "Пепперони",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 675,
        "category": 1,
        "rating": 9
    },
    {
        "id": 7,
        "imageUrl": "/pizzas/7.svg",
        "name": "Маргарита",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 450,
        "category": 4,
        "rating": 10
    },
    {
        "id": 8,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре сезона",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 395,
        "category": 5,
        "rating": 10
    },
    {
        "id": 9,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре сезона",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 395,
        "category": 5,
        "rating": 10
    },
    {
        "id": 10,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре сезона",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 395,
        "category": 5,
        "rating": 10
    },
    {
        "id": 11,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре сезона",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 395,
        "category": 5,
        "rating": 10
    },
    {
        "id": 12,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре сезона",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 395,
        "category": 5,
        "rating": 10
    }
]

const cartButton = document.querySelector('.cart-button')
cartButton.addEventListener('click', () => {
    document.querySelector('.cart').classList.remove('hidden')
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.cart').classList.add('hidden')
})


const res = pizzas.find(pizza => pizza.id == 2)
console.log(res)

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const categoriesList = document.querySelector('.categories')

function renderCategories(indexCategory) {
    categoriesList.innerHTML = ''
    categories.forEach((item, index) => {
        categoriesList.insertAdjacentHTML('beforeend',
            `
                <button class="${indexCategory == index ? 'bg-black text-white' : 'bg-slate-100 text-black'}  px-5 py-3 rounded-full">${item}</button>
            `
        )
    })
    const categoryList = document.querySelectorAll('.categories button')
    categoryList.forEach((buttonCategory, index) => {
        buttonCategory.addEventListener('click', () => {
            renderCategories(index)
            if (index == 0) {
                renderPizzas(pizzas)
            }
            else {
                const pizzaCategory = pizzas.filter(pizza => pizza.category == index)
                renderPizzas(pizzaCategory)
            }

        })
    })
}

renderCategories(0)

const pizzaList = document.querySelector('#pizzaList')

renderPizzas(pizzas)

function renderPizzas(pizzas) {
    pizzaList.innerHTML = ''
    pizzas.forEach(item => {
        pizzaList.insertAdjacentHTML('beforeend', `
            <div class="p-5 flex flex-col items-center rounded-xl shadow-xl pizza">
                        <img class="" src="${item.imageUrl}" alt="">
                        <p class="text-center text-xl font-bold">${item.name}</p>
                        <div class="bg-slate-200 w-full p-2 mt-4 flex items-center flex-col gap-3 rounded-[5px]">
                            <div class="flex items-center justify-between gap-3">
                                <span class="bg-white p-1 rounded-[5px]">тонкое</span>
                                <span class="bg-white p-1 rounded-[5px]">традиционное</span>
                            </div>
                            <div class="flex items-center justify-between gap-3">
                                <span class=" bg-white p-1 rounded-[5px]">26см.</span>
                                <span class="bg-white p-1 rounded-[5px]">30см.</span>
                                <span class="bg-white p-1 rounded-[5px]">40см.</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between w-full mt-4">
                            <span class="text-2xl font-bold">${item.price}тг.</span>
                            <div onclick="addToCart(${item.id}, ${item.price}, '${item.imageUrl}', '${item.name}')" data-id="${item.id}" class="cursor-pointer flex gap-2 items-center border-orange-400 border-[2px] p-3 rounded-full">
                                <img src="./img/plus.svg" alt="">
                                <span>Добавить</span>
                                <span
                                    class="w-4 h-4 flex items-center justify-center bg-orange-500 p-3 rounded-full text-white text-[15px] font-bold">
                                    2
                                </span>
                            </div>
                        </div>
                    </div>
            
            `)
    });

}

function addToCart(id, price, imageUrl, name) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const pizzaObject = {
        id,
        name,
        imageUrl,
        price
    }
    cart.push(pizzaObject)
    localStorage.setItem('cart', JSON.stringify(cart))
    document.querySelector('.cart-pizza-list').innerHTML = ''
    renderCartPizzas()
}

function renderCartPizzas() {
    let count = 0
    const pizzas = JSON.parse(localStorage.getItem('cart')) || []
    localStorage.setItem('totalPizzas', pizzas.length)

    pizzas.forEach((item, index) => {
        count = count + Number(item.price)
        document.querySelector('.cart-pizza-list').insertAdjacentHTML('beforeend',
            `
            <div class="flex items-center justify-between w-[100%]">
                    <div class="flex items-center gap-3">
                        <img class="w-[150px]" src="${item.imageUrl}" alt="">
                        <div class="w-[400px]">
                            <p class="text-xl font-bold">${item.name}</p>
                            <p class="text-slate-400">Тонкое тесто, 26см.</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src=" ./img/MinusCart.svg" alt="">
                        <span class="font-bold">2</span>
                        <img src="./img/PlusCart.svg" alt="">
                    </div>
                    <p class="font-bold text-xl">${item.price}тг.</p>
                    <img class="cursor-pointer" onclick="removePizza(${index})" src="./img/Cross.svg" alt="">
                </div>
            `
        )
    })

    localStorage.setItem('totalPrice', count)


}

function removePizza(index) {
    const pizzas = JSON.parse(localStorage.getItem('cart')) || []
    pizzas.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(pizzas))
    document.querySelector('.cart-pizza-list').innerHTML = ''
    renderCartPizzas()
}

renderCartPizzas()

document.querySelector('.remove-cart').addEventListener('click', () => {
    localStorage.setItem('cart', '[]')
    document.querySelector('.cart-pizza-list').innerHTML = ''
    renderCartPizzas()
})


