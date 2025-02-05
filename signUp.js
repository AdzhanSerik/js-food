const API = 'http://localhost:3000/api/auth/signUp'

async function addUser(firstName, lastName, email, passwordUser) {
    const addUser = await fetch(API, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            passwordUser
        })
    })

    if (addUser.ok) {
        Swal.fire({
            title: "Отлично!",
            text: `Регистрация прошла успешно`,
            icon: "success"
        });
        setTimeout(() => {
            document.location.href = './signIn.html'
        }, 2000)
    }

}


document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const firstName = document.querySelector('.firstName').value
    const lastName = document.querySelector('.lastName').value
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value
    await addUser(firstName, lastName, email, password)


})

