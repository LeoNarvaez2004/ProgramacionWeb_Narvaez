// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json()) //convertir la respuesta a json
// .then(data => console.log(data))
// .catch(error => console.error('Error: ', error)
// );

// /METODO POST/
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Nuevo post',
//         body: 'Contenido del post',
//         userId: 1
//     })
// })
// .then(response => response.json()) //convertir la respuesta a json
// .then(data => console.log(data))
// .catch(error => console.error('Error: ', error)
// );

// async function obtenerDatos() {
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/3');
//         let data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
    
// }
// obtenerDatos();
// //console.log('Datos obtenidos', obtenerDatos());

fetch('https://jsonplaceholder.typicode.com/users')
.then(respose => respose.json())
.then(users => {
    const lista = document.getElementById('users');
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = "Usuario: " + user.name;
        lista.appendChild(li);
    });
})
.catch(error => console.error('Error: '+ error));