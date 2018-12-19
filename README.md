# EVIDENCIAS DEL CURSO ANGULAR
_**Angular 4 - El curso definitivo y completo**_

Estas evidencias estan creadas con las siguientes versiones de las herramientas que vamos a necesitar:
  * **[NodeJs](https://nodejs.org/es/)**: v10.13.0
  * **NPM**: v6.4.1
  * **[TypeScript](https://www.typescriptlang.org/)**: v3.2.2
  * **[Angular Cli](https://angular.io/)**: v7.1.2



### 001 - Herramientas necesarias
1. Necesitaremos instalar **[NodeJs](https://nodejs.org/es/)**.  

    * Después de la instalación, comprobamos que este instalado **NodeJs** y **npm** ejecutando los siguientes comandos:  
      ``node -v``  
      ``npm -v``  

2. Instalaremos **[TypeScript](https://www.typescriptlang.org/)** de forma **global**: ``npm install -g typescript``

    * Una vez instalado, comprobaremos que este **TypeScript** instalado ejecutando el siguiente comando:  
      ``tsc -v``  

3. También instalaremos **[Angular Cli](https://angular.io/)** de forma **global**: ``npm install -g @angular/cli``  

    * Una vez instalado, comprobaremos que este **Angular Cli** instalado ejecutando el siguiente comando:  
      ``ng version``  

4. Necesitaremos un **editor de textos**, en mi caso utilizaremos **[Atom](https://atom.io/)**.  
    * Plugins de **[Atom](https://atom.io/)**:
        * **[platformio-ide-terminal](https://atom.io/packages/platformio-ide-terminal)**:  
          ``apm install platformio-ide-terminal``  

        * **[angular-2-typeScript-snippets](https://atom.io/packages/angular-2-typescript-snippets)**:  
          ``apm install angular-2-typeScript-snippets``  

        * **[atom-typescript](https://atom.io/packages/atom-typescript)**:  
          ``apm install atom-typescript``  

        * **[file-icons](https://atom.io/packages/file-icons)**:  
          ``apm install file-icons``  

        * **[emmet](https://atom.io/packages/emmet)**:  
          ``apm install emmet``  

        * **[minimap](https://atom.io/packages/minimap)**:  
          ``apm install minimap``  



### 002 - Generar un nuevo proyecto Angular
_**[Commit a919576](https://github.com/Indenaiten/Evidencias-Angular/tree/a9195760086b8d688a7e91e9749dc21caeb4bd2f)**_

Para **generar el cliente Angular**, abriremos la **terminal** y ejecutaremos el siguiente comando:  
  ``ng new NameOfProject``  

Nos preguntará si queremos agregar a nuestra aplicación el componente de **"routing"** de **Angular** y a continuación que **formato de estilos** vamos a querer utilizar en nuestra aplicación (en mi caso añadiré el componente de **routing** y elegiré el formato **CSS** para los estilos).  

Una vez generado el proyecto, nos situaremos **mediante la terminal** en la carpeta del proyecto y ejecutaremos el siguiente comando:  
  ``ng serve``

Éste comando **lanzará la aplicación** para poder ver el resultado de ésta. En cualquier navegador nos dirigimos a ``http://localhost:4200`` y podremos ver nuestra aplicación en **funcionamiento**.  

Si queremos lanzar la aplicación en otro **puerto**, ejecutaremos el siguiente comando:  
  ``ng serve --port 8080``  

Si lanzamos el siguiente comando, nos **lanzará la aplicación, además de abrirla directamente en nuestro navegador**:  
  ``ng serve --open``  
  ``ng serve -o``  



### 003 - Crear un nuevo componente
_**[Commit 5666b18](https://github.com/Indenaiten/Evidencias-Angular/tree/5666b189d6e1e997f383852e4d5e1a59e847fb22)**_

Los **componentes** se crean en el interior de la carpeta **"/src/app"**.

Para **crear un componente** nos bastará con ir a la **terminal** y ejecutar el siguiente comando:  
  ``ng generate component nameOfComponent``  
  ``ng g component nameOfComponent``  
  ``ng g c nameOfComponent``  

Si no se quiere que se generé el archivo **spec** (que sirve para pruebas unitarias), al utilizar el anterior comando se utiliza el siguiente **modificador** ``--spec false``.  

El anterior comando nos creará **todos los archivos necesarios del componente** y además **registrará el componente creado en las directivas del "/src/app.module.ts"**.  

Los componentes se pueden crear a mano, pero **no hay que olvidarse de registrarlo en las directivas del "/src/app.module.ts"**.  

En el fichero **"nameOfComponent.component.ts"** se encuetra la clase correspondiente al componente. Desde el **template** se podrá **acceder a los atributos y métodos públicos** de dicha clase (mediante **{{ nameOfAttribute }}**).  

En el archivo **"nameOfComponent.component.html"** va el código html del componente. Se puede prescindir de éste archivo si en el **"component.ts"** en vez de añadir **"templateUrl"**, añadimos la propiedad **"template"** y entre las comillas ``` ``` va el código **HTML**.  

En el archivo **"nameOfComponent.component.css"** va el código css del componente.  

El fichero **"/index.html"** es el fichero html principal, el cual llama al componente **"app-root"**.  

En la carpeta **"/assets"** van situados todos los **recursos globales** de nuestra aplicación (_Hojas de estilo, ficheros JavaScript, librerías, imágenes, fuentes, etc..._).  
