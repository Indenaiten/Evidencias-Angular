# EVIDENCIAS DEL CURSO ANGULAR
_**Angular 4 - El curso definitivo y completo**_

Estas evidencias estan creadas con las siguientes versiones de las herramientas que vamos a necesitar:
  * **[NodeJs](https://nodejs.org/es/)**: v10.13.0
  * **NPM**: v6.4.1
  * **[TypeScript](https://www.typescriptlang.org/)**: v3.2.2
  * **[Angular Cli](https://angular.io/)**: v7.1.2



### 000 - ÍNDICE

  * [001 - Herramientas necesarias](https://github.com/Indenaiten/Evidencias-Angular#001---herramientas-necesarias---índice)
  * [002 - Generar un nuevo proyecto Angular](https://github.com/Indenaiten/Evidencias-Angular#002---generar-un-nuevo-proyecto-angular---índice)
  * [003 - Crear un nuevo componente](https://github.com/Indenaiten/Evidencias-Angular#003---crear-un-nuevo-componente---índice)
  * [004 - Data Binding](https://github.com/Indenaiten/Evidencias-Angular#004---data-binding---índice)  
    * [Interpolación](https://github.com/Indenaiten/Evidencias-Angular#interpolaci%C3%B3n---índice)  
    * [Property Binding](https://github.com/Indenaiten/Evidencias-Angular#property-binding---índice)  
    * [Event Binding](https://github.com/Indenaiten/Evidencias-Angular#event-binding---índice)
    * [Two Way Binding](https://github.com/Indenaiten/Evidencias-Angular#two-way-binding---índice)  

  * [005 - Algunas Directivas](https://github.com/Indenaiten/Evidencias-Angular#005---algunas-directivas---índice)  
    * [NgIf](https://github.com/Indenaiten/Evidencias-Angular#ngif-estructural---índice)  
    * [NgStyle](https://github.com/Indenaiten/Evidencias-Angular#ngstyle-atributo---índice)  
    * [NgClass](https://github.com/Indenaiten/Evidencias-Angular#ngclass-atributo---índice)  
    * [NgFor](https://github.com/Indenaiten/Evidencias-Angular#ngfor-estructural---índice)  
    * [NgSwitch](https://github.com/Indenaiten/Evidencias-Angular#ngswitch---índice)  

  * [006 - Crear Directivas](https://github.com/Indenaiten/Evidencias-Angular#006---crear-directivas---índice)  
  * [007 - Pasar datos entre componentes](https://github.com/Indenaiten/Evidencias-Angular#007---pasar-datos-entre-componentes---índice)  
    * [@Input](https://github.com/Indenaiten/Evidencias-Angular#input---índice)  
    * [@Output](https://github.com/Indenaiten/Evidencias-Angular#output---índice)  

  * [008 - Algunos Pipes](https://github.com/Indenaiten/Evidencias-Angular#008---algunos-pipes---índice)  
    * [Date](https://github.com/Indenaiten/Evidencias-Angular#date---índice)  
    * [Uppercase & Lowercase](https://github.com/Indenaiten/Evidencias-Angular#uppercase-y-lowercase---índice)  
    * [Decimal](https://github.com/Indenaiten/Evidencias-Angular#decimal---índice)  
    * [Currency](https://github.com/Indenaiten/Evidencias-Angular#currency---índice)  
    * [i18nSelect](https://github.com/Indenaiten/Evidencias-Angular#i18nselect---índice)  
    * [json](https://github.com/Indenaiten/Evidencias-Angular#json---índice)  

  * [009 - Crear Pipes](https://github.com/Indenaiten/Evidencias-Angular#009---crear-pipes---índice)  
  * [010 - Crear Servicios](https://github.com/Indenaiten/Evidencias-Angular#010---crear-servicios---índice)  
  * [011 - Routing](https://github.com/Indenaiten/Evidencias-Angular#011---routing---índice)  
  * [012 - Formularios](https://github.com/Indenaiten/Evidencias-Angular#012---formularios---índice---índice)  
    * [FormsModule](https://github.com/Indenaiten/Evidencias-Angular#formsmodule---índice)  
    * [Validaciones HTML5 y Angular](https://github.com/Indenaiten/Evidencias-Angular#validaciones-html5-y-angular---índice)  
    * [ReactiveForms](https://github.com/Indenaiten/Evidencias-Angular#reactive-forms---índice)  
    * [Validaciones con Reactive Forms y Validators](https://github.com/Indenaiten/Evidencias-Angular#validaciones-con-reactive-forms-y-validators---índice)  
  * [013 - Configurar la base de datos de Firebase](https://github.com/Indenaiten/Evidencias-Angular#013---configurar-la-base-de-datos-de-firebase---índice)  
  * [014 - Hacer un C.R.U.D. con Firebase](https://github.com/Indenaiten/Evidencias-Angular#014---hacer-un-crud-con-firebase---índice)  
    * [POST](https://github.com/Indenaiten/Evidencias-Angular#post---índice)  
    * [GET](https://github.com/Indenaiten/Evidencias-Angular#get---índice)  
    * [PUT](https://github.com/Indenaiten/Evidencias-Angular#put---índice)  
    * [DELETE](https://github.com/Indenaiten/Evidencias-Angular#delete---índice)  
  * [015 - Authenticación](https://github.com/Indenaiten/Evidencias-Angular#015---authenticaci%C3%B3n---índice)  
    * [Registro de Usuarios mediante email/contraseña](https://github.com/Indenaiten/Evidencias-Angular#registro-de-usuarios-mediante-emailcontrase%C3%B1a---índice)  
    * [Login de Usuarios mediante email/contraseña](https://github.com/Indenaiten/Evidencias-Angular#login-de-usuarios-mediante-emailcontrase%C3%B1a---índice)  
    * [Comprobar si el usuario esta autentificado](https://github.com/Indenaiten/Evidencias-Angular#comprobar-si-el-usuario-esta-autentificado---índice)  
    * [Desloguearse](https://github.com/Indenaiten/Evidencias-Angular#desloguearse---índice)  
    * [Protección de las rutas](https://github.com/Indenaiten/Evidencias-Angular#protecci%C3%B3n-de-las-rutas---%C3%ADndice)  
  * [016 - Crear un módulo](https://github.com/Indenaiten/Evidencias-Angular#016---crear-un-m%C3%B3dulo)




### 001 - Herramientas necesarias - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
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



### 002 - Generar un nuevo proyecto Angular - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
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



### 003 - Crear un nuevo componente - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
_**[Commit 5666b18](https://github.com/Indenaiten/Evidencias-Angular/tree/5666b189d6e1e997f383852e4d5e1a59e847fb22)**_  
_**[Commit 1a533b5](https://github.com/Indenaiten/Evidencias-Angular/tree/1a533b568a9c16571b7aed513edbeec646fe7cbe)**_

Los **componentes** se crean en el interior de la carpeta **"/src/app"**.

Para **crear un componente** nos bastará con ir a la **terminal** y ejecutar el siguiente comando:  
  ``ng generate component nameOfComponent``  
  ``ng g component nameOfComponent``  
  ``ng g c nameOfComponent``  

Si no se quiere que se generé el archivo **spec** (que sirve para pruebas unitarias), al utilizar el anterior comando se utiliza el siguiente **modificador** ``--spec false``.  

El anterior comando nos creará **todos los archivos necesarios del componente** y además **registrará el componente creado en las directivas del "/src/app.module.ts"**.  

Los componentes se pueden crear a mano, pero **no hay que olvidarse de registrarlo en las directivas del "/src/app.module.ts"**.  

En el fichero **"nameOfComponent.component.ts"** se encuetra la clase correspondiente al componente. Desde el **template** se podrá **acceder a los atributos y métodos públicos** de dicha clase (mediante **{{ nameOfAttribute }}**).  

En el archivo **"nameOfComponent.component.html"** va el código html del componente. Se puede prescindir de éste archivo si en el **"component.ts"** en vez de añadir **"templateUrl"**, añadimos la propiedad **"template"** y entre las comillas `` ` ` `` va el código **HTML**.  

En el archivo **"nameOfComponent.component.css"** va el código css del componente.  

El fichero **"/index.html"** es el fichero html principal, el cual llama al componente **"app-root"**.  

En la carpeta **"/assets"** van situados todos los **recursos globales** de nuestra aplicación (_Hojas de estilo, ficheros JavaScript, librerías, imágenes, fuentes, etc..._).  



### 004 - Data Binding - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
_**[Commit c4aedf4](https://github.com/Indenaiten/Evidencias-Angular/tree/c4aedf4032bab4cc35b9182e2f59887c0615de6b)**_  
_Enlazar datos en el componente_

Hay varias técnicas:
  1. **Interpolación**: De la fuente de datos a la vista (_**One Way Binding**_).
  2. **Property Binding**: De la fuente de datos a la vista (_**One Way Binding**_).
  3. **Event Binding**: De la vista a la fuente de datos  (_**One Way Binding**_).
  4. **Two Way Binding**: De la fuente de datos a la vista y viceversa (_**Two Way Binding**_).  


#### Interpolación - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  

Para pasar datos por **interpolación**, tendremos los datos declarados en la clase del componente como atributos de ésta, y para acceder a ellos desde la vista utilizaremos la **sintaxis "mustache"**:  
  * **Dato simple**: ``{{ nameOfAttribute }}``  
  * **Dato "object"**: ``{{ nameOfAttribute.name }}``  
  * **Método**: ``{{ nameOfMethod() }}``  


#### Property Binding - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  

Para pasar datos por **property binding**, tendremos los datos declarados en la clase del componente como atributos de ésta, y para acceder a ellos desde la vista utilizaremos la siguiente sintaxis:  
  ``<input type="text" [placeholder]="nameOfAttribute"/>``  


#### Event Binding - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  

Sirve para **ejecutar un método** a partir de un **evento** en el **HTML**.  
  ~~~
  <button id="eventBinding1" type="button" name="button" (click)="modText()">Modificar Texto</button>
  <h5 id="textEventBinding1">{{ text }}</h5>
  ~~~

#### Two Way Binding - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  

Sirve para enviar y recibir datos desde la fuente de datos a la vista y viceversa:
  ~~~
  <input id="inputTwoBinding" type="text" [(ngModel)]="text"/>
  <h5>{{ text }}</h5>
  ~~~  


### 005 - Algunas Directivas - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  

Las directivas pueden ser de 3 tipos, _**componentes**_, _**estructurales**_ o de _**atributo**_.  

Las **directivas estructurales van precedidas siempre de "*"**.  

Las **directivas de atributo van entre corchetes "[]"**.

#### NgIf _(Estructural)_  
  _**[Commit 71a2955](https://github.com/Indenaiten/Evidencias-Angular/tree/71a2955b2e7c39ec8de0d67354f42ba8e4a75fdc/appCurso/src/app/components/ej-directiva-ng-if)**_  

  ~~~
  <label for="">¿Cuál es la capital de España?</label>
  <input type="text" class="form-control" placeholder="Introduce tu respuesta" [(ngModel)]="capital"/>
  <p *ngIf="!capital ; else correct">Por favor, complete su respusta</p>

  <ng-template #correct>
    <h4 *ngIf="setResult() ; else incorrect">¡Correcto!</h4>
  </ng-template>

  <ng-template #incorrect>
    <h4>¡Incorrecto!</h4>
  </ng-template>
  ~~~  


#### NgStyle _(Atributo)_ - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit a0022b4](https://github.com/Indenaiten/Evidencias-Angular/tree/a0022b44440c089c27d9597f9200d2b567ce69a6/appCurso/src/app/components/ej-directiva-ng-style)**_  

  ~~~
  <input type="number" class="form-control" [(ngModel)]="puntuaction"/>
  <hr/>
  <h4>Puntuación obtenida:</h4>
  <h4 [ngStyle]="{ color: setColor() }">{{ puntuaction }}</h4>
  ~~~  


#### NgClass _(Atributo)_ - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit fb21d68](https://github.com/Indenaiten/Evidencias-Angular/tree/fb21d6899cc4465209dd88ea14d20a9a7b8050e8/appCurso/src/app/components/ej-directiva-ng-class)**_  

  ~~~
  <h4 [ngClass]="{ aprobado : puntuaction >= 5, suspenso : puntuaction < 5 }">Puntuación obtenida: {{ puntuaction }}</h4>
  ~~~


#### NgFor _(Estructural)_ - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit ea767e9](https://github.com/Indenaiten/Evidencias-Angular/tree/ea767e921aebfa6ba428953f849d903497beaddb/appCurso/src/app/components/ej-directiva-ng-for)**_

  ~~~
  <ul>
    <li *ngFor="let curso of cursos">{{ curso }}</li>
  </ul>

  <table class="table table-bordered table-striped">
    <thead>
      <tr class="filters">
        <th>Id</th>
        <th>Name</th>
        <th>Lastnames</th>
        <th>City</th>
      </tr>
    </thead>

    <tbody>
      <tr *ngFor="let alumno of alumnos">
        <td>{{ alumno.id }}</td>
        <td>{{ alumno.name }}</td>
        <td>{{ alumno.lastnames }}</td>
        <td>{{ alumno.city }}</td>
      </tr>
    </tbody>
  </table>
  ~~~  


#### NgSwitch - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 6b4547a](https://github.com/Indenaiten/Evidencias-Angular/tree/6b4547ac52ab618a16fd1cc404fac1478e9a4e6a/appCurso/src/app/components/ej-directiva-ng-switch)**_  

  ~~~
  <ul *ngFor="let player of players" [ngSwitch]="player.team">
    <li *ngSwitchCase="'L.A. Lakers'" class="lakers"><h4>{{ player.name }} | {{ player.team }}</h4></li>
    <li *ngSwitchCase="'Chicago Bulls'" class="bulls"><h4>{{ player.name }} | {{ player.team }}</h4></li>
    <li *ngSwitchCase="'Boston Celtics'" class="celtics"><h4>{{ player.name }} | {{ player.team }}</h4></li>
  </ul>
  ~~~  


### 006 - Crear Directivas - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit edbb929](https://github.com/Indenaiten/Evidencias-Angular/tree/edbb9294d99b08082425b29193f8be041e348a88)**_  

Para crear una directiva ejecutaremos el siguiente comando:  
  ``ng generate directive nameOfDirective``  
  ``ng g directive nameOfDirective``  

**[Directiva](https://github.com/Indenaiten/Evidencias-Angular/tree/edbb9294d99b08082425b29193f8be041e348a88/appCurso/src/app/directives)**  
**[Componente](https://github.com/Indenaiten/Evidencias-Angular/tree/edbb9294d99b08082425b29193f8be041e348a88/appCurso/src/app/components/ej-mi-directiva1)**  


### 007 - Pasar datos entre componentes - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  #### @Input - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
     _**[Commit 6787852](https://github.com/Indenaiten/Evidencias-Angular/tree/678785294f58918128be145fe3601c554db41e1d/appCurso/src/app/components/data)**_  


  #### @Output - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
     _**[Commit ca5e5a3](https://github.com/Indenaiten/Evidencias-Angular/tree/ca5e5a3200028053cf1901fdee6dbf2a98fb6a2e/appCurso/src/app/components/data)**_  



### 008 - Algunos Pipes - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  

#### Date - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 0f0ea86](https://github.com/Indenaiten/Evidencias-Angular/tree/0f0ea86e707c6fbd1da251757ddb050bbd274af2/appCurso/src/app/components/pipes/date)**_  

  ~~~
  <h2>Madrid, {{ date | date: 'd/M/y' }} a las {{ date | date: 'H:m Z' }}</h2>
  ~~~  


#### Uppercase y Lowercase - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 52937f5](https://github.com/Indenaiten/Evidencias-Angular/tree/52937f5fb21c360a5343dcb8f727de0dd312e981/appCurso/src/app/components/pipes/upper-lower)**_  

  ~~~
  <h2>Madrid => {{ city | uppercase }}, {{ city | lowercase }}</h2>
  ~~~  


#### Decimal - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 2f5b0b3](https://github.com/Indenaiten/Evidencias-Angular/tree/2f5b0b30ace97d32e413a8d7c0890fbadf997bd4/appCurso/src/app/components/pipes/decimal)**_  

  ~~~
  <h2>Número 1.48 (3.2-2) => {{ n1 | number: '3.2-2' }}</h2>
  ~~~  


#### Currency - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit cc9a2c2](https://github.com/Indenaiten/Evidencias-Angular/tree/cc9a2c23b9203e6e859703b3f4f15dd9c1ba4a30/appCurso/src/app/components/pipes/currency)**_  

  ~~~
  <h2>La cotización actual del dolar es de {{ dolaEuro | currency: 'EUR': true }}</h2>
  ~~~  


#### i18nSelect - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 86ef7d9](https://github.com/Indenaiten/Evidencias-Angular/tree/86ef7d909bc766c7033651a0b87ac9034923f8f1/appCurso/src/app/components/pipes/i18n-select)**_    

  ~~~
  <h2>{{ sex | i18nSelect: header }} {{ name }}</h2>
  ~~~  


#### JSON - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit b7d33d1](https://github.com/Indenaiten/Evidencias-Angular/tree/b7d33d1c7b81a4a3f9afa7802b419d59b852863b/appCurso/src/app/components/pipes/json)**_    

  ~~~
  <h2>{{ nameOfObject | json }}</h2>
  ~~~  


### 009 - Crear Pipes - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 8ba7630](https://github.com/Indenaiten/Evidencias-Angular/tree/8ba7630bb21fabca58dc452f7f27ae0c6c7dc566)**_  

Para crear un pipe ejecutaremos el siguiente comando:  
  ``ng generate pipe nameOfPipe``  
  ``ng g pipe nameOfPipe``  

**[Pipe](https://github.com/Indenaiten/Evidencias-Angular/tree/8ba7630bb21fabca58dc452f7f27ae0c6c7dc566/appCurso/src/app/pipes)**  
**[Componente](https://github.com/Indenaiten/Evidencias-Angular/tree/8ba7630bb21fabca58dc452f7f27ae0c6c7dc566/appCurso/src/app/components/pipes/custom-pipe)**  


### 010 - Crear Servicios - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 71e33fe](https://github.com/Indenaiten/Evidencias-Angular/tree/71e33fe2f53084649c5003aeaabee5362126ff0e)**_  
  _**[Commit 680a8a2](https://github.com/Indenaiten/Evidencias-Angular/tree/680a8a2f2ba835f63cfd4ae0010cb6a758b4913f)**_

Para crear un servicio ejecutaremos el siguiente comando:  
  ``ng generate service nameOfService``  
  ``ng g service nameOfService``  

Una vez generado, tendrémos que registrarlo en _**app.module.ts**_ en el array de _**providers**_.  


### 011 - Routing - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 8ecc2b0](https://github.com/Indenaiten/Evidencias-Angular/tree/8ecc2b0b4d57c00c8ff218d11f495caa4d4d6110)**_  

Para crear el _**routing**_ nos dirigiremos a _**app.module.ts**_ y allí importaremos los siguientes elementos:  
  ``import { Routes, RouterModule } from '@angular/router';``  

En el mismo archivo typeScript crearemos una constante con las rutas de nuestra aplicación, en nuestro caso esta constante se va a llamar _**routes**_. El atributo _**path**_ corresponde a la ruta, y el atributo _**component**_ al componente que tendrá que mostrar.  
  ~~~
  const routes:Routes = [
    { path: '', component: InicioComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: '**', component: InicioComponent } //** SIGNIFICA CUALQUIER PÁGINA QUE NO EXISTA
  ];
  ~~~   

Una vez especificadas las rutas, en el array de _**imports**_ añadimos lo siguiente:  
  ``RouterModule.forRoot( routes )``  

Con todo esto, las rutas de nuestra aplicación funcionaran correctamente.  
Ahora crearemos una barra de navegación. Creamos un nuevo componente y establecemos el _**HTML**_ correspondiente. Una vez tenemos nuestro código _**HTML**_, para especificarle una ruta a una etiqueta "_**a**_" utilizaremos el atributo "_**routerLink="/ruta"**_".  
Si queremos poner una clase en algún elemento cuando la ruta este activa, utilizaremos el atributo "_**routerLinkActive="claseCss"**_".  
Si queremos poner dicha clase, sólamente cuando esa ruta exacta este activa, utilizaremos "_**[routerLinkActiveOptions]="{exact:true}"**_".  
Ej.:  
  ~~~
  <nav>
    <ul>
      <li routerLinkActive="active"
          [routerLinkActiveOptions]="{exact:true}">
          <a routerLink="/">Inicio</a>
      </li>
      <li routerLinkActive="active">
          <a routerLink="/proveedores">Proveedores</a>
      </li>
    </ul>
  </nav>
  ~~~  


### 012 - Formularios - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  

#### FormsModule - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 337806a](https://github.com/Indenaiten/Evidencias-Angular/tree/337806afcb600f0cba7453729e8ed15aedd67d7d)**_  

Para utilizar el módulo de formularios de Angular, necesitaremos importar el siguiente módulo en el _**app.module.ts**_ y registrarlo en el array de imports.  
  ``import { FormsModule } from '@angular/forms';``  

Una vez tenemos el módulo importato en el _**app.module.ts**_, creamos nuestro formulario. En el la etiqueta "_**form**_" de apertura, establecemos un método a ejecutar cuando se haga "_**submit**_" del formulario de la siguiente manera:  
  ``(ngSubmit)="methodToExec()""``

También estableceremos una "_**id**_" al formulario para que podamos refererirnos a él con angular de la siguiente forma:  
  ``#idOfForm="ngForm``  

Una vez hecho esto, nos dirigiremos al archivo "_**.ts**_" del componente de nuestro formulario. Allí, importaremos el "_**NgForm**_".  
  ``import { NgForm } from "@angular/forms";``  

Ahora crearemos un atributo de tipo "_**NgForm**_" y le pondremos la anotación "_**@ViewChild( "idOfForm" )**_". En la anotación se le especificará la id establecida anteriormente al formulario, esto vinculará el objeto con el formulario.  
  ~~~
  @ViewChild( "idOfForm" )
  public form:NgForm;
  ~~~  

Una vez vinculado el formulario con el objeto "_**NgForm**_" nos dirigimos al formulario y en los campos que se quieran recoger, les indicamos con que nombre nos vamos a referir a dicho campo indicándoselo en la etiqueta del campo con "_**ngModel**_":  
  ``ngModel name="nameOfField"``  

Una vez preparado todo esto, crearemos el método al que le especificamos al formulario anteriormente que tendría que ejecutar cuando este hiciese "_**submit**_". En este método recogeremos el valor del formulario en un atributo que creemos para guardarlo y reiniciaremos los campos para volverlos a dejar en blanco.  
  ~~~
  public methodToExec(){
    //MAP DATA WITH OBJECT
    this.nameOfAttribute = this.form.value.nameOfField;

    //RESET FORM
    this.form.reset();
  }
  ~~~  


#### Validaciones HTML5 y Angular - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 2a53e65](https://github.com/Indenaiten/Evidencias-Angular/tree/2a53e6596f424e26469fa09e31a094c15189a33b)**_   
  _**[Commit b1d6642](https://github.com/Indenaiten/Evidencias-Angular/tree/b1d6642cdc55d1c59f648fad2aae6ffc224e1528)**_  

Angular tiene unos estados para los formularios. Existe 5 tipos de estados y todos son de tipo "_**boolean**_".  
  * **Dirty**: Es cuando el usuario comienza a utilizar el campo. ``form.controls.nameOfField.dirty``  
  * **Pristine**: Es cuando el usuario aun no ha tocado el campo. ``form.controls.nameOfField.pristine``  
  * **Touched**: Es cuando el usuario a tocado un campo y deje de usarlo. ``form.controls.nameOfField.touched``   
  * **Valid**: Es cuando el usuario a insertado unos datos en el campo acordes con unas condiciones (mismamente las de HTML5). ``form.controls.nameOfField.valid``  
  * **Invalid**: Es cuando el usuario a insertado unos datos en el campo no acordes con unas condiciones (mismamente las de HTML5). ``form.controls.nameOfField.invalid``

Estos estados estan asociados con unas clases CSS de Angular, lo que nos permite crear estilos para los elementos según su estado. Las clases son las siguientes:  
  ``ng-dirty``  
  ``ng-pristine``  
  ``ng-touched``  
  ``ng-valid``  
  ``ng-invalid``  


#### Reactive Forms - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 4270ae4](https://github.com/Indenaiten/Evidencias-Angular/tree/4270ae40c63985f26a5dc0cc2220f7e976129d8d)**_  

Esto es otra técnica para manipular formularios con Angular. Para poder trabajar con "_**ReactiveForms**_" necesitaremos ir a "_**app.module.ts**_" e importar el siguiente modulo y agregar la clase al array de "_**imports**_":  
  ``import { ReactiveFormsModule } from '@angular/forms';``  

Una vez establecido el módulo "_**ReactiveForms**_" nos creamos el formulario. En la etiqueta "_**form**_" de apertura del formulario, establecemos el nombre del objeto "_**FormGroup**_" al cual va a estar vinculado el formulario y el método que queremos que ejecute cuando el formulario se envíe.  
  ``[formGroup]="nameOfObjectToVinculateForm"``  
  ``(ngSubmit)="methodToExec()"``  

Ahora en cada campo que queramos recoger su valor, le establecemos un nombre para poder acceder a él.  
  ``formControlName="nameOfField1"``  

Una vez tenemos el formulario construido, nos vamos a la clase del componente e importamos las siguientes clases:  
  ``import { FormGroup, FormBuilder } from '@angular/forms';``  

Ya podemos trabajar con estas clases, ahora crearemos 2 objetos.  
  ~~~
  public nameOfObjectToVinculateForm:FormGroup;
  public finalObject:any;
  ~~~  

A continuación inyectamos por el constructor un objeto FormBuilder.  
  ~~~
  public constructor( private pf:FormBuilder ){

  }
  ~~~  

Ahora en el método "_**ngOnInit**_" construímos el formulario en nuestro "_**FormGroup**_".  
  ~~~
  public ngOnInit(){
    this.nameOfObjectToVinculateForm = this.pf.group({
      nameOfField1: "",
      nameOfField2: "",
      nameOfField3: ""
    });
  }
  ~~~  

Solo nos falta crear el método que será ejecutado al enviar el formulario.  
  ~~~
  public methodToExec(){
    this.finalObject = {
      nameOfField1: this.nameOfObjectToVinculateForm.get( "nameOfField1" ).value,
      nameOfField2: this.nameOfObjectToVinculateForm.get( "nameOfField2" ).value,
      nameOfField3: this.nameOfObjectToVinculateForm.get( "nameOfField3" ).value
    };
  }
  ~~~  

Para mostrar los valores del formulario del objeto "_**FormGroup**_", utilizaremos la propiedad "_**value**_" y si queremos ver el estado del formulario (válido o invalido) utilizaremos la proppiedad "_**status*_".  
  ``nameOfObjectToVinculateForm.value``  
  ``nameOfObjectToVinculateForm.status``  


#### Validaciones con Reactive Forms y Validators
  _**[Commit 03d97a6](https://github.com/Indenaiten/Evidencias-Angular/tree/03d97a62c02d001d5e8920d63c2a37b40a3ef58f)**_  

Con "_**ReactiveForms**_" para validar, necesitaremos importar la clase "_**Validators**_".  
  ``import { FormGroup, FormBuilder, Validators } from '@angular/forms';``  

Ahora en el método "_**ngOnInit**_", donde construimos el formulario, le establecemos las validaciones mediante la clase "_**Validators**_".  
  ~~~
  this.nameOfObjectToVinculateForm = this.pf.group({
    nameOfField1: [ "ValorPorDefecto", Validators.required ],
    nameOfField2: [ "ValorPorDefecto", Validators.required  ],
    nameOfField3: [ "ValorPorDefecto", [ Validators.required, Validators.minLength( 10 ) ] ],
    nameOfField4: [ 0, Validators.required ],
    nameOfField5: [ 0, Validators.required ],
    nameOfField6: 0
  });
  ~~~  

Si queremos que por ejemplo, un par de campos númericos, cuando el usuario los modifique nos muestre la suma de estos en otro campo, en el mismo método "_**ngOnInit**_" añadiremos lo siguiente:  
  ~~~
  this.nameOfObjectToVinculateForm.valueChanges.subscribe( value => {
    var nameOfField4:number = value.nameOfField4;
    var nameOfField5:number = value.nameOfField5;
    this.nameOfObjectToVinculateForm.value.nameOfField6 = nameOfField4 + nameOfField5 );
  });
  ~~~  

Por último, para visualizar los cambios en el HTML necesitaremos añadir un "_**ngModel**_" al campo correspondiente.  
  `` [(ngModel)]="nameOfObjectToVinculateForm.value.nameOfField6"``

Para mostrar mensajes personalizados de error según la validación crearemos 2 atributos en el componente.  
  _**[Commit e33648a](https://github.com/Indenaiten/Evidencias-Angular/tree/e33648a1d8b91b9a71ae06f0182242e850dce7be/appFinal/src/app/components/auth/registro)**_
  ~~~
  public erroresForm:any = {
    'email': '',
    'password': ''
  }

  public msgValidation:any = {
    'email': {
      'required': "Email Obligatorio",
      'email': "Introuzca un email correcto"
    },

    'password': {
      'required': "Contraseña obligatoria",
      'pattern': "La contraseña debe tener al menos un número y una letra",
      'minlength': "y más de 6 caracteres"
    }
  }
  ~~~  

Creamos el siguiente método:  
  ~~~
  public onValueChanged( data?:any ){
    //CHECK IF EXISTS A FORM
    if( !this.registroForm ){ return; }

    //GET FORM
    var form = this.registroForm;

    //BROWSE erroresForm
    for( var field in this.erroresForm ){
      //CLEAR FIELD
      this.erroresForm[ field ] = '';

      //GET FIELD OF FORM
      var control = form.get( field );

      //CHECK IF EXISTS AND IT'S CORRECT
      if( control && control.dirty && !control.valid ){
        //GET MESSAGE OF VALIDATION
        var msgs = this.msgValidation[ field ];

        //BROWSE ERROR OF FIELD
        for( var key in control.errors ){
          //SET MESSAGES OF VALIDATION IN erroresForm
          this.erroresForm[ field ] += msgs[ key ] + " ";
        }
      }
    }
  }
  ~~~  

Ahora en el método _**"ngOnInit()"**_ añadimos el siguiente código:  
  ~~~
  //SET MESSAGES OF ERROR WHEN VALUES CHANGED
  this.registroForm.valueChanges.subscribe( ( data ) => this.onValueChanged( data ) );
  this.onValueChanged(); //CLEAR MESSAGES
  ~~~  



### 013 - Configurar la base de datos de Firebase - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 6cd7e30](https://github.com/Indenaiten/Evidencias-Angular/tree/6cd7e30d66cf90ca7bb559a0961588a7ce1da59a)**_  

Nos dirigimos a [https://firebase.google.com](https://firebase.google.com). Una vez allí nos dirigimos a la opción **"ir a la consola"** y en la pantalla resultante le damos a **"añadir proyecto"**.  

![013-001](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/013-001.PNG)  

![013-002](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/013-002.PNG)  


En la ventana emergente establecemos el nombre y la ubicación del proyecto, aceptamos las condiciones y creamos el proyecto.  

![013-003](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/013-003.PNG)  

![013-004](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/013-004.PNG)  


Con el proyecto creado y dentro de él, abrimos la opción **"database"** y creamos la base de datos (_**"Realtime Database"**_) y establecemos las reglas en modo de prueba ( **para el curso** ).  

![013-005](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/013-005.PNG)  

![013-006](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/013-006.PNG)  


Ya tenemos configurada nuestra base de datos de **Firebase**.
El link que aparece donde la pestaña **"datos"** dentro de nuesta base de datos, es la direccion de nuestra base de datos.  

![013-007](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/013-007.PNG)  



### 014 - Hacer un C.R.U.D. con Firebase - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 6cd7e30](https://github.com/Indenaiten/Evidencias-Angular/blob/6cd7e30d66cf90ca7bb559a0961588a7ce1da59a/appFinal/src/app/app.module.ts)**_  

Para poder hacer peticiones **http** necesitaremos importar en el archivo _**app.module.ts**_ los siguientes módulos:  
  ``import { HttpClientModule } from '@angular/common/http';``  

Ahora en el servicio donde vayamos hacer peticiones http, necesitaremos las siguientes importaciones:  
  ~~~
  import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
  import { map } from 'rxjs/operators';
  ~~~  

Establecemos una propiedad al servicio con la url de **Firebase** añadiéndole el nombre que queramos para la colección para guardar los datos (en fomato **JSON**).  
  ``url/nameOfCollection.json``  

Por último, inyectamos en el constructor del servicio el objeto **HttpClient** y ya tendrémos listo el servicio para crear los métodos necesarios para realizar el **C.R.U.D.**  
  ~~~
  constructor( private http:HttpClient ){

  }
  ~~~



#### POST - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 6cd7e30](https://github.com/Indenaiten/Evidencias-Angular/blob/6cd7e30d66cf90ca7bb559a0961588a7ce1da59a/appFinal/src/app/services/presupuestos.service.ts)**_  

Para guardar datos, crearemos un método que va a recibir un objeto **JSON** como parámetro (el objeto que queramos guardar).  
En el método convertimos el objeto a texto y creamos las cabeceras de la petición y finalmente retornamos el resultado de la petición **"POST"**.  
  ~~~
  public postElementJSON( elementJSON:any ){
    //VARIABLES
    var newElementJSON:string = JSON.stringify( elementJSON );
    var headers:any = new HttpHeaders({
      'ContentType': 'application/json'
    });

    //RETURN
    return this.http.post( this.url, newElementJSON, { headers } )
      .pipe( map( ( response:any ) => {
        console.log( response );

        return response;
      }));
  }
  ~~~  



#### GET - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 58ad081](https://github.com/Indenaiten/Evidencias-Angular/tree/58ad08107ec8bea6a3488d5a5db926ed42f3e7ee)**_  

Para recuperar datos, crearemos un método que va a retornarnos el resultado de la petición **"GET"**. Este resultado será una lista de objetos **"JSON"** de la colección de **Firebase** indicada.  

  ~~~
  public getElementsJSON(){
    //RETURN
    return this.http.get( this.url )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( response );

        //RETURN
        return response;
      }));
  }
  ~~~

Para usar éste método recién creado en un componente, lo haremos de la siguiente manera:  
  ~~~
  constructor( private nameService:NameService ){
    //GET ELEMENTS JSON
    this.nameService.getElementsJSON()
      .subscribe( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( response );

        //BROWSE RESPONSE
        for( var id in response ){
          //GET ELEMENT
          var elementJSON = response[ id ];

          //SET ID OF ELEMENT JSON
          elementJSON.id = id;

          //SAVE ELEMENT JSON IN ARRAY
          this.elementJSON.push( elementJSON );
        }
      });
  }
  ~~~  



#### PUT - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 5d37d4d](https://github.com/Indenaiten/Evidencias-Angular/tree/5d37d4d6c0acb9b4a258de83d0d68b06a38c6d69)**_  

Para actualizar datos, crearemos un método que va a recibir como parametros el elemento actualizado en formato **JSON** y la id correspondiente a ese elemento, estos 2 elementos serán enviados a **Firebase** a través de una petición **"PUT"**. La url correspondiente estará formada de la siguiente manera:  
  ``url/nameOfCollection/idOfElement.json``  

  ~~~
  public putElementJSON( elementJSON:any, id:string ){
    //VARIABLES
    var newElementJSON:string = JSON.stringify( elementJSON );
    var headers:any = new HttpHeaders({
      'ContentType': 'application/json'
    });
    var url = `${this.urlId}/${id}.json`;

    //RETURN
    return this.http.put( url, newElementJSON, { headers } )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( response );

        //RETURN
        return response;
      }));
  }
  ~~~  

Entonces en el servicio, necesitaremos a parte un método para recuperar un elemento en concreto a partir de su id.  
  ~~~
  public getElementJSON( id:string ){
    //VARIABLES
    var url = `${this.urlId}/${id}.json`;

    //RETURN
    return this.http.get( url )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( response );

        //RETURN
        return response;
      }));
  }
  ~~~  

En el componente, tendrémos que obtener la id del elemento a editar, esa id la pasaremos a través de la url y para poderla obtener necesitaremos importar las siguientes clases:  
  ``import { Router, ActivatedRoute } from '@angular/router';``  

Ahora en el constructor inyectaremos las 2 clases y obtendrémos en él la id que viene por la url y el elemento correspondiente de Firebase.  
  ~~~
  public constructor(
    private pf:FormBuilder,
    private nameService:NameService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){
    //GET ACTIVATED ROUTE
    this.activatedRoute.params
      .subscribe( ( parameters:any ) => {
        //SAVE ID
        this.id = parameters[ 'id' ];

        //GET ELEMENT JSON
        this.nameService.getElementJSON( this.id )
          .subscribe( ( response:any ) => {
            //SHOW IN CONSOLE
            console.log( response );

            //SAVE NAME JSON
            this.nameJSON = response;
          });
      });
  }
  ~~~  

Por último en el método que se ejecuta cuando se envía el formulario, irá lo siguiente:  
  ~~~
  public execMethod():void{
    //CREATE ELEMENT JSON
    this.elementJSON = {
      nameOfField1: [ "ValorPorDefecto", Validators.required ],
      nameOfField2: [ "ValorPorDefecto", Validators.required  ],
      nameOfField3: [ "ValorPorDefecto", [ Validators.required, Validators.minLength( 10 ) ] ],
      nameOfField4: [ 0, Validators.required ],
      nameOfField5: [ 0, Validators.required ],
      nameOfField6: 0
    };

    //PERSIST
    this.nameService.putElementJSON( this.elementJSON, this.id )
      .subscribe( ( response ) => {
        //SHOW IN CONSOLE
        console.log( response );

        //REDIRECT
        this.router.navigate([ "/nameOfRoute" ]);
      });

    //RESET FORM
    this.nameOfForm.reset();
  }
  ~~~  



#### DELETE - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 809cc90](https://github.com/Indenaiten/Evidencias-Angular/tree/809cc90cce856952f8312908cf80a5b7567266f7)**_  

Para borrar datos, crearemos un método que va a recibir como parámetro la id correspondiente a ese elemento, éste elemento será enviado a **Firebase** a través de una petición **"DELETE"**. La url correspondiente estará formada de la siguiente manera:  
  ``url/nameOfCollection/idOfElement.json``  

El método del servicio se verá algo así:  
  ~~~
  public deleteElementJSON( id:string ){
    //VARIABLES
    var url = `${this.urlId}/${id}.json`;

    //RETURN
    return this.http.delete( url )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( response );

        //RETURN
        return response;
      }));
  }
  ~~~  



### 015 - Authenticación - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 5af7229](https://github.com/Indenaiten/Evidencias-Angular/tree/5af7229a5449cb6fccb29277b9d26b2961aa3a32)**_  

Para poder establecer un authenticación con usuarios guardados en nuestra base de datos de **Firebase**, necesitaremos configurar nuestro método de inicio de sesión en **Firebase**.  
Esta configuración la haremos en el apartado _**"Authentication"**_, y en la pantalla resultante, en la pestaña _**"Método de Inicio de Sesión"**_.  

  ![015-001](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/015-001.PNG)  

  ![015-002](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/015-002.PNG)  


Ahora, elegimos nuestro método o métodos de inicio de sesión (en nuestro caso elegiremos sólamente el de **"Correo electrónico/contraseña"**). Lo editamos, y lo habilitamos.  

  ![015-003](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/015-003.PNG)  


A partir de ahora, todos los usuarios registrados mediante **"Correo electrónico/contraseña"** nos aparecerán en la pestaña _**"Usuarios"**_.  

  ![015-004](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/015-004.PNG)  


Una vez configurado nuestro método de inicio de sesión en **Firebase** crearemos nuestro servicio de autenticación e instalaremos el módulo de **Firebase** mediante el siguiente comando.  
  ``npm install firebase angularfire2 --save``  

Ya instalado el módulo de **Firebase**, en el servicio de autenticación realizaremos el siguiente _**"import"**_:  
  ``import * as firebase from 'firebase';``  

Nos dirigimos al componente _**"app.component.ts"**_ y en ella importamos **Firebase** y la clase _**"OnInit"**_.  
  ``import { Component, OnInit } from '@angular/core';``  
  ``import * as firebase from 'firebase';``  

Una vez habiendo echo los _**"imports"**_, hacemos que la clase _**"AppComponent"**_ implement la clase _**"OnInit"**_.  
Creamos el método correspondiente de la clase _**"OnInit"**_ y dentro inicializamos al app de _**"Firebase"**_ con la configuración de nuestro firebase.  
  ~~~
  public ngOnInit():void{
    //INITIALIZE FIREBASE APP
    firebase.initializeApp({
      apiKey: "PIzaSzDgHvUfiNzGB3taStV8MG9SBvADuzeb808",
      authDomain: "nameOfProject-e1b05.firebaseapp.com",
    });
  }
  ~~~  

La configuración se encuentra en el apartado de _**"Autenticatión"**_, en _**"Configuración Web"**_.  

  ![015-005](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/015-005.PNG)  

  ![015-006](https://github.com/Indenaiten/Evidencias-Angular/blob/master/img/015-006.PNG)  



#### Registro de Usuarios mediante email/contraseña - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 5af7229](https://github.com/Indenaiten/Evidencias-Angular/tree/5af7229a5449cb6fccb29277b9d26b2961aa3a32)**_  

Crearemos en el servicio de autentificación el método para guardar un usuario en **Firebase** que se va autenticar mediante email y passowrd:  
  ~~~
  public registerUser( userData:any ):void{
    //REGISTER
    firebase.auth().createUserWithEmailAndPassword( userData.email, userData.password )
      .catch( ( error ) => {
        //SHOW IN CONSOLE
        console.log( error );
      });
  }
  ~~~  



#### Login de Usuarios mediante email/contraseña - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit c5d112b](https://github.com/Indenaiten/Evidencias-Angular/tree/c5d112b49830e8b8e594f0e915dfb658d1c0db06)**_  

Crearemos en el servicio de autentificación el método para autentificar a un usuario de **Firebase** mediante email y passowrd:
  ~~~
  public login( userData:any ){
    //AUTHENTICATE USER FROM FIREBASE
    firebase.auth().signInWithEmailAndPassword( userData.email, userData.password )
    .then( ( response ) => {
      //SHOW IN CONSOLE
      console.log( "SERVICIO" );
      console.log( response );
    })
    .catch( ( error ) => {
      //SHOW IN CONSOLE
      console.log( "SERVICIO" );
      console.log( error );
    });
  }
  ~~~  



#### Comprobar si el usuario esta autentificado - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit e6fa565](https://github.com/Indenaiten/Evidencias-Angular/blob/e6fa5657ddbf5f4ca55b908f0ff27e1a17b76a61/appFinal/src/app/services/auth.service.ts)**_  

Para comprobar si el usuario esta autentificado, necesitaremos crear el siguiente método en el servicio de autentificación:  
  ~~~
  public iAuth():boolean{
    //VARIABLES
    var result:boolean = false;
    var user:any = firebase.auth().currentUser; //GET AUTHENTICATED USER

    //CHECK USER
    if( user ){ //IF EXISTS THE USER
      //SET result IN TRUE
      result = true;
    }

    //RETURN RESULT
    return result;
  }
  ~~~  
  
  
  
#### Desloguearse - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit 961afd6](https://github.com/Indenaiten/Evidencias-Angular/tree/961afd6c20432a153fee7ef4eae1cc07eda1e8c8)**_  
  
Para desloguearse, necesitaremos crear el siguiente método en el servicio de autentificación: 
  ~~~
  public logout():void{
    //LOGOUT
    firebase.auth().signOut();
  }
  ~~~  
  
  
  
#### Protección de las Rutas - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit be34979](https://github.com/Indenaiten/Evidencias-Angular/tree/be34979fdc3d50435b1eb758b7d584f14d1d636b)**_  
  
Para proteger nuestras rutas crearemos un nuevo servicio que implementará la clase _**"CanActivate"**_ (este servicio suele llamarse _**"GuardService"**_). Al implementar esta clase, tendremos que crear el método _**"canActivate()"**_ y en éste devolveremos si el usuario está autentificado o no.  
  ~~~
  public canActivate(){
    //RETURN
    return this.authService.iAuth();
  }
  ~~~  
  
Ahora, en _**"app.module.ts"**_ protegeremos las rutas que queramos de la siguiente manera:  
  ``{ path: 'ruta', component: NameOfComponent, canActivate: [GuardService] },``  
  
  
  
### 016 - Crear un módulo - **[[ÍNDICE]](https://github.com/Indenaiten/Evidencias-Angular#000---%C3%ADndice)**  
  _**[Commit fd1a35a](https://github.com/Indenaiten/Evidencias-Angular/tree/fd1a35aed1d14bfc6520093781b47ac1508364ee)**_  
  
Para crear un módulo, en nuestra terminal ejecutaremos el siguiente comando:  
  ``ng generate module nameOfModule``  
  ``ng g module nameOfModule``  
  
Para crear un componente para el nuevo módulo, bastará con crearlo dentro de la carpeta del módulo.  
Ahora para poder utilizar el módulo en nuestra aplicación, tendrémos que importarlo en el archivo _**"app.module.ts"**_ y registrarlo en el array de _**imports**_.