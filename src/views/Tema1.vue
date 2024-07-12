<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Construcción del #[em back-end] de la aplicación web
    
    .row.align-items-center.mb-5
      .col-lg-9
        .fondo-personalizado-2.py-5.px-4.borde-20
          .row.align-items-center
            .col-md-auto
              .d-flex.mb-4.mb-md-0.justify-content-center
                .burbuja-1.fondo-color-acento-contenido.p-2
                  figure
                    img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 81px;")
            .col 
              p.mb-0.text-white Se inicia con una estructura de proyecto #[em MEAN] (Mongo, Express, Angular y Node.js) para el proyecto que abarca tanto el #[em front-end] como el #[em back-end]. Para la instalación de las primeras herramientas como Node.js y Express.

      .col-lg-3.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 295px;")
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Instalación y configuración de herramientas de Node.js
    
    .row 
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Se utiliza Visual Studio Code (VS Code) con la siguiente estructura de directorios para el #[em back-end], detallada a continuación:

    .fondo-personalizado-1.f2.top-1
      .fondo-personalizado-1__contenido.pb-4
        p(style="color: red;") seccion de codigo con listado de estructura

        .row.mb-5
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Como se presentó anteriormente, se crea la carpeta #[b GESTION-EMPLEADOS], que será la principal o raíz del proyecto. Dentro de esta, se crea la carpeta #[em back-end], en la cual se crean otros directorios y archivos. De tal forma, esta será la estructura que apoyará el desarrollo de la base de la aplicación. Una vez creadas las carpetas y archivos, como #[em controllers, models, routes, database.js e index.js], se abre la terminal del VS Code y se digita el siguiente comando para crear un proyecto #[b Node.js: npm init -yes]
          .col-lg-4
            figure
              img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 400px;")
        
        .row.justify-content-center.mb-5
          .col-lg-6
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                  span.c-color-acento-contenido.fw-bold PROBLEMS | OUTPUT | TERMINAL | DEBUG CONSOLE
                  br
                  br
                  span.fs-i Windows PowerShell
                  br
                  span.fs-i Copyright (C) Microsoft Corporation. Todos los derechos reservados.
                  br
                  span.fs-i Prueba la nueva tecnología PowerShell multiplataforma https://aka.ms/pscore6
                  br
                  span.fs-i PS D:\gestion-empleados> npm init --yes
        
        p.mb-0 Una vez creado el proyecto, se requieren todas las bondades del #[em framework] de Node.js, para lo cual es necesario Express. Express generará una serie de componentes que ayudarán mucho al desarrollo de esta aplicación. Por lo tanto, se instala Express con la siguiente línea de comandos desde la terminal del VS Code: #[b npm install express].

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Desarrollo del index.js
    
    .row.mb-4 
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 El siguiente paso es iniciar con el desarrollo del archivo principal del back-end, que se llama index.js como se presenta a continuación:
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code.text-wrap
              span.fs-i const express = require('express')
              br
              span.fs-i const morgan = require('morgan');
              br
              span.fs-i const cors = require('cors');
              br
              span.fs-i const app = express(); // la constante app tendrá ahora todo el funcionamiento del servidor
              br
              span.fs-i const { mongoose } = require('./database'); // no se quiere todo el archivo sino la conexión
              span.fs-i /** * Se crea una REST API, es la manera de decirle al servidor que reciba y envíe datos */
              br
              br
              span.fs-i // Configuraciones
              br
              span.fs-i app.set('port', process.env.PORT || 3000);
              br
              span.fs-i app.use(morgan('dev'));
              br
              span.fs-i app.use(express.json()); // método que ayuda a convertir el código para que el servidor pueda entender lo que viene del cliente.
              br
              span.fs-i app.use(cors({origin: 'http://localhost:4200'})); // método para comunicar con el cliente
              br
              br
              span.fs-i // rutas de nuestro servidor
              br
              span.fs-i app.use('/api/empleados',require('./routes/empleado.routes'));
              br
              br
              span.fs-i // Iniciando el servidor
              br
              span.fs-i app.listen(app.get('port'), () => { // esta es una mejor manera de configurar el puerto
              br
              span.fs-i &nbsp;&nbsp;&nbsp; console.log('server activo en el puerto', app.get('port'));
              br
              span.fs-i });
    
    .row.mb-4
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 A continuación, se presentan los siguientes pasos para el desarrollo del index.js:
    
    .row.align-items-center.mb-4
      .col-lg-7
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
          div.ms-md-5(titulo="1. Desarrollo del archivo principal del Back-end")
            p.ps-md-2.mb-4.pt-md-0.pt-2 El siguiente paso es iniciar con el desarrollo del archivo principal del Back-end, que se llama index.js.
          div.ms-md-5(titulo="2. Código del archivo index.js")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Se explica el código del archivo index.js para el proyecto. A medida que avance este componente, se explicará cada línea de código que se requiera ejecutar.
          div.ms-md-5(titulo="3. Requerimiento de Express")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Se inicia con el requerimiento de Express y se almacena en una constante en JavaScript llamada express. De esta forma, se tendrá acceso a todo el funcionamiento del servidor con la línea de código: #[b const app = express();.]
          div.ms-md-5(titulo="4. Configuración del puerto")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Una vez creada la constante app, se pasa a la configuración del puerto por donde va a escuchar y recibir el servidor todo tipo de solicitudes por parte del cliente, según se muestra en la siguiente línea: #[b `app.set('port', process.env.PORT)]
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/10.png",style="max-width: 505px;")

    .row.align-items-center.mb-5
      .col-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 505px;")
      .col-lg-7
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="acordion-personalizado-1__tarjeta")
          div.ms-md-5(titulo="5. Uso de set ")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Set es para crear una variable que va a ser accedida desde cualquier parte de la aplicación. La estructura es la siguiente: (nombre var, valor). #[b process] es porque cuando se despliegue la app no se va a tener la opción de definir el puerto, sino que el mismo servicio de la nube ayudará a definirlo, en caso de que el puerto 3000 esté ocupado.
          div.ms-md-5(titulo="6. Instalación de Nodemon")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Con el fin de revisar los cambios en el servidor de manera automática, se tiene planeada la instalación de algunas herramientas que harán más fácil el desarrollo sobre Node.js, por lo que se instala Nodemon como una utilidad que monitorea de manera constante los cambios en el código fuente que se está desarrollando y de manera automática reinicia el servidor. La línea de código utilizada en la terminal de VS Code es: #[b npm install nodemon -D.]
          div.ms-md-5(titulo="7. Configuración de Nodemon")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Esto significa que Nodemon será instalado como una dependencia de desarrollo y no como dependencia general del proyecto. Se configura el archivo #[b package.json] de acuerdo a las instrucciones.
          div.ms-md-5(titulo="8. Iniciar el servidor")
            p.ps-md-2.mb-4.pt-md-0.pt-2 Se inicia a ejecutar el servidor con la siguiente línea de comando: #[b npm run dev].
    
    .row.mb-5
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Estructura package.json: 
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code.text-wrap
              span.fs-i {
              br
              span.fs-i   &nbsp;&nbsp; "name": "gestion-empleados",
              br
              span.fs-i   &nbsp;&nbsp; "version": "1.0.0",
              br
              span.fs-i   &nbsp;&nbsp; "description": "",
              br
              span.fs-i   &nbsp;&nbsp; "main": "index.js",
              br
              span.fs-i   &nbsp;&nbsp; "scripts": {
              br
              span.fs-i   &nbsp;&nbsp;&nbsp;&nbsp;   "dev": "nodemon BackEnd/index.js"
              br
              span.fs-i   &nbsp;&nbsp; },
              br
              span.fs-i   &nbsp;&nbsp; "keywords": [],
              br
              span.fs-i   &nbsp;&nbsp; "author": "",
              br
              span.fs-i   &nbsp;&nbsp; "license": "ISC",
              br
              span.fs-i   &nbsp;&nbsp; "dependencies": {
              br
              span.fs-i     &nbsp;&nbsp;&nbsp;&nbsp; "cors": "^2.8.5",
              br
              span.fs-i     &nbsp;&nbsp;&nbsp;&nbsp; "express": "^4.17.1",
              br
              span.fs-i     &nbsp;&nbsp;&nbsp;&nbsp; "mongoose": "^5.12.14",
              br
              span.fs-i     &nbsp;&nbsp;&nbsp;&nbsp; "morgan": "^1.10.0"
              br
              span.fs-i   &nbsp;&nbsp; },
              br
              span.fs-i   &nbsp;&nbsp; "devDependencies": {
              br
              span.fs-i   &nbsp;&nbsp;&nbsp;&nbsp;   "nodemon": "^2.0.7"
              br
              span.fs-i   &nbsp;&nbsp; }
              br
              span.fs-i }
    
    .row.align-items-center.mb-5
      .col-lg-7
        p.mb-4 Ahora, se construyen las #[em Middleware] dentro del archivo index.js, encargadas de procesar los datos, es decir, cuando se solicitan o envían al servidor. El servidor debe entender los datos que le llegan del cliente (AngularJS toma los datos del cliente y los envía en formato JSON) y es por eso que se necesita algún tipo de conversión. Por lo tanto, se requiere del uso del formato JSON ejecutando la siguiente instrucción: app.use(express.json());
        p.mb-0 Para registrar la transacción de mensajes por consola, se puede utilizar una herramienta útil llamada #[em morgan], que ayuda a verificar en consola lo que el usuario está solicitando. Esta herramienta es opcional para el desarrollo de la aplicación, no obstante, se deja la línea de comando para su instalación y utilización: #[b npm install morgan. app.use(morgan(‘dev’));]
      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 505px;")
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Configuración e instalación de la base de datos MongoDB
    
    p.mb-5 A continuación, se realizará la conexión de la aplicación del servidor a la base de datos, por lo que se inicia configurando e instalando los recursos necesarios antes de desarrollar. En ese sentido, se instala #[b MongoDB] de manera persistente en el equipo de desarrollo. La siguiente figura representa de manera general el diagrama entidad-relación de una base de datos.

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 1.] Diagrama entidad-relación
    
    .fondo-personalizado-burbuja.fondo-color-sistema-j.mb-5
      .fig-burbuja.left(style="top: 50px;")
      .fig-burbuja(style="top: -95px;right: 50px;")
      .fig-burbuja(style="bottom: -115px;right: 50px;")
      .fondo-personalizado-burbuja__contenido.p-4.py-lg-5
        figure.my-lg-4
          img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 820px;",alt="Diagrama de entidad-relación que muestra varias tablas de bases de datos conectadas entre sí mediante relaciones. Cada tabla contiene atributos y una clave primaria, indicada por un ícono de llave. Las flechas indican las relaciones entre las tablas, reflejando cómo los datos están interconectados a través de claves foráneas y otras asociaciones.")
    
    .fondo-personalizado-1.f3.mb-4
      .fondo-personalizado-1__contenido.pt-3.pb-4
        .row.align-items-center.mb-5
          .col-lg-7
            p.mb-0 De manera opcional, se puede instalar la extensión de MongoDB dentro del entorno de VS Code, permitiendo una mayor integralidad en el desarrollo. Estas herramientas facilitan la celeridad en el proceso de construcción de sistemas de #[em software]. Por lo tanto, en el material de apoyo se dejará información para acceder a la guía de instalación de esta extensión, denominada #[em extensión VS Code y MongoDB]. 
          .col-lg-5
            .bloque-codigo-personalizado(data-aos="flip-up")
              .cabecera-bloque-codigo.p-4.py-3
                .bloque-codigo-circulos 
                  .bloque-codigo-circulo.c1
                  .bloque-codigo-circulo.c2
                  .bloque-codigo-circulo.c3
              .cuerpo-bloque-codigo.p-4
                code.text-wrap
                  span.fs-i localhost:27017 connected
                  br
                  span.fs-i &bull; admin
                  br
                  span.fs-i &bull; config
                  br
                  span.fs-i &bull; empleados
                  br
                  span.fs-i &bull; local
        p.mb-0 Posteriormente, para realizar la conexión a la base de datos y definir la estructura de los datos de la aplicación a desarrollar, conocida técnicamente como esquemas, se instala la herramienta #[em Mongoose] con la siguiente línea de comando desde la terminal de VS Code: #[b npm install mongoose]
    
    Separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Configuración de database.js
    
    .row.mb-4
      .col-lg-7
        p.mb-4 Con todas las herramientas necesarias para la conexión de la aplicación a la base de datos, se empieza a desarrollar y configurar el archivo database.js
        p.mb-0 Con respecto al código del archivo database.js, se indica que es necesario que el módulo se conecte a MongoDB, por eso se utiliza #[em Mongoose]. Al llamarse el módulo, se almacena en una constante. Además, se define la dirección de la conexión de la base de datos en una constante denominada #[em URI], y se utiliza una promesa para obtener la información de la base de datos y corroborar si hay conexión o no.
      .col-lg-5
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4.ps-md-5
            code.text-wrap
            span.fs-i const mongoose = require('mongoose');
            br
            span.fs-i const URI = 'mongodb://localhost/empleados';
            br
            span.fs-i mongoose.connect(URI)
            br
            span.fs-i &nbsp;&nbsp; .then(db => console.log('DB is connected'))
            br
            span.fs-i &nbsp;&nbsp; .catch(err => console.error(err));
            br
            span.fs-i module.exports = mongoose;
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .borde-16.overflow-hidden
          .row
            .col-lg-3.pe-lg-0
              .fondo-color-sistema-k.p-2.h-100.d-flex.align-items-center
                figure
                  img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 127px;")
            .col-lg-9.ps-lg-0
              .fondo-color-primario.p-4
                p.text-white.mb-0(style="font-size: 13px;") Por ser un módulo que se utiliza en toda la aplicación, se exporta. De esta forma, la constante #[em Mongoose] devolverá la conexión. De manera adicional, en el archivo index.js se invoca o llama el archivo database.js, especificando que lo que se requiere es la conexión. Solo resta probar si la conexión está activa, por lo que se inicia el servidor con la línea de comando #[b npm run dev], como se indicó anteriormente.
    
    .row.mb-5
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 A continuación, se presenta el resultado de la terminal del VS Code:
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code.text-wrap
              span.fs-i [nodemon] restarting due to changes...
              br
              span.fs-i [nodemon] starting `node backend/index.js`
              br
              span.fs-i (node:78784) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
              br
              span.fs-i (Use `node --trace-deprecation ...` to show where the warning was created)
              br
              span.fs-i (node:78784) [MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
              br
              span.fs-i server activo en el puerto 3000
              br
              span.fs-i DB is connected
    
    Separador

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Configuración de las rutas del proyecto con Node.js

    p.mb-5 El siguiente paso es configurar las rutas o URL por donde se van a enviar o recibir los datos, por lo que se crea un archivo llamado #[em empleado.route.js] dentro de la carpeta #[em routes]. En este primer apartado, se desea revisar el funcionamiento de las rutas, por lo que, a manera de prueba, se presenta el siguiente código:

    .row.justify-content-center.mb-5
      .col-lg-6
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code.text-wrap
              span.fs-i /**
              br
              span.fs-i * Vamos a crear rutas del servidor
              br
              span.fs-i * creamos un módulo por eso utilizamos express
              br
              span.fs-i * vamos a utilizar como nuestra rest api para
              br
              span.fs-i * enviar y recibir datos en formato json
              br
              span.fs-i */
              br
              br
              span.fs-i const express = require('express');
              br
              span.fs-i const router = express.Router();
              br
              span.fs-i /* generamos un ejemplo cuando le soliciten algo al span.fs-i servidor por el método GET */
              br
              span.fs-i router.get('/', (req, res) => {
              br
              span.fs-i &nbsp;&nbsp;    res.json({
              br
              span.fs-i &nbsp;&nbsp;&nbsp;&nbsp;        status: 'API REST funcionando'
              br
              span.fs-i &nbsp;&nbsp;    });
              br
              span.fs-i })
              br
              br
              span.fs-i module.exports = router;
    
    .row.align-items-center.mb-5.pt-4.pb-4
      .col-lg-7.mb-4.mb-lg-0
        .fondo-color-sistema-l.p-4.p-lg-5.borde-17
          p.mb-4 De manera adicional, se puede observar el archivo index.js, en el cual se establece la ruta por donde se van a recibir o enviar los datos desde el servidor. Para este caso de estudio, será #[a.link-personalizado-1(target='_blank',href='http://localhost:3000/api/empleados') http://localhost:3000/api/empleados].
          p.mb-0 Para la definición de esta ruta, es necesario requerir el archivo #[em empleado.routes.js] ejecutando la siguiente instrucción:
      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 505px;")
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code.text-wrap
              span.fs-i app.use('/api/empleados', require('./routes/empleado.routes'));
    

    .row.mb-5
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Al hacer el llamado en el servidor, se vería de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 2.] Respuesta del servidor
        figure.pt-3
          img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 610px;",alt="Interfaz de la API REST en un navegador web mostrando un mensaje de status para empleados.")

    .row.mb-5 
      .col-lg-7
        p.mb-4 Ya visto un ejemplo del funcionamiento de las rutas, es necesario comprender su comportamiento. Cada solicitud debe ir asociada a una ruta, y esta a su vez a un intercambio de información o de datos, es decir, de interacción con la base de datos. En ese sentido, es más que necesario la construcción del modelo #[em empleado.js] con datos específicos para los empleados dentro de la carpeta #[em models].
        p.mb-0 Para construir el modelo #[em empleado.js], primero se debe crear un esquema que defina la estructura de los datos que se almacenarán en la base de datos. Aquí un ejemplo de cómo podría verse el archivo #[em empleado.js]:
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 502px;")
    
    .row.justify-content-center.mb-5.pt-4
      .col-lg-6
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code.text-wrap
              span.fs-i const mongoose = require('mongoose');
              br
              span.fs-i const {Schema} = mongoose;
              br
              br
              span.fs-i const EmpleadoSchema = new Schema({
              br
              span.fs-i &nbsp;&nbsp;     name: {type: String, require: true},
              br
              span.fs-i &nbsp;&nbsp;     position: {type: String, require: true},
              br
              span.fs-i &nbsp;&nbsp;     office: {type: String, require: true},
              br
              span.fs-i &nbsp;&nbsp;     salary: {type: Number, require: true},
              br
              span.fs-i });
              br
              br
              span.fs-i module.exports = mongoose.model('Empleado', EmpleadoSchema);
    
    p.mb-5.pt-3 Se requiere #[em Mongoose] y se almacena en una constante denominada de la misma forma, que se utilizará para definir los esquemas de datos. Para esto, se empieza a modelar con la información, como nombre y cargo, entre otros. En ese sentido, #[em Mongoose] le indica a #[em MongoDB] cómo va a lucir la estructura de empleados.

    Separador

    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Desarrollo de controladores para la API REST
    
    .row.align-items-center.mb-5 
      .col-lg-7
        p.mb-4 Para mantener una estructura organizada y facilitar el crecimiento de la aplicación, se recomienda el uso de controladores. Los controladores son responsables de definir los métodos y acciones necesarios para las rutas de la aplicación. En este caso, se creará el archivo empleado.controller.js dentro de la carpeta #[em controllers].
        .fondo-color-sistema-m.p-4.px-lg-5.borde-15
          p.mb-0 A continuación, se presenta un ejemplo de cómo podría estructurarse el controlador para manejar las operaciones básicas de la API REST:
      .col-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 502px;")
    
    .row.justify-content-center.mb-5.pt-3
      .col-lg-6
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code.text-wrap
              span.fs-i /**
              br
              span.fs-i * Se coloca el controlador como un objeto y luego se exporta como
              br
              span.fs-i * se requiere primero el modelo empleado
              br
              span.fs-i */
              br
              br
              span.fs-i const Empleado = require('../models/empleado');
              br
              span.fs-i const empleadoCtrl = {};
              br
              br
              span.fs-i /**
              br
              span.fs-i * DEFINO LOS MÉTODOS
              br
              span.fs-i */
              br
              br
              span.fs-i // Obtener todos los empleados
              br
              span.fs-i empleadoCtrl.getEmpleados = async (req, res) => {
              br
              span.fs-i  &nbsp;&nbsp;   const empleados = await Empleado.find();
              br
              span.fs-i  &nbsp;&nbsp;   res.json(empleados);
              br
              span.fs-i }
              br
              br
              span.fs-i // Crear empleados
              br
              span.fs-i empleadoCtrl.createEmpleados = async (req, res) => {
              br
              span.fs-i  &nbsp;&nbsp;   const empleado = new Empleado(req.body);
              br
              span.fs-i  &nbsp;&nbsp;   await empleado.save();
              br
              span.fs-i  &nbsp;&nbsp;   res.json({
              br
              span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;       'status': 'Empleado guardado'
              br
              span.fs-i  &nbsp;&nbsp;   });
              br
              span.fs-i }
              br
              br
              span.fs-i // Conseguir un único empleado
              br
              span.fs-i empleadoCtrl.getUnicoEmpleado = async (req, res) => {
              br
              span.fs-i  &nbsp;&nbsp;   const empleadoUnico = await Empleado.findById(req.params.id);
              br
              span.fs-i  &nbsp;&nbsp;   res.json(empleadoUnico);
              br
              span.fs-i }
              br
              br
              span.fs-i // Actualizar empleado
              br
              span.fs-i empleadoCtrl.editarEmpleado = async (req, res) => {
              br
              span.fs-i  &nbsp;&nbsp;   const { id } = req.params;
              br
              span.fs-i  &nbsp;&nbsp;   const empleadoEdit = {
              br
              span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;       name: req.body.name,
              br
              span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;       position: req.body.position,
              br
              span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;       office: req.body.office,
              br
              span.fs-i  &nbsp;&nbsp;&nbsp;&nbsp;       salary: req.body.salary
              br
              span.fs-i  &nbsp;&nbsp;   };
              br
              span.fs-i  &nbsp;&nbsp;   await Empleado.findByIdAndUpdate(id, {$set: empleadoEdit}, {new: true});
              br
              span.fs-i  &nbsp;&nbsp;   res.json({status: 'Empleado Actualizado'});
              br
              span.fs-i }
              br
              br
              span.fs-i // Eliminar empleado
              br
              span.fs-i empleadoCtrl.eliminarEmpleado = async (req, res) => {
              br
              span.fs-i  &nbsp;&nbsp;   await Empleado.findByIdAndDelete(req.params.id);
              br
              span.fs-i  &nbsp;&nbsp;   res.json({status: 'Empleado Eliminado'});
              br
              span.fs-i }
              br
              br
              span.fs-i // exporto el módulo
              br
              span.fs-i module.exports = empleadoCtrl;
    
    .row.mb-5.py-4
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 El desarrollo de controladores para la API REST se realiza:
    
    p(style="color: red;") falta un slider aca.

    .row.mb-5.py-4
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 A continuación, se definen las rutas, por lo que se configura y desarrolla la lógica de esta sección en el archivo empleados.routes.js dentro de la carpeta #[em routes]:

    .row.justify-content-center.mb-5
      .col-lg-6
        .bloque-codigo-personalizado(data-aos="flip-up")
          .cabecera-bloque-codigo.p-4.py-3
            .bloque-codigo-circulos 
              .bloque-codigo-circulo.c1
              .bloque-codigo-circulo.c2
              .bloque-codigo-circulo.c3
          .cuerpo-bloque-codigo.p-4
            code.text-wrap
              span.fs-i plaintext
              br
              span.fs-i /**
              br
              span.fs-i *
              br
              span.fs-i * creamos un módulo por eso utilizamos express
              br
              span.fs-i */
              br
              br
              span.fs-i const express = require('express');
              br
              span.fs-i const router = express.Router();
              br
              span.fs-i const empleadoCtrl = require('../controllers/empleado.controller');
              br
              br
              span.fs-i router.get('/', empleadoCtrl.getEmpleados); // Rutas más limpias (obtener empleados)
              br
              span.fs-i router.post('/', empleadoCtrl.createEmpleados); // guardar
              br
              span.fs-i router.get('/:id', empleadoCtrl.getUnicoEmpleado); // obtiene un único empleado
              br
              span.fs-i router.put('/:id', empleadoCtrl.editarEmpleado); // Actualizar datos (uno a la vez)
              br
              span.fs-i router.delete('/:id', empleadoCtrl.eliminarEmpleado);
              br
              br
              span.fs-i module.exports = router;
    
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 Con respecto al código anterior, se observa que se requiere el uso del controlador, por lo que se almacena en una constante llamada empleadoCtrl, y de esta forma se pueden utilizar todos los métodos de este, es decir, la gestión o #[b CRUD] sobre el empleado.
        .fondo-color-sistema-m.p-4
          p.mb-0 En ese sentido, se observa que el objeto #[em router] llama a cada uno de los métodos por defecto de petición HTTP como #[b GET, POST, PUT], entre otros, asociados a los métodos realizados con el controlador. De manera que se tienen rutas mucho más limpias y apoyadas con la buena práctica del uso del controlador.
      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 502px;")
    
    Separador

    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7 Realización de pruebas de la API REST con Postman
    
    .row.mb-5 
      .col-lg-8
        p.mb-4 Una vez finalizada la construcción del modelo, controlador y rutas, se procede a realizar las pruebas respectivas para evaluar el funcionamiento de la API REST. Para ello, se utilizará la herramienta #[em Postman].
        p.mb-0 Se comienza insertando datos utilizando el método POST, el cual llamará a la ruta para crear empleados.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 400px;")

    .row.justify-content-center.mb-5.pb-3
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 3.] Pruebas con Postman
        figure
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 820px;",alt="Interfaz de Postman configurada para hacer una petición POST a la API REST, incluyendo el payload con los datos del empleado y la respuesta en formato JSON indicando que el empleado ha sido guardado.")
    
    p.mb-5 En la figura anterior se pueden apreciar los datos que se envían al servidor, dado que #[em Postman] permite realizar esa emulación del cliente. Los datos que se envían están acordes al esquema definido en el modelo de #[em empleado.js], como lo son #[em name, position, office y salary]. La respuesta en consola, que se programa como #[em status], es que el Empleado ha sido guardado.

    .row.justify-content-center.mb-5
      .col-lg-8
        .fondo-personalizado-3.p-4.borde-11
          .row.align-items-center
            .col-md-auto
              .d-flex.mb-4.mb-md-0.justify-content-center
                .burbuja-1.fondo-color-acento-contenido.p-2
                  figure
                    img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 74px;")
            .col 
              p.mb-0.text-white En este orden de ideas, es necesario revisar la base de datos y verificar que efectivamente se ha guardado la información y si realmente #[em MongoDB] la ha creado.

    .row.mb-5
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 En la siguiente figura se presenta la imagen que representa la interfaz gráfica de #[em MongoDB] y el resultado de verificación de la creación de la base de datos.
    
    .row.justify-content-center.mb-5
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4.] Panel MongoDB
        figure
          img.mx-auto(src="@/assets/curso/temas/24.svg",style="max-width: 400px;",alt="Interfaz de MongoDB Compass mostrando la base de datos local con la colección de empleados seleccionada.")
    
    .row.mb-5
      .col-auto.d-none.d-md-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 85px;")
      .col 
        p.mb-0 La siguiente figura muestra el resultado de la verificación de un registro de empleado almacenado en MongoDB.
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 5.] Registro de empleado almacenado en MongoDB
        figure
          img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 610px;",alt="Interfaz de MongoDB mostrando el documento del empleado guardado con sus respectivos campos y valores.")
    
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-3 Como es evidente, la API REST funciona correctamente. Se ha creado la base de datos empleado y se tiene almacenado el primer registro del empleado Santiago. De igual forma, se confirma que los demás métodos HTTP, como GET, PUT o DELETE, también funcionan. Por lo tanto, se realiza la invitación a probar la API con #[em Postman].
        .fondo-color-sistema-m.p-4
          p.mb-0 Hasta este punto se ha realizado el desarrollo del #[em back-end], por lo que se tiene la base de datos lista para proceder con la construcción del #[em front-end], que será el que interactuará con el servidor. A continuación, se presenta una figura que ilustra la estructura general del proyecto.
      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 502px;")
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 6.] Resumen estructura del proyecto web
        figure
          img.mx-auto(src="@/assets/curso/temas/27.svg",style="max-width: 820px;",alt="Diagrama del stack MEAN (MongoDB, Express, Angular, Node.js) con iconos que representan las tecnologías y la comunicación entre el front-end y el back-end.")


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
