<h1 align="center">
    <a href="https://sylius.com/github-readme/link/" target="_blank">
        <img src="https://i.postimg.cc/CMttpyBc/Home-Troco.png" />
    </a>
</h1>

## [TROCO - EXCHANGE THINGS FROM GAMERS TO GAMERS ](https://github.com/jorge-alejandro/2hand-ecommerce-shop)

#

## ¿Qué es TROCO?

TROCO es un proyecto de desarrollo de un portal especializado en el intercambio de artículos para gamers estilo retro, como las videoconsolas, los juegos y los ordenadores, donde dos usuarios pueden acordar intercambiar uno o más artículos mediante el método tradicional del trueque.

#

#

## ✍️ Requisitos del Proyecto

❌ `Usuarios anónimos`

- Pueden realizar **búsquedas por nombre, categoría, localidad y precio**
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

- Accede a **troco.pro**
- Regístrate o haz Login.
- Sube uno o varios artículos que quieras hacer trueque.
- Completa las especificaciones de los artículos, tales como descripción, localización, estado del artículo, etc..
- Propón un trueque sobre algún artículo que desees intercambiar
- Recibe una aceptación o rechazo a tu petición de trueque

#

#

## 👨‍💻 ¿Cómo se ha desarrollado TROCO?

El desarrollo de TROCO se divide en 2 bloques: Tecnología utilizada y Know-how en la implementación:

