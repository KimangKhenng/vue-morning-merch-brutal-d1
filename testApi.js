const API = 'https://api.github.com/users/tfd-ed/repos'

// const repos = fetch(API).then((response) => response.json()).then((data) => {
//     console.log(data[0])
// })
// console.log("Hello World")
// console.log(repos)



// Mostly, database, api, server, return as Promise<Reponse>

async function fetchData() {
    const repos = await fetch(API)
    console.log(repos)
}

fetchData()