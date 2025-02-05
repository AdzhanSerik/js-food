document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value

    const fetchUsers = await fetch('http://localhost:3000/api/auth/signIn', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })


    const data = await fetchUsers.json()
    if (fetchUsers.ok) {
        localStorage.setItem('userName', data)
        window.location.href = './index.html'
    }
    else {
        Swal.fire({
            title: "Ошибка",
            text: `Неверный логин или пароль`,
            icon: "error"
        });
    }
    console.log(data)
})