| 📟 Tecnologías:                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [Draw.io:](https://app.diagrams.net/) Software de diagramación que permite crear diagramas y flujos de trabajo de forma intuitiva y colaborativa.                                                                                                                                                                                                                                                                                                  | ![Draw.io](https://i.postimg.cc/ZRPTkjhv/TrocoBD.png)               |
| [Excalidraw:](https://excalidraw.com/) Herramienta de dibujo que permite crear bocetos y diagramas de forma rápida y sencilla.                                                                                                                                                                                                                                                                                                                     | ![Excalidraw](https://i.postimg.cc/zGmYtw72/excalidraw-troco-2.png) |
| [Figma:](https://www.figma.com/) Herramienta que permite crear prototipos interactivos que simulan la experiencia real del usuario.                                                                                                                                                                                                                                                                                                                | ![Figma](https://i.postimg.cc/PfV9Cb8V/figma-troco.png)             |
| [Visual Studio:](https://code.visualstudio.com/) Entorno de desarrollo para crear aplicaciones de manera eficiente. Permite escribir, depurar y probar código de manera fluida.                                                                                                                                                                                                                                                                    | ![Visual Studio](https://i.postimg.cc/yYZS7cG9/visual-studio.png)   |
| [MySQL Workbench:](https://www.mysql.com/products/workbench/) Herramienta de administración y diseño de bases de datos en un entorno gráfico intuitivo.                                                                                                                                                                                                                                                                                            | ![MySQL Workbench](https://i.postimg.cc/nrknbXL9/mysql-troco.png)   |
| [Insomnia:](https://insomnia.rest/) Software de prueba de API y cliente REST para realizar solicitudes HTTP y analizar las respuestas de manera eficiente.                                                                                                                                                                                                                                                                                         | ![Insomnia](https://i.postimg.cc/xTJ64WFn/insomnia-troco.png)       |
| [Mailjet](https://www.mailjet.com/es/?utm_term=mailjet&utm_campaign=207768846&utm_content=&utm_source=google&utm_medium=cpc&creative=611617686235&keyword=mailjet&matchtype=b&network=g&device=c&gad=1&gclid=CjwKCAjwyqWkBhBMEiwAp2yUFlsed0-eq_uMUMBV4K4amqCOH_r19dAXS5se6QVXQxOPqqhFTO15-BoCLBkQAvD_BwE) Plataforma de envío de correos electrónicos que permite a los desarrolladores enviar mensajes de correo electrónico de manera escalable. | ![Mailjet](https://i.postimg.cc/pX1rfV62/mailjet.png)               |

#

#

| 🪄 Implementación:                                                                                                                                                                                                                                                                                      |                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| [API Set up:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/app.js) Inciamos la base de datos y ponemos a funcionar el proyecto en nuestra máquina                                                                                                                              | [![Registro](https://i.postimg.cc/ncYSCf8H/0-API-connection.png)](https://youtu.be/O5b4KJvAu8o)                           |
| [Registro:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/register-user.js) Utlizando un método y un payload determinado se crea un usuario el cual a través de un código de validación completa el proceso de registro.                                            | [![Registro](https://i.postimg.cc/yxkPFfN8/1-registration.png)](https://www.youtube.com/watch?v=XnPB8X8v6IQ)              |
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

| METHOD | ENDPOINT                                   | BODY EXAMPLE / QUERY PARAMS                                                                                                                                                                                                                                                                                                               | AUTHORIZATION TOKEN |
| ------ | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| POST   | `localhost:8080/users/register`            | `{"username": "Greatest","email": "gsgm1985@gmail.com","password": "Mob100","first_name": "Arataka","last_name": "Reigen","city": "Albacete","profile_img": "https://i.scdn.co/image/ab67616d0000b2731e19900d1481726947030946","bio_summary": "Mob's mentor and boss. He is the self-proclaimed Greatest Psychic of the 21st Century ."}` | NO                  |
| POST   | `localhost:8080/users/validate-code`       | `{"email": "gsgm1985@gmail.com","code": "VtVxugyp"}`                                                                                                                                                                                                                                                                                      | NO                  |
| POST   | `localhost:8080/users/login`               | `{"username": "Greatest","email": "gsgm1985@gmail.com","password": "Mob100"}`                                                                                                                                                                                                                                                             | NO                  |
| PATCH  | `localhost:8080/users/:id`                 | `{"password": "Mob100","first_name": "Paco","last_name": "Porras","city": "Albacete","bio_summary": "Le gusta comer chorras","profile_img": "https://cdns-images.dzcdn.net/images/artist/5585f22ea3b7289268dd33e5c7d8640f/500x500.jpg"}`                                                                                                  | YES                 |
| GET    | `localhost:8080/users/wishlist`            | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| POST   | `localhost:8080/users/wishlist/:id`        | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| DELETE | `localhost:8080/users/wishlist/:id`        | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| GET    | `localhost:8080/users/deals`               | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| GET    | `localhost:8080/items`                     | -                                                                                                                                                                                                                                                                                                                                         | NO                  |
| GET    | `localhost:8080/items/search`              | `http://localhost:8080/items/search?search&category_name&item_condition&location&min_price&max_price`                                                                                                                                                                                                                                     | NO                  |
| GET    | `localhost:8080/items/:id`                 | -                                                                                                                                                                                                                                                                                                                                         | NO                  |
| POST   | `localhost:8080/items/`                    | `{"name": "NES Zapper Light Gun 3","description": "Original NES Zapper light gun in good condition. Perfect for playing Duck Hunt and other light gun games on the Nintendo Entertainment System.","estimated_price": "40.00","item_condition": "good","status": "available","category_id": "7"}`                                         | YES                 |
| POST   | `localhost:8080/items/:d/images`           | Multipart image                                                                                                                                                                                                                                                                                                                           | YES                 |
| DELETE | `localhost:8080/items/:id/images/:imageId` | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| DELETE | `localhost:8080/items/:id`                 | -                                                                                                                                                                                                                                                                                                                                         | YES                 |
| POST   | `localhost:8080/deals`                     | `{"buyer_id": "db4d380f-37a9-4412-9139-a7af047251b6","seller_id": "9fed47c8-87ba-4e75-87ed-aa3a4ff550b3","offered_items": ["8fb94c6b-49cf-4438-9b0f-77d8ad2e8f20","6fc88948-2e77-4408-bbe9-ef3779e32bbd"],"requested_items": ["83537cf2-0d29-49e8-8058-f7d7f0656f7d","cbcc6bef-558d-49ef-b5b1-bcc543266ecf"]}`                            | YES                 |
| POST   | `localhost:8080/deals/:id/accept`          | `{"street": "Paseo de los tristes","city": "Granada","state": "Andalucia","country": "Spain","postal_code": "18005","exchange_date_time": "2023-05-01 09:00:00","exchange_comment": "ire de amarillo y con una rosa en la mano"}`                                                                                                         | YES                 |
| POST   | `localhost:8080/deals/:id/rate`            | `{"rating": 5,"rating_comment": "Todo fué bien, al final nos hemos casado"}`                                                                                                                                                                                                                                                              | YES                 |
| POST   | `localhost:8080/deals/:id/reject`          | `{"rejection_comment": "Me parece poca cosa, ofreceme más"}`                                                                                                                                                                                                                                                                              | YES                 |

## 🧍 Autores

- Jorge García
- Jorge Cidre
- Edu Loiola
- Miguel Ortigueira

```

```
