# Pokémon Search App

Este proyecto es una aplicación web que permite a los usuarios buscar información detallada sobre Pokémon utilizando la API de Pokémon (PokeAPI). La aplicación permite obtener estadísticas y características específicas de un Pokémon al buscarlo por su nombre o ID.

## Estructura del Proyecto

### Archivos principales:
- **index.html**: Contiene la estructura básica de la interfaz de usuario. Incluye un campo de búsqueda donde el usuario puede ingresar el nombre o ID de un Pokémon y un botón para iniciar la búsqueda. Los resultados se muestran en varios párrafos que contienen el nombre, ID, peso, altura, estadísticas y tipos del Pokémon.
  
- **script.js**: Contiene la lógica que maneja la interacción con el usuario y la consulta a la API. Cuando el usuario ingresa un nombre o ID y hace clic en el botón de búsqueda, la aplicación realiza una solicitud a la API de Pokémon, obtiene los datos y los muestra en la página. Si el Pokémon no se encuentra, se muestra un mensaje de alerta.

### Funcionalidad

1. **Búsqueda de Pokémon**: El usuario puede ingresar el nombre o ID de un Pokémon en el campo de búsqueda.
2. **Solicitud a la API**: Al hacer clic en el botón de búsqueda, la aplicación consulta la API de Pokémon para obtener los datos del Pokémon.
3. **Mostrar resultados**: Los datos del Pokémon (nombre, ID, peso, altura, estadísticas y tipos) se muestran en la interfaz de usuario.
4. **Manejo de errores**: Si el Pokémon no se encuentra o ocurre algún error, se muestra un mensaje de alerta al usuario.

<br>


---
<br>

This project is a web application that allows users to search for detailed information about Pokémon using the Pokémon API (PokeAPI). The app retrieves and displays specific statistics and characteristics of a Pokémon when searched by its name or ID.

## Project Structure

### Main Files:
- **index.html**: Contains the basic structure of the user interface. It includes a search field where users can enter the name or ID of a Pokémon and a button to initiate the search. The results are displayed in several paragraphs containing the Pokémon's name, ID, weight, height, stats, and types.
  
- **script.js**: Contains the logic that handles user interaction and the API request. When the user enters a name or ID and clicks the search button, the application makes a request to the Pokémon API, retrieves the data, and displays it on the page. If the Pokémon is not found, an alert message is shown.

### Functionality

1. **Pokémon Search**: The user can enter the name or ID of a Pokémon in the search field.
2. **API Request**: When the search button is clicked, the app queries the Pokémon API to get the Pokémon's data.
3. **Display Results**: The Pokémon's data (name, ID, weight, height, stats, and types) are displayed on the user interface.
4. **Error Handling**: If the Pokémon is not found or any error occurs, an alert message is shown to the user.
