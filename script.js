document.getElementById("search-button").addEventListener("click", async function() {
    // Se agrega un evento al botón con id 'search-button' para capturar el evento y ejecutar la función cuando se clica.
    // An event is added to the button with ID 'Search-Button' to capture the event and run the function when closed.

    let searchValue = document.getElementById("search-input").value.trim().toLowerCase();
    // Se obtiene el valor del input con id 'search-input', se eliminan los espacios extra y se convierte a minúsculas para realizar una búsqueda.
    // The value of the INPUT is obtained with ID 'Search-input', the extra spaces are eliminated and converts to lowercase to perform a search.

    let pokemonName = document.getElementById("pokemon-name");
    let pokemonID = document.getElementById("pokemon-id");
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    let types = document.getElementById("types");
    let hp = document.getElementById("hp");
    let attack = document.getElementById("attack");
    let defense = document.getElementById("defense");
    let specialAttack = document.getElementById("special-attack");
    let specialDefense = document.getElementById("special-defense");
    let speed = document.getElementById("speed");
    let spriteContainer = document.getElementById("sprite-container");
    // Se crean variables para referenciar los elementos del DOM donde se mostrarán los datos del Pokémon.
    // Variables are created to reference the elements of the DOM where the Pokémon data will be displayed.

    types.innerHTML = "";
    spriteContainer.innerHTML = "";
    // Se vacían los contenidos de los elementos 'types' y 'spriteContainer' para asegurar que no hay datos previos.
    // The contents of the 'Types' and 'Spritecontainer' elements are emptied to ensure that there are no previous data.

    if (searchValue === "") {
        alert("Pokémon not found");
        return;
    }
    // Si no se ingresa ningún valor en el campo de búsqueda, se muestra un mensaje de alerta y se detiene la ejecución.
    // If no value is entered in the search field, an alert message is shown and the execution stops.

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
        // Se hace una solicitud await a la API de Pokémon usando el valor de búsqueda.
        // A await application is made to the Pokémon API using the search value.

        if (!response.ok) {
            throw new Error("Pokémon not found");
        }
        // Si la respuesta de la API no es valida, lanza un error que capturara el bloque catch.
        // If the API's response is not valid, it launches an error that will capture the CATCH block.

        let data = await response.json();
        // Se convierte la respuesta de la API en un objeto JSON que contiene los datos del Pokémon.
        // The API response becomes a JSON object that contains the Pokémon data.

        pokemonName.textContent = data.name.toUpperCase();
        pokemonID.textContent = `#${data.id}`;
        weight.textContent = `Weight: ${data.weight}`;
        height.textContent = `Height: ${data.height}`;
        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;
        // Se actualizan los elementos del DOM con la información del Pokémon (nombre, ID, peso, altura y estadísticas).
        // The Dom elements are updated with the Pokémon information (name, ID, weight, height and statistics).

        data.types.forEach(type => {
            let typeElement = document.createElement("p");
            typeElement.textContent = type.type.name.toUpperCase();
            types.appendChild(typeElement);
        });
        // Se recorre la lista de tipos del Pokémon y se crean elementos mostrar cada tipo.
        // The pokémon type type list is traveled and elements are created to show each type.

        let sprite = document.createElement("img");
        sprite.id = "sprite";
        sprite.src = data.sprites.front_default;
        spriteContainer.appendChild(sprite);
        // Se crea una etiqueta <img> para mostrar la imagen del sprite del Pokémon y se agrega al contenedor de sprites.
        // An <img> label is created to show the image of the Pokémon sprite and add to the sprites container.

    } catch (error) {
        alert("Pokémon not found");
    }
    // Si ocurre algún error, se muestra un mensaje de alerta.
    // If an error occurs, an alert message is shown.
});
