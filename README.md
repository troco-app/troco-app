<h1 align="center">
    <a href="https://i.postimg.cc/CMttpyBc/Home-Troco.png" target="_blank">
        <img src="https://i.postimg.cc/CMttpyBc/Home-Troco.png" />
    </a>
</h1>

## [TROCO - EXCHANGE SITE FOR RETRO LOVERS ](https://github.com/jorge-alejandro/2hand-ecommerce-shop)

#

## 💾 ¿Qué es TROCO?

TROCO es un proyecto de desarrollo de un portal especializado en el intercambio de artículos para amantes de la tencología retro, como videoconsolas, juegos y ordenadores, donde dos usuarios pueden acordar intercambiar uno o más artículos mediante el método tradicional del trueque. No solo las tecnología es retro, también lo es el modelo económico.

#

#

## ✍️ Requisitos del Proyecto

❌ `Usuarios anónimos`

- Pueden realizar **búsquedas por nombre, categoría, localidad y precio.**
- Pueden hacer **Login.**
- Pueden **registrarse con un email, un nombre y un password mediante un código de validación** que recibirán en su bandeja de entrada.

✅ `Usuarios registrados:`

- Pueden **gestionar su perfil:** cambiando de datos, añadiendo o actualizando su biografía e insertando una imagen de avatar.
- Pueden realizar **búsquedas por nombre, categoría, localidad y precio.**
- Publican **nuevos artículos** introduciendo un nombre, una imagen, una descripción, una categoría, un precio y una localidad para el artículo.
- Durante la **reserva de artículos** el trueque se desarrolla de la siguiente manera:
  - El vendedor recibe la **propuesta de trueque vía email y puede aceptarla y proponer una hora y lugar de entrega.**
  - El comprador recibe información sobre **si el trueque fue aceptado o rechazado vía email con la información** de hora y lugar de entrega en caso afirmativo.
  - El comprador **puede valorar al vendedor** después de realizar el trueque.

#

#

## 🧐 ¿Cómo funciona TROCO?

- Accede a **troco.app** (cuando este terminado el proyecto estara ahí subido, el dominio es nuestro 😎 ).
- Regístrate o haz Login.
- Sube uno o varios artículos que quieras hacer trueque.
- Completa las especificaciones de los artículos, tales como descripción, localización, estado del artículo, etc..
- Propón un trueque sobre algún artículo que desees intercambiar.
- Recibe una aceptación o rechazo a tu petición de trueque.

#

#

## 👨‍💻 ¿Cómo se ha desarrollado y como funciona TROCO?

