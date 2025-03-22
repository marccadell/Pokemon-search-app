
# Pokémon Search App

Este proyecto es una aplicación web que permite a los usuarios buscar información detallada sobre Pokémon utilizando la API de Pokémon (PokeAPI). Al ingresar el nombre o ID de un Pokémon, la aplicación muestra su nombre, ID, estadísticas, tipos y una imagen de su sprite.

## 🗂️ Estructura del Proyecto

### 📁 Archivos principales:
- **index.html**: Contiene la estructura básica de la interfaz de usuario. Incluye un campo de entrada para ingresar el nombre o ID del Pokémon, un botón para realizar la búsqueda y una sección para mostrar los resultados con el nombre, ID, peso, altura, tipos, estadísticas y una imagen del sprite del Pokémon.

- **script.js**: Contiene la lógica para interactuar con la API de Pokémon y actualizar la interfaz de usuario. Cuando el usuario ingresa un nombre o ID y hace clic en el botón de búsqueda, la aplicación consulta la API y actualiza los elementos de la página con los datos del Pokémon. Si el Pokémon no se encuentra o ocurre un error, muestra un mensaje de alerta.

- **styles.css**: Define los estilos visuales de la aplicación. Asegura que la interfaz sea limpia y accesible, con un diseño centrado, botones estilizados y una presentación clara de la información del Pokémon.

## ⚙️ Funcionalidad

1. 🔍 **Búsqueda de Pokémon**: El usuario ingresa el nombre o ID de un Pokémon en el campo de entrada y hace clic en el botón de búsqueda.
2. 🌐 **Consulta a la API**: La aplicación realiza una consulta a la API de Pokémon utilizando el nombre o ID ingresado.
3. 📊 **Mostrar resultados**: Si la consulta es exitosa, la aplicación muestra el nombre, ID, peso, altura, estadísticas y tipos del Pokémon, junto con una imagen de su sprite.
4. ❌ **Manejo de errores**: Si el nombre o ID ingresado no corresponde a un Pokémon válido, se muestra un mensaje de alerta indicando que no se encontró el Pokémon.

## 🎨 Estilo y Diseño

- El proyecto utiliza un diseño simple y limpio, con una caja blanca centrada que contiene todos los elementos de entrada y salida.
- Los botones tienen un efecto de hover para mejorar la experiencia del usuario.
- La información del Pokémon se presenta de forma clara, con el nombre, estadísticas y tipos destacados.
- La imagen del sprite del Pokémon se muestra debajo de la información, con un tamaño ajustado para que se vea correctamente en la interfaz.

## ✅ Requisitos

- Navegador web moderno.
- Conexión a internet para realizar las consultas a la API de Pokémon.

## 🧪 ¿Cómo probar el proyecto?

1. Clona o descarga los archivos del proyecto.
2. Abre el archivo `index.html` en un navegador web moderno.
3. Escribe el nombre o ID de un Pokémon y haz clic en el botón "Search".
4. Visualiza los resultados y verifica los datos obtenidos desde la API.
5. Prueba con nombres incorrectos para validar el manejo de errores.

<br>

---
<br>

This project is a web application that allows users to search for detailed information about Pokémon using the Pokémon API (PokeAPI). By entering the name or ID of a Pokémon, the app displays its name, ID, stats, types, and an image of its sprite.

## 🗂️ Project Structure

### 📁 Main Files:
- **index.html**: Contains the basic structure of the user interface. It includes an input field to enter the Pokémon's name or ID, a button to perform the search, and a section to display the results with the Pokémon's name, ID, weight, height, types, stats, and an image of the sprite.

- **script.js**: Contains the logic for interacting with the Pokémon API and updating the user interface. When the user enters a name or ID and clicks the search button, the app queries the API and updates the page elements with the Pokémon's data. If the Pokémon is not found or an error occurs, an alert message is shown.

- **styles.css**: Defines the visual styles for the app. It ensures that the interface is clean and accessible, with a centered design, styled buttons, and clear presentation of Pokémon information.

## ⚙️ Functionality

1. 🔍 **Pokémon Search**: The user enters the name or ID of a Pokémon in the input field and clicks the search button.
2. 🌐 **API Request**: The app makes a request to the Pokémon API using the entered name or ID.
3. 📊 **Display Results**: If the request is successful, the app displays the Pokémon's name, ID, weight, height, stats, and types, along with an image of its sprite.
4. ❌ **Error Handling**: If the entered name or ID does not correspond to a valid Pokémon, an alert message is shown indicating that the Pokémon was not found.

## 🎨 Style and Design

- The project uses a simple, clean design with a white, centered box containing all the input and output elements.
- The buttons have a hover effect to enhance the user experience.
- The Pokémon's information is clearly presented, with the name, stats, and types highlighted.
- The sprite image of the Pokémon is displayed below the information, with a size adjusted to fit the interface.

## ✅ Requirements

- Modern web browser.
- Internet connection to query the Pokémon API.

## 🧪 How to Test the Project?

1. Clone or download the project files.
2. Open the `index.html` file in a modern web browser.
3. Enter a Pokémon name or ID and click the "Search" button.
4. View the results and verify the data retrieved from the API.
5. Test with incorrect names to check error handling.
