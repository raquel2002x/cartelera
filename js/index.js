const requestURL = "../json/peliculas.json";


async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {
    for (let index = 0; index < movies.peliculas.lenght ; index++)
        {
            
        
            const moviesSection = document.getElementById("movieSection");
        
            let id = movies.peliculas[index].id;
            let img = movies.peliculas[index].caratula;
            let title = movies.peliculas[index].titulo;
            let description= movies.peliculas[index].descripcion;
            let genre = movies.peliculas[index].genero;
            let director = movies.peliculas[index].director;

        

            //moviesSection.innerHTML += `
            //    ${director}
            //`

            console.log (movies.peliculas[index].caratula);
        
        };
})