| 🔨🔧 Tecnologías y herramientas:                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [Draw.io:](https://app.diagrams.net/) Software de diagramación que permite crear diagramas y flujos de trabajo de forma intuitiva y colaborativa.                                                                                                                                                                                                                                                                                                   | ![Draw.io](https://i.postimg.cc/ZRPTkjhv/TrocoBD.png)                                                  |
| [Excalidraw:](https://excalidraw.com/) Herramienta de dibujo que permite crear bocetos y diagramas de forma rápida y sencilla.                                                                                                                                                                                                                                                                                                                      | ![Excalidraw](https://i.postimg.cc/zGmYtw72/excalidraw-troco-2.png)                                    |
| [Figma:](https://www.figma.com/) Herramienta que permite crear prototipos interactivos que simulan la experiencia real del usuario.                                                                                                                                                                                                                                                                                                                 | ![Figma](https://i.postimg.cc/PfV9Cb8V/figma-troco.png)                                                |
| [Visual Studio:](https://code.visualstudio.com/) Entorno de desarrollo para crear aplicaciones de manera eficiente. Permite escribir, depurar y probar código de manera fluida.                                                                                                                                                                                                                                                                     | ![Visual Studio](https://i.postimg.cc/yYZS7cG9/visual-studio.png)                                      |
| [MySQL Workbench:](https://www.mysql.com/products/workbench/) Herramienta de administración y diseño de bases de datos en un entorno gráfico intuitivo.                                                                                                                                                                                                                                                                                             | ![MySQL Workbench](https://i.postimg.cc/nrknbXL9/mysql-troco.png)                                      |
| [Insomnia:](https://insomnia.rest/) Software de prueba de API y cliente REST para realizar solicitudes HTTP y analizar las respuestas de manera eficiente.                                                                                                                                                                                                                                                                                          | ![Insomnia](https://i.postimg.cc/xTJ64WFn/insomnia-troco.png)                                          |
| [Mailjet:](https://www.mailjet.com/es/?utm_term=mailjet&utm_campaign=207768846&utm_content=&utm_source=google&utm_medium=cpc&creative=611617686235&keyword=mailjet&matchtype=b&network=g&device=c&gad=1&gclid=CjwKCAjwyqWkBhBMEiwAp2yUFlsed0-eq_uMUMBV4K4amqCOH_r19dAXS5se6QVXQxOPqqhFTO15-BoCLBkQAvD_BwE) Plataforma de envío de correos electrónicos que permite a los desarrolladores enviar mensajes de correo electrónico de manera escalable. | ![Mailjet](https://i.postimg.cc/pX1rfV62/mailjet.png)                                                  |
| [Node.js®:](https://nodejs.org/es/about)Es un entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome.                                                                                                                                                                                                                                                                                                                | ![Node.js](https://www.secret-source.eu/wp-content/uploads/2017/11/node-js-logo.jpg)                   |
| [Express.js:](https://expressjs.com/es/) Es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles..                                                                                                                                                                                                                                           | ![Express.js](https://expressjs.com/images/express-facebook-share.png)                                 |
| [React:](https://react.dev/) Es una de las librerías más populares de JavaScript para el desarrollo de aplicaciones móviles y web. Creada por Facebook, React contiene una colección de fragmentos de código JavaScript reutilizables utilizados para crear interfaces de usuario (UI) llamadas componentes.                                                                                                                                        | ![React.dev](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png) |

#

#

| 💻Funcionamiento del API de TROCO                                                                                                                                                                                                                                                                       |                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [API Set up:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/app.js) Iniciamos la base de datos y ponemos a funcionar el proyecto en nuestra máquina.                                                                                                                            | [![Registro](https://i.postimg.cc/ncYSCf8H/0-API-connection.png)](https://youtu.be/O5b4KJvAu8o)                           |
| [Registro:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/register-user.js) Utilizando un método y un payload determinado se crea un usuario el cual a través de un código de validación completa el proceso de registro.                                           | [![Registro](https://i.postimg.cc/yxkPFfN8/1-registration.png)](https://www.youtube.com/watch?v=XnPB8X8v6IQ)              |
| [Login:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/login-user.js) Hacemos una ruta POST a users/login + payload y nos genera un token que nos va a permitir realizar el resto de acciones con autorización.                                                     | [![Login](https://i.postimg.cc/85ndPhbQ/2-login.png)](https://www.youtube.com/watch?v=jPrTfIVhIuQ)                        |
| [Crear un Item:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/create-item.js) Una vez obtenido el token, en la ruta /items insertamos un payload con diferentes parámetros necesarios para la creación. Una vez enviado comprobamos en que se ha creado en la bbdd | [![Crear un Item](https://i.postimg.cc/cCpQf0jF/3-create-item.png)](https://www.youtube.com/watch?v=pcg5gDU9Oug)          |
| [Crear un Deal:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/accept-deal.js) Como proceso de intercambio iniciamos el Deal en la ruta POST /deals por parte de un usuario autorizado.                                                                             | [![Crear un Deal](https://i.postimg.cc/J4X3MHDv/4-create-deal.png)](https://youtu.be/QLoNN5yX_d4)                         |
| [Aceptación de Deal:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/accept-deal.js) Se introduce el id del "comprador" en la ruta de POST y se utiliza el token del "vendedor" para hacer el Deal. Posteriormente se envía información adicional.                   | [![Aceptación de Deal](https://i.postimg.cc/5tjRJcTn/5-deal-acceptance.png)](https://www.youtube.com/watch?v=W49QuWSMFfc) |
| [Deal Rating:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/rate-deal.js) Con los headers válidos de uno de los usuarios del Deal generamos el rating, en este caso añadiendo comentarios adicionales.                                                             | [![Deal Rating](https://i.postimg.cc/XJ12DsQt/6-deal-rating.png)](https://youtu.be/eB2mRwbeIcY)                           |
| [Deal Rechazado:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/reject-deal.js) Añadimos el id del Deal que se quiere rechazar, teniendo en los header el token del usuario. El Deal se podrá rechazar por ambas partes.                                            | [![Deal Rechazado](https://i.postimg.cc/9QCc2Bdr/7-deal-rejected.png)](https://youtu.be/zB26OrIx2bw)                      |
| [Buscador de Items:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/search-items.js) El campo del search va buscar por nombre, localización, categoría y añadiendo filtros a la misma.                                                                               | [![Alt text](https://i.postimg.cc/KjtySK4P/8-searcher.png)](https://youtu.be/sxik_c02RZk)                                 |
| [Wishlist:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/add-to-wishlist.js) Con el token de usuario y el id del Item guardamos el artículo en nuestra wishlist, teniendo en cuenta que un usuario no puede añadir sus propios artículos.                          | [![Alt text](https://i.postimg.cc/3RDsmyXs/9-wishlist.png)](https://youtu.be/A9MFBNk0Vh8)                                 |

#

#

#

#

| 💎 Funcionamiento del Front de TROCO                                                                                                                                            |                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [Estructura y Configuración:](https://www.youtube.com/watch?v=Hcr9LDccolY) Un poquito de como esta configurado el proyecto y cositas importantes para replicarlo en tu máquina. | [![Registro](https://i.postimg.cc/3WMdTQnn/2023-08-13-21-24-47.png)](https://www.youtube.com/watch?v=Hcr9LDccolY)             |
| [Usuario no Registrado:](https://youtu.be/MRoJQlM6574) Acciones que puede y no puede hacer un usuario visitante                                                                 | [![Usuario no Registrado](https://i.postimg.cc/g0DnRRjq/2023-08-13-20-41-06.png)](https://youtu.be/MRoJQlM6574)               |
| [Login:](https://youtu.be/SfTg9VGu4ug) Registro y login del nuevo usuario                                                                                                       | [![Login](https://i.postimg.cc/jSvGVdFd/2023-08-13-20-48-16.png)](https://youtu.be/SfTg9VGu4ug)                               |
| [Update Profile:](https://youtu.be/cv3X8hpyAVc) Modificamos los datos del usuario ya creado                                                                                     | [![Update Profile](https://i.postimg.cc/2S3x6k55/2023-08-13-20-51-35.png)](https://youtu.be/cv3X8hpyAVc)                      |
| [Upload Product & Store:](https://youtu.be/isizPre5GRY) Subimos el primer producto a la tienda y lo eliminamos, además de ver la tienda del usuario.                            | [![Upload Product & Store](https://i.postimg.cc/mgNTPsp0/2023-08-13-20-56-17.png)](https://youtu.be/isizPre5GRY)              |
| [Wishlist:](https://youtu.be/0buX5jI2_2A) Funcionamiento de las Wishlist como se añaden y quitan productos de ella en TROCO.                                                    | [![Wishlist](https://i.postimg.cc/bYTMSvq0/2023-08-13-20-59-34.png)](https://youtu.be/0buX5jI2_2A)                            |
| [Exchange Process & Deal Acceptance:](https://youtu.be/0CJ_B6MeCZk) Proceso de intercambio de princpio a fin mostranmdo el happy path de un deal que se acepta.                 | [![Exchange Process & Deal Acceptance](https://i.postimg.cc/02SW-vGVN/2023-08-13-21-02-25.png)](https://youtu.be/0CJ_B6MeCZk) |
|                                                                                                                                                                                 |
| [Reject & Rate a Deal:](https://youtu.be/umwwrm2jR84) Proceso de intercambio que se rechaza y valoramos un deal que ya se ha entregado.                                         | [![Alt text](https://i.postimg.cc/CMGnVzjg/2023-08-13-21-05-46.png)](https://youtu.be/umwwrm2jR84)                            |
|                                                                                                                                                                                 |

#

#

| 📬 Ejemplos de email:                                                                               |                                                                       |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| REGISTRO: Como damos la bienvenida a los nuevos Trolocolos y le enviamos el código de confirmación. | ![Registro](https://i.postimg.cc/9DC3TgzV/Email-Troco-Sign-up.png)    |
| OFERTA: Una Troco oferta salvaje ha aparecido en tu bandeja de entrada.                             | ![Oferta](https://i.postimg.cc/gxDCKy6h/Email-Troco-Offer-Send.png)   |
| OFERTA ACEPTADA: Otro usuario ha aceptado tu Troco oferta ¡Es el momento del trueque!               | ![aceptada](https://i.postimg.cc/8FXx214P/Email-Troco-Accepted.png)   |
| VALORACIÓN: Otro Troco trueque satisfactorio gracias a TROCO.                                        | ![Valoración](https://i.postimg.cc/5YHD1ZK5/Email-Troco-Feedback.png) |

#

#

| 📃 API Doc:

| METHOD | ACTION                                         | ENDPOINT                                   | BODY EXAMPLE / QUERY PARAMS                                                                                                                                                                                                                                                                                                               | AUTHORIZATION TOKEN |
| ------ | ---------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| POST   | Permite registrar un usuario                  | `localhost:8080/users/register`            | `{"username": "Greatest","email": "gsgm1985@gmail.com","password": "Mob100","first_name": "Arataka","last_name": "Reigen","city": "Albacete","profile_img": "https://i.scdn.co/image/ab67616d0000b2731e19900d1481726947030946","bio_summary": "Mob's mentor and boss. He is the self-proclaimed Greatest Psychic of the 21st Century ."}` | NO                  |
| POST   | Valida el email de un usuario creado           | `localhost:8080/users/validate-code`       | `{"email": "gsgm1985@gmail.com","code": "VtVxugyp"}`                                                                                                                                                                                                                                                                                      | NO                  |
|        | a través del codigo enviado a su email         |                                            |                                                                                                                                                                                                                                                                                                                                           |                     |
| POST   | Loguea a un usuario en el sistema              | `localhost:8080/users/login`               | `{"username": "Greatest","email": "gsgm1985@gmail.com","password": "Mob100"}`                                                                                                                                                                                                                                                             | NO                  |
| PATCH  | Permite modificar algunos datos del usuario    | `localhost:8080/users/`                    | `{"password": "Mob100","first_name": "Paco","last_name": "Porras","city": "Albacete","bio_summary": "Le gusta comer chorras","profile_img": "https://cdns-images.dzcdn.net/images/artist/5585f22ea3b7289268dd33e5c7d8640f/500x500.jpg"}`                                                                                                  | YES                 |
| GET    | Devuelve los productos guardados por el usuario  | `localhost:8080/users/wishlist`            | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| POST   | Permite añadir un elemento a la Wishlist       | `localhost:8080/users/wishlist/:id`        | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| DELETE | Elimina un elemento de la Wishlist             | `localhost:8080/users/wishlist/:id`        | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| GET    | Devuelve todos los deals del usuario           | `localhost:8080/users/deals`               | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| GET    | Devuelve todos los producto del usuario        | `localhost:8080/items`                     | -                                                                                                                                                                                                                                                                                                                                         | NO                  |
| GET    | Permite hacer búsquedas de todos los productos | `localhost:8080/items/search`              | `http://localhost:8080/items/search?search&category_name&item_condition&location&min_price&max_price`                                                                                                                                                                                                                                     | NO                  |
|        | disponibles en TROCO                           |                                            |                                                                                                                                                                                                                                                                                                                                           |                     |
| GET    | Devuelve los datos de un producto en concreto  | `localhost:8080/items/:id`                 | -                                                                                                                                                                                                                                                                                                                                         | NO                  |
| POST   | Devuelve todos los productos disponibles       | `localhost:8080/items/`                    | `{"name": "NES Zapper Light Gun 3","description": "Original NES Zapper light gun in good condition. Perfect for playing Duck Hunt and other light gun games on the Nintendo Entertainment System.","estimated_price": "40.00","item_condition": "good","status": "available","category_id": "7"}`                                         | YES                 |
| POST   | Permite añadir una imagen a un producto        | `localhost:8080/items/:d/images`           | Multipart image                                                                                                                                                                                                                                                                                                                           | YES                 |
| DELETE | Elimina una imagen de un producto              | `localhost:8080/items/:id/images/:imageId` | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| PATCH  | Permite modificar algunos datos del producto   | `localhost:8080/items/:id`                 | `{"name": "NES Zapper 1","description": "Original NES Zapper light gun in good condition. Perfect for playing Duck Hunt and other light gun games on the Nintend.","estimated_price": "50.00","item_condition": "good","status": "available","category_id": "7"}`                                                                         | YES                 |
| DELETE | Elimina un producto                            | `localhost:8080/items/:id`                 | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| POST   | Permite crear una nueva oferta                 | `localhost:8080/deals`                     | `{"buyer_id": "db4d380f-37a9-4412-9139-a7af047251b6","seller_id": "9fed47c8-87ba-4e75-87ed-aa3a4ff550b3","offered_items": ["8fb94c6b-49cf-4438-9b0f-77d8ad2e8f20","6fc88948-2e77-4408-bbe9-ef3779e32bbd"],"requested_items": ["83537cf2-0d29-49e8-8058-f7d7f0656f7d","cbcc6bef-558d-49ef-b5b1-bcc543266ecf"]}`                            | YES                 |
| POST   | Permite aceptar una oferta recibida            | `localhost:8080/deals/:id/accept`          | `{"street": "Paseo de los tristes","city": "Granada","state": "Andalucia","country": "Spain","postal_code": "18005","exchange_date_time": "2023-05-01 09:00:00","exchange_comment": "ire de amarillo y con una rosa en la mano"}`                                                                                                         | YES                 |
| POST   | Permite valor una oferta ya aceptada           | `localhost:8080/deals/:id/rate`            | `{"rating": 5,"rating_comment": "Todo fué bien, al final nos hemos casado"}`                                                                                                                                                                                                                                                              | YES                 |
| POST   | Permite rechazar una oferta                    | `localhost:8080/deals/:id/reject`          | `{"rejection_comment": "Me parece poca cosa, ofreceme más"}`                                                                                                                                                                                                                                                                              | YES                 |
|        | tanto al comprador como al vendedor            |                                            |                                                                                                                                                                                                                                                                                                                                           |                     |

#

#

## 🧍 Autores

- Jorge García
- Jorge Cidre
- Miguel Ortigueira
- Edu Loiola

