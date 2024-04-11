		Reporte del Proyecto de Gestión  de Tareas 
 
NOMBRE: CHRISTIAN DE JESUS 
	CUENCA 
	VELAZQUEZ CHAVEZ ANDRES 
ARATH 
 
GRUPO: 15601 
 
MATERIA: DESARROLLO DE 
	APLICACIONES WEB 
 
	TEMA: PROYECTO PRIMER PARCIAL 
# Reporte del Proyecto de Gestión de Tareas

## Introducción

El proyecto de Gestión de Tareas es una aplicación web diseñada para ayudar a los usuarios a organizar sus tareas diarias de manera eficiente. Se solicita una aplicación que sea no solo funcional sino también responsiva, asegurando una experiencia de usuario óptima tanto en dispositivos móviles como de escritorio. Los requisitos específicos para este proyecto incluyen la capacidad de agregar, visualizar, editar y eliminar tareas. Además, se requiere que la aplicación pueda marcar tareas como completadas, filtrar tareas por su estado y almacenar las tareas en el almacenamiento local del navegador para preservar los datos entre sesiones. El diseño debe ser flexible y adaptativo, utilizando Flexbox o CSS Grid, unidades relativas y media queries para garantizar su responsividad.


## Desarrollo

### Estructura y Estilo

El desarrollo del proyecto comenzó con la definición de la estructura básica del HTML, estableciendo los componentes clave de la interfaz de usuario: un formulario para añadir tareas, un área de visualización para las tareas existentes y un conjunto de botones para filtrar tareas según su estado. Se utilizó un enfoque semántico para garantizar la accesibilidad y la facilidad de uso.

Para el diseño, se implementaron estilos CSS que aprovechan Flexbox, lo que permite una disposición flexible de los elementos de la interfaz que se adapta a diferentes tamaños de pantalla. Las unidades relativas y las media queries se utilizaron extensivamente para asegurar que la aplicación sea verdaderamente responsiva, ajustando el tamaño de los elementos y el espaciado para mejorar la experiencia de usuario en dispositivos móviles.

### Funcionalidad con JavaScript

La lógica de la aplicación se desarrolló con JavaScript, abordando cada uno de los requisitos funcionales. Se implementaron funciones para agregar nuevas tareas, marcarlas como completadas, editar su texto y eliminarlas. Además, se añadió la capacidad de filtrar las tareas por su estado, mejorando así la experiencia del usuario al permitirle concentrarse en tareas activas o revisar las completadas.

El uso del almacenamiento local del navegador para guardar las tareas asegura que la información del usuario no se pierda entre las sesiones, lo que añade una capa adicional de usabilidad y practicidad a la aplicación.

### Adaptabilidad y Responsividad

Siguiendo las mejores prácticas de diseño web responsivo, se utilizó una combinación de Flexbox, unidades relativas y media queries para asegurar que la aplicación se vea y funcione bien en una amplia gama de dispositivos. Este enfoque garantiza que los elementos de la interfaz se ajusten dinámicamente para aprovechar el espacio disponible, mejorando la experiencia del usuario en dispositivos con diferentes tamaños de pantalla.

Claro, vamos a desglosar el código proporcionado para tu aplicación de gestión de tareas, explicando cada parte y cómo contribuye a las funcionalidades solicitadas. Este código crea una web básica pero funcional que permite a los usuarios crear, visualizar, editar y eliminar tareas, además de filtrarlas por su estado. La aplicación también es responsiva, gracias al uso de Flexbox, unidades relativas y media queries.

### Estructura HTML

La base de la aplicación es un archivo HTML que estructura la interfaz de usuario. Tiene las siguientes partes principales:

- **`<header>`**: Contiene un título (`<h1>`) y un formulario (`<form id="task-form">`) con un campo de entrada para las nuevas tareas y un botón para agregarlas. Este formulario se usa para capturar las tareas que el usuario desea agregar.
- **`<ul id="task-list">`**: Es el contenedor donde se listarán las tareas. Cada tarea agregada se convertirá en un elemento de lista (`<li>`) dentro de este contenedor.
- **`<footer>`**: Contiene tres botones que permiten filtrar las tareas por su estado (todas, activas, completadas), utilizando un atributo `data-filter` para distinguir entre los filtros.

