document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const fetchUsers = await fetch('https://272048b109ede573.mokky.dev/users')
    const users = await fetchUsers.json()

    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value

    const user = users.find((item) => item.email == email && item.userPassword == password)
    localStorage.setItem('userName', user.firstName)
    user ? window.location.href = 'index.html' : alert('Неверный логин или пароль')

})


