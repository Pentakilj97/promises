console.log('promiesw')

// function parallelFetch() {

//     const baseUrl='https://pokeapi.co/api/v2/'

//     const names=['bulbasaur','lucario','umbreon','sticazzi','stipeni']

//     const fetches=[]

//     for(const name of names){
//         const pokeUrl=baseUrl+'pokemon/'+name
//     console.log('url:',pokeUrl)
//     const request=fetch(pokeUrl)
//     fetches.push(request)
// }
// console.log(fetches)
// }
// parallelFetch()

// function sequentialFetch(){
//     const bulbasaurUrl='https://pokeapi.co/api/v2/pokemon/bulbasaur'

//     fetch(bulbasaurUrl)
//     .then(resp=>resp.json())
//     .then(bulbasaur=>{
//         // console.log(bulbasaur)
//         const newUrl=bulbasaur  .location_area_encounters
//         // console.log(newurl)
//         return fetch(newUrl)
//         .then(resp=>resp.json())
//         .then(enc=>{
//             const newObj={name:bulbasaur.name,firsEcountew:enc[0].location_area.name}
//             return newObj
//         })
//     }).then(enc=>console.log(enc))
// }


// sequentialFetch()

function getAllPokemon() {
    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

    fetch(pokeUrl)
        .then(resp => resp.json())
        .then(data => {

            const requests = []
            for (const result of data.results) {

                const detailUrl = result.url
                const request = fetch(detailUrl)
                    .then(resp => resp.json())
                    .then(err = null)
                requests.push(request)
            }
            return Promise.all(requests)
        }).then(data => console.log(data))

}
getAllPokemon()