const pizzas = [
    {
        "id": 1,
        "imageUrl": "/pizzas/1.svg",
        "name": "Сырная",
        "types": [
            0
        ],
        "sizes": [
            26,
            40
        ],
        "price": 245,
        "category": 1,
        "rating": 6
    },
    {
        "id": 2,
        "imageUrl": "/pizzas/2.svg",
        "name": "Цыпленок барбекю",
        "types": [
            0
        ],
        "sizes": [
            26,
            40
        ],
        "price": 295,
        "category": 1,
        "rating": 4
    },
    {
        "id": 3,
        "imageUrl": "/pizzas/3.svg",
        "name": "Кисло-сладкий цыпленок",
        "types": [
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 275,
        "category": 2,
        "rating": 2
    },
    {
        "id": 4,
        "imageUrl": "/pizzas/4.svg",
        "name": "Чизбургер-пицца",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 415,
        "category": 3,
        "rating": 8
    },
    {
        "id": 5,
        "imageUrl": "/pizzas/5.svg",
        "name": "Крэйзи пепперони",
        "types": [
            0
        ],
        "sizes": [
            30,
            40
        ],
        "price": 580,
        "category": 2,
        "rating": 2
    },
    {
        "id": 6,
        "imageUrl": "/pizzas/6.svg",
        "name": "Пепперони",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 675,
        "category": 1,
        "rating": 9
    },
    {
        "id": 7,
        "imageUrl": "/pizzas/7.svg",
        "name": "маргарита",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 450,
        "category": 4,
        "rating": 10
    },
    {
        "id": 8,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре сезона",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 395,
        "category": 5,
        "rating": 10
    },
    {
        "id": 9,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре сезона",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 395,
        "category": 5,
        "rating": 10
    },
    {
        "id": 10,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре сезона",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 395,
        "category": 5,
        "rating": 10
    },
    {
        "id": 11,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре сезона",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 395,
        "category": 5,
        "rating": 10
    },
    {
        "id": 12,
        "imageUrl": "/pizzas/8.svg",
        "name": "Четыре Сезона",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 395,
        "category": 5,
        "rating": 10
    }
]


const getAllProducts = (req, res) => {
    res.json(pizzas)
}

module.exports = { getAllProducts }