### Estilos CSS

Los estilos proporcionan la presentación visual y la responsividad de la aplicación. Algunos puntos clave son:

- **Flexbox**: Se utiliza en el contenedor principal (`.container`), el `<header>`, y el `<footer>` para un diseño flexible que se ajusta al tamaño de la pantalla. Esto es especialmente útil para mantener la aplicación usable en dispositivos móviles y de escritorio.
- **Unidades Relativas**: Se usan unidades como `%`, `rem`, y `em` para tamaños de fuente, márgenes, y dimensiones de elementos. Esto hace que el diseño sea más fluido y adaptable a diferentes tamaños de pantalla.
- **Media Queries**: Permiten ajustar estilos específicos según el tamaño del dispositivo, como cambiar la disposición de elementos de fila a columna en pantallas pequeñas.

### JavaScript

El script es el corazón de la funcionalidad de la aplicación. A continuación, se detallan sus partes principales:

- **Inicialización y Renderizado de Tareas**: Al cargar la página, se recuperan las tareas almacenadas en el almacenamiento local del navegador y se muestran mediante `renderTasks()`.
- **Agregar Nuevas Tareas**: La función `addTask` se dispara al enviar el formulario. Crea un nuevo objeto de tarea, lo añade al array de tareas, lo guarda en el almacenamiento local y actualiza la lista de tareas en la UI.
- **Marcar Tareas como Completadas y Eliminar Tareas**: Se manejan mediante las funciones `toggleComplete` y `deleteTask`, respectivamente. Estas funciones modifican el array de tareas y actualizan el almacenamiento local y la UI.
- **Editar Texto de Tareas**: La edición se hace directamente en el elemento de la lista gracias a `contenteditable="true"`. Al perder el foco (`onblur`), se captura el nuevo texto y se actualiza la tarea correspondiente.
- **Filtrar Tareas**: Los botones de filtro en el `<footer>` permiten al usuario visualizar todas las tareas, solo las activas o solo las completadas. La función `filterTasks` ajusta qué tareas se muestran basándose en el filtro seleccionado.

### Almacenamiento Local

El uso del almacenamiento local del navegador (`localStorage`) permite que las tareas persistan entre sesiones del navegador. Las tareas se guardan como una cadena JSON y se recuperan al cargar la página, asegurando que el usuario no pierda sus tareas al recargar o cerrar el navegador.

### Conclusión

Este código combina HTML, CSS y JavaScript para crear una aplicación de gestión de tareas que es funcional y responsiva. Demuestra conceptos fundamentales del desarrollo web, como manipulación del DOM, almacenamiento local, y diseño responsivo, ofreciendo una base sólida sobre la cual se pueden agregar más características y personalizaciones.



## Conclusión sobre el proyecto

El proyecto de Gestión de Tareas cumple con todos los requisitos especificados, ofreciendo una solución efectiva para la gestión de tareas diarias. La implementación de características avanzadas, como la edición de tareas y el filtrado por estado, junto con la capacidad de almacenar tareas en el almacenamiento local, proporciona una herramienta robusta y fácil de usar que mejora la productividad del usuario.

El diseño responsivo asegura que la aplicación sea accesible y funcional en una variedad de dispositivos, desde teléfonos móviles hasta computadoras de escritorio, lo que refleja una comprensión profunda de las necesidades actuales de los usuarios de aplicaciones web.

En resumen, este proyecto no solo cumple con los requisitos técnicos y funcionales establecidos sino que también ofrece una experiencia de usuario fluida y agradable, demostrando las capacidades de las tecnologías web modernas para crear aplicaciones potentes y adaptativas.
 
 
 
  https://github.com/ChristianJC1125/cristianjc25.hithub.io  el link del archivo gith

  
