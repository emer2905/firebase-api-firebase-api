*Firebase API*

Este proyecto es una API basada en Firebase y Express.js que permite gestionar tareas y usuarios mediante operaciones CRUD.

🚀 Framework y Herramientas

Express: Maneja las rutas HTTP y la lógica de las solicitudes.

Firebase Admin SDK: Interactúa con Firebase Firestore para realizar operaciones CRUD.

Firebase Functions: Despliegue de funciones en la nube para manejar solicitudes HTTP.

JavaScript (Node.js): Lenguaje utilizado en el desarrollo de la API.

🛠️ *Funcionalidades del API*

CRUD completo para tasks y users.

Uso de Firebase Firestore para almacenar datos.

Express maneja rutas y Firebase Functions despliega y ejecuta la API en la nube.

📌 Rutas CRUD

Task Routes

POST /api/tasks → Agrega una nueva tarea.

GET /api/tasks → Obtiene todas las tareas.

GET /api/tasks/:id → Obtiene una tarea específica.

PUT /api/tasks/:id → Actualiza una tarea.

DELETE /api/tasks/:id → Elimina una tarea.

User Routes

POST /api/users → Agrega un nuevo usuario.

GET /api/users/:email → Obtiene un usuario por correo electrónico.

📜 Controladores

Task Controller (controllers/taskController.js)

addTask(req, res): Agrega una nueva tarea a Firestore.

getTasks(req, res): Recupera todas las tareas.

getTask(req, res): Recupera una tarea específica por su ID.

updateTask(req, res): Modifica los detalles de una tarea existente.

deleteTask(req, res): Elimina una tarea.

User Controller (controllers/userController.js)

addUser(req, res): Agrega un nuevo usuario a Firestore.

getUser(req, res): Recupera un usuario específico por correo electrónico.

🔄 Flujo de Trabajo de una Solicitud

El cliente realiza una solicitud HTTP (ej. POST /api/tasks).

Express maneja la solicitud y la dirige al controlador correspondiente (addTask).

El controlador interactúa con Firestore para realizar la operación.

El controlador devuelve una respuesta HTTP indicando el éxito o error de la operación.

Ejemplo de Solicitud

El cliente hace una solicitud POST /api/tasks con los datos de una tarea.

addTask recibe los datos y los guarda en Firestore.

El servidor responde con un mensaje confirmando la creación de la tarea.
