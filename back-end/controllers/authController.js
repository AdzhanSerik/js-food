const users = []

const getUsers = (req, res) => {
    res.json(users)
}

const signIn = (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = users.find(user => user.email == email && user.passwordUser == password)
    // user ? res.status(200) : res.status(404)
    user ? res.json(user.firstName) : res.status(500).json({ message: 'Неверный логин или пароль' })
}

const signUp = (req, res) => {
    const user = req.body

    users.push(
        {
            id: users.length == 0 ? 1 : users.length + 1,
            ...user
        }
    )
    console.log(users)
    res.json(user)
}



module.exports = { getUsers, signIn, signUp }