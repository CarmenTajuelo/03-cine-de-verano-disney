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
};


// ========================================
//  PRINT
// ========================================
let filmContainer = document.getElementById("film-section");

//1. Crear funcion para mostrar películas en pantalla
const printFilms = async () => {
    //Borra el contenido del contenedor de las películas
    filmContainer.innerHTML = "";
    
    //2. Obtener los datos de las películas desde getAllFilms
    const listFilms = await getAllFilms();
    //console.log("Lista de peliculas:", listFilms)
    //3. Recorrer cada película de la lista y muestra cada película
    listFilms.forEach(film => {
        //console.log("titulo de la pelicula:", film.title);
        //console.log("Director de la pelicula: ", film.director);
        //console.log("Descripcion de la película:", film.description);
        //printFilms.innerHTML = `<div><h1>${book.title}</h1></div>`;
        filmContainer.innerHTML += `<div data-film-id="${film.id}" class="film-card">
        <h1>Título de la película: ${film.title}</h1>
        <h3>Director de la película: ${film.director}</h3>
        <p><b>Descripción de la película:</b> ${film.film_description}</p>
        
        <button onclick="populateFormForEdit('${film.id}')">Editar</button>
        <button onclick="deleteFilm('${film.id}')">Eliminar</button>
        </div>`;
    });
};
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

// ========================================
//  UPDATE <<>> PUT
// ========================================
// 1. Creamos la función para actualizar una película existente
const updateFilm = async (id, filmData) => {
    // 2. Petición al servidor con el ID de la película a actualizar
    const response = await fetch(`${URL_API_FILMS}/${id}`, {
        // 3. Usamos el método "PUT" para reemplazar los datos
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        // 4. Enviamos los nuevos datos de la película
        body: JSON.stringify(filmData)
    });
    const updatedFilm = await response.json();
    return updatedFilm;
};



// ==========================================
//  Form to Create New Films - Configurarion
// ==========================================
//1. Conectar el formulario con JavaScript. 
// Busca el formulario en el HTML por su ID y lo guarda en filmForm para poder usarlo
const filmForm = document.querySelector(".film-form");
const formTitle = document.querySelector(".film-form h2");
const submitButton = document.querySelector(".film-form button[type='submit']");

// Función para rellenar el formulario con datos de una película para editarla
const populateFormForEdit = async (id) => {
    const response = await fetch(`${URL_API_FILMS}/${id}`);
    const film = await response.json();

    document.getElementById("title").value = film.title;
    document.getElementById("director").value = film.director;
    document.getElementById("description").value = film.film_description;

    // Guardamos el ID en el formulario para saber que estamos editando
    filmForm.setAttribute("data-editing-id", id);

    // Cambiamos el título y el botón para que el usuario sepa que está editando
    formTitle.textContent = "Editar Película";
    submitButton.querySelector('.btn-text').textContent = "Actualizar Película";
    
    // Scroll suave al formulario
    document.getElementById('film-form').scrollIntoView({ behavior: 'smooth' });
};

//2. Escuchar cuando se envía el formulario
//Escucha cuando algo pasa con el formulario, específicamente cuando se envía el formulario al hacer click en el boton submit
filmForm.addEventListener("submit", async (event) => {
    //3. Evitar que la página se recargue cuando se envía el formulario (comportamiento by default)
    event.preventDefault();

    // Comprobamos si estamos editando una película existente
    const editingId = filmForm.getAttribute("data-editing-id");

    //4. Obtener la información del formulario
    //Obtitne el texto que el usuario escribió en los diferentes campos
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const description = document.getElementById("description").value;

    //5. Crear objeto con los datos del formulario
    const filmData = {
        title: title,
        director: director,
        film_description: description
    };

    if (editingId) {
        // Si hay un ID, actualizamos la película
        await updateFilm(editingId, filmData);
        // Limpiamos el atributo del ID y restauramos el formulario
        filmForm.removeAttribute("data-editing-id");
        formTitle.textContent = "Añadir Nueva Película Disney";
        submitButton.querySelector('.btn-text').textContent = "Crear Película";
    } else {
        // Si no, creamos una nueva
        await createFilm(filmData);
    }
    
    filmForm.reset(); // Limpiamos el formulario
    await printFilms(); // Recargamos la lista de películas
    
    // Scroll suave a la sección de películas
    document.getElementById('film-section').scrollIntoView({ behavior: 'smooth' });
});


// ========================================
//  DELETE <<>> DELETE
// ========================================

//1. Crear la función principal que va a eliminar la pelicula
const deleteFilm = async (id) => {
    // Preguntar al usuario si está seguro antes de eliminar
    const userConfirmed = window.confirm("¿Estás seguro de que quieres eliminar esta película?");

    // Si el usuario hace clic en "Aceptar", userConfirmed será true
    if (userConfirmed) {
        //2. Petición al servidor y guarda la respuesta en "response"
        const response = await fetch(`${URL_API_FILMS}/${id}`, {
            //3. Manda la orden de eliminar
            method: "DELETE"
        });
        //4. Verificar si la eliminación fue exitosa
        if (response.ok) {
            console.log(`Película con ID ${id} eliminada`);
            // Refrescamos la lista de películas solo si se eliminó correctamente
            await printFilms();
        } else {
            console.error("Error al eliminar la película");
            alert("Hubo un error al intentar eliminar la película.");
        }
    }
}

// ========================================
//  NAVEGACIÓN ACTIVA
// ========================================
// Función para actualizar el elemento activo del menú según el scroll
const updateActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const link = item.querySelector('a');
        if (link && link.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
};

// Escuchar el evento de scroll
window.addEventListener('scroll', updateActiveNav);