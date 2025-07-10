//constante del servidor local
const URL_API_FILMS = "http://localhost:3000/films";

// ========================================
//  READ <<>> GET
// ========================================
//1. Crear función  donde se guardará la info de todas las películas
const getAllFilms = async () => {
    //2. Crear función que llama al servidor y devuelve la información.
    //await hace que la función se espere hasta recibir todos los datos del servidor
    //La información se guarda en formato string en la variable response. Ej: '{"films":[{"id":"1","title":"El Rey León"}]}'
    const response = await fetch(URL_API_FILMS);
    //3. Convertir la respuesta en datos tipo json (los que se pueden usar)
    //await hace que la funcion espere hata que terminen los datos de convertirse
    //la información se guarda en formato json en la variable "data"
    //console.log("Respuesta del servidor:", response);
    const filmData = await response.json();
    //4. Devolver los datos para que se puedan usar en otra parte del código

    //console.log("Datos convertidos:", filmData);
    return filmData;
}

getAllFilms();


// ========================================
//  PRINT
// ========================================
let filmContainer = document.getElementById("film-section");

//1. Crear funcion para mostrar películas en pantalla
const printFilms = async () => {
    //2. Obtener los datos de las películas desde getAllFilms
    const listFilms = await getAllFilms();
    //console.log("Lista de peliculas:", listFilms)
    //3. Recorrer cada película de la lista y muestra cada película
    listFilms.forEach(film => {
        //console.log("titulo de la pelicula:", film.title);
        //console.log("Director de la pelicula: ", film.director);
        //console.log("Descripcion de la película:", film.description);
        //printFilms.innerHTML = `<div><h1>${book.title}</h1></div>`;
        filmContainer.innerHTML += `<div data-film-id="${film.id}">
        <h1>Título de la película: ${film.title}</h1>
        <h2>Director de la película: ${film.director}</h2>
        <p><b>Descripción de la película:</b> ${film.description}</p>
        <p><b>ID de la película:</b> ${film.id}</p>
        </div>`;


    });
}
printFilms();



// ========================================
//  CREATE <<>> POST
// ========================================
//1. Creamos funcion para crear nuevas películas
//newFilm recibe como parámetro los datos de la película nueva que queremos crear
const createFilm = async (newFilm) => {
    //2. Crear función que hace la petición POST (enviar datos)
    const response = await fetch(URL_API_FILMS, {
        //3. Configurar el método para decir que ENVIAMOS datos
        method: "POST",
        //4. Configurar tipo de FORMATO (JSON) que tienen los datos
        headers: { "Content-Type": "application/json" },
        //5. Enviar datos de la película. 
        //body contiene los datos que queremos enviar al servidor
        // JSON.stringify convierte el objeto newFilm a formato JSON, 
        // porque newFilm es un objeto JavaScript, y el servidor necesita recibir los datos como texto JSON. 
        // "JSON.stringify()" hace esa conversión.
        body: JSON.stringify(newFilm)
    });
    //5. Convertir respuesta del servidor a formato JavaScript
    const createdFilm = await response.json();
    //6. Devuelve el resultado de la función
    return createdFilm;
};

createFilm()