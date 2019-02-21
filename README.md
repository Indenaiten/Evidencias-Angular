# EVIDENCIAS DEL CURSO ANGULAR
_**Angular 4 - El curso definitivo y completo**_

Estas evidencias estan creadas con las siguientes versiones de las herramientas que vamos a necesitar:
  * **[NodeJs](https://nodejs.org/es/)**: v10.13.0
  * **NPM**: v6.4.1
  * **[TypeScript](https://www.typescriptlang.org/)**: v3.2.2
  * **[Angular Cli](https://angular.io/)**: v7.1.2



### 000 - ÍNDICE

  * [001 - Herramientas necesarias](https://github.com/Indenaiten/Evidencias-Angular#001---herramientas-necesarias)
  * [002 - Generar un nuevo proyecto Angular](https://github.com/Indenaiten/Evidencias-Angular#002---generar-un-nuevo-proyecto-angular)
  * [003 - Crear un nuevo componente](https://github.com/Indenaiten/Evidencias-Angular#003---crear-un-nuevo-componente)
  * [004 - Data Binding](https://github.com/Indenaiten/Evidencias-Angular#004---data-binding)  
    * [Interpolación](https://github.com/Indenaiten/Evidencias-Angular#interpolaci%C3%B3n)  
    * [Property Binding](https://github.com/Indenaiten/Evidencias-Angular#property-binding)  
    * [Event Binding](https://github.com/Indenaiten/Evidencias-Angular#event-binding)
    * [Two Way Binding](https://github.com/Indenaiten/Evidencias-Angular#two-way-binding)  

  * [005 - Algunas Directivas](https://github.com/Indenaiten/Evidencias-Angular#005---algunas-directivas)  
    * [NgIf](https://github.com/Indenaiten/Evidencias-Angular#ngif-estructural)  
    * [NgStyle](https://github.com/Indenaiten/Evidencias-Angular#ngstyle-atributo)  
    * [NgClass](https://github.com/Indenaiten/Evidencias-Angular#ngclass-atributo)  
    * [NgFor](https://github.com/Indenaiten/Evidencias-Angular#ngfor-estructural)  
    * [NgSwitch](https://github.com/Indenaiten/Evidencias-Angular#ngswitch)  

  * [006 - Crear Directivas](https://github.com/Indenaiten/Evidencias-Angular#006---crear-directivas)  
  * [007 - Pasar datos entre componentes](https://github.com/Indenaiten/Evidencias-Angular#007---pasar-datos-entre-componentes)  
    * [@Input](https://github.com/Indenaiten/Evidencias-Angular#input)  
    * [@Output](https://github.com/Indenaiten/Evidencias-Angular#output)  

  * [008 - Algunos Pipes](https://github.com/Indenaiten/Evidencias-Angular#008---algunos-pipes)  
    * [Date](https://github.com/Indenaiten/Evidencias-Angular#date)  
    * [Uppercase & Lowercase](https://github.com/Indenaiten/Evidencias-Angular#uppercase-y-lowercase)  
    * [Decimal](https://github.com/Indenaiten/Evidencias-Angular#decimal)  
    * [Currency](https://github.com/Indenaiten/Evidencias-Angular#currency)  
    * [i18nSelect](https://github.com/Indenaiten/Evidencias-Angular#i18nselect)  
    * [json](https://github.com/Indenaiten/Evidencias-Angular#json)  

  * [009 - Crear Pipes](https://github.com/Indenaiten/Evidencias-Angular#009---crear-pipes)  
  * [010 - Crear Servicios](https://github.com/Indenaiten/Evidencias-Angular#010---crear-servicios)  
  * [011 - Routing](https://github.com/Indenaiten/Evidencias-Angular#011---routing)  
  * [012 - Formularios](https://github.com/Indenaiten/Evidencias-Angular#012---formularios)  
    * [FormsModule](https://github.com/Indenaiten/Evidencias-Angular#formsmodule)  
    * [Validaciones HTML5 y Angular](https://github.com/Indenaiten/Evidencias-Angular#validaciones-html5-y-angular)  
    * [ReactiveForms](https://github.com/Indenaiten/Evidencias-Angular#reactive-forms)  
    * [Validaciones con Reactive Forms y Validators](https://github.com/Indenaiten/Evidencias-Angular#validaciones-con-reactive-forms-y-validators)  
  * [013 - Configurar la base de datos de Firebase](https://github.com/Indenaiten/Evidencias-Angular#013---configurar-la-base-de-datos-de-firebase)  
  * [014 - Hacer un C.R.U.D. con Firebase](https://github.com/Indenaiten/Evidencias-Angular#014---hacer-un-crud-con-firebase)  
    * [POST](https://github.com/Indenaiten/Evidencias-Angular#post)  
    * [GET](https://github.com/Indenaiten/Evidencias-Angular#get)




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



### 004 - Data Binding
_**[Commit c4aedf4](https://github.com/Indenaiten/Evidencias-Angular/tree/c4aedf4032bab4cc35b9182e2f59887c0615de6b)**_  
_Enlazar datos en el componente_

Hay varias técnicas:
  1. **Interpolación**: De la fuente de datos a la vista (_**One Way Binding**_).
  2. **Property Binding**: De la fuente de datos a la vista (_**One Way Binding**_).
  3. **Event Binding**: De la vista a la fuente de datos  (_**One Way Binding**_).
  4. **Two Way Binding**: De la fuente de datos a la vista y viceversa (_**Two Way Binding**_).  


#### Interpolación

Para pasar datos por **interpolación**, tendremos los datos declarados en la clase del componente como atributos de ésta, y para acceder a ellos desde la vista utilizaremos la **sintaxis "mustache"**:  
  * **Dato simple**: ``{{ nameOfAttribute }}``  
  * **Dato "object"**: ``{{ nameOfAttribute.name }}``  
  * **Método**: ``{{ nameOfMethod() }}``  


#### Property Binding  

Para pasar datos por **property binding**, tendremos los datos declarados en la clase del componente como atributos de ésta, y para acceder a ellos desde la vista utilizaremos la siguiente sintaxis:  
  ``<input type="text" [placeholder]="nameOfAttribute"/>``  


#### Event Binding

Sirve para **ejecutar un método** a partir de un **evento** en el **HTML**.  
  ~~~
  <button id="eventBinding1" type="button" name="button" (click)="modText()">Modificar Texto</button>
  <h5 id="textEventBinding1">{{ text }}</h5>
  ~~~

#### Two Way Binding

Sirve para enviar y recibir datos desde la fuente de datos a la vista y viceversa:
  ~~~
  <input id="inputTwoBinding" type="text" [(ngModel)]="text"/>
  <h5>{{ text }}</h5>
  ~~~  


### 005 - Algunas Directivas

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


#### NgStyle _(Atributo)_  
  _**[Commit a0022b4](https://github.com/Indenaiten/Evidencias-Angular/tree/a0022b44440c089c27d9597f9200d2b567ce69a6/appCurso/src/app/components/ej-directiva-ng-style)**_  

  ~~~
  <input type="number" class="form-control" [(ngModel)]="puntuaction"/>
  <hr/>
  <h4>Puntuación obtenida:</h4>
  <h4 [ngStyle]="{ color: setColor() }">{{ puntuaction }}</h4>
  ~~~  


#### NgClass _(Atributo)_  
  _**[Commit fb21d68](https://github.com/Indenaiten/Evidencias-Angular/tree/fb21d6899cc4465209dd88ea14d20a9a7b8050e8/appCurso/src/app/components/ej-directiva-ng-class)**_  

  ~~~
  <h4 [ngClass]="{ aprobado : puntuaction >= 5, suspenso : puntuaction < 5 }">Puntuación obtenida: {{ puntuaction }}</h4>
  ~~~


#### NgFor _(Estructural)_  
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


#### NgSwitch
  _**[Commit 6b4547a](https://github.com/Indenaiten/Evidencias-Angular/tree/6b4547ac52ab618a16fd1cc404fac1478e9a4e6a/appCurso/src/app/components/ej-directiva-ng-switch)**_  

  ~~~
  <ul *ngFor="let player of players" [ngSwitch]="player.team">
    <li *ngSwitchCase="'L.A. Lakers'" class="lakers"><h4>{{ player.name }} | {{ player.team }}</h4></li>
    <li *ngSwitchCase="'Chicago Bulls'" class="bulls"><h4>{{ player.name }} | {{ player.team }}</h4></li>
    <li *ngSwitchCase="'Boston Celtics'" class="celtics"><h4>{{ player.name }} | {{ player.team }}</h4></li>
  </ul>
  ~~~  


### 006 - Crear Directivas
  _**[Commit edbb929](https://github.com/Indenaiten/Evidencias-Angular/tree/edbb9294d99b08082425b29193f8be041e348a88)**_  

Para crear una directiva ejecutaremos el siguiente comando:  
  ``ng generate directive nameOfDirective``  
  ``ng g directive nameOfDirective``  

**[Directiva](https://github.com/Indenaiten/Evidencias-Angular/tree/edbb9294d99b08082425b29193f8be041e348a88/appCurso/src/app/directives)**  
**[Componente](https://github.com/Indenaiten/Evidencias-Angular/tree/edbb9294d99b08082425b29193f8be041e348a88/appCurso/src/app/components/ej-mi-directiva1)**  


### 007 - Pasar datos entre componentes
  #### @Input  
   _**[Commit 6787852](https://github.com/Indenaiten/Evidencias-Angular/tree/678785294f58918128be145fe3601c554db41e1d/appCurso/src/app/components/data)**_  


  #### @Output  
   _**[Commit ca5e5a3](https://github.com/Indenaiten/Evidencias-Angular/tree/ca5e5a3200028053cf1901fdee6dbf2a98fb6a2e/appCurso/src/app/components/data)**_  



### 008 - Algunos Pipes  

#### Date
  _**[Commit 0f0ea86](https://github.com/Indenaiten/Evidencias-Angular/tree/0f0ea86e707c6fbd1da251757ddb050bbd274af2/appCurso/src/app/components/pipes/date)**_  

  ~~~
  <h2>Madrid, {{ date | date: 'd/M/y' }} a las {{ date | date: 'H:m Z' }}</h2>
  ~~~  


#### Uppercase y Lowercase
  _**[Commit 52937f5](https://github.com/Indenaiten/Evidencias-Angular/tree/52937f5fb21c360a5343dcb8f727de0dd312e981/appCurso/src/app/components/pipes/upper-lower)**_  

  ~~~
  <h2>Madrid => {{ city | uppercase }}, {{ city | lowercase }}</h2>
  ~~~  


#### Decimal
  _**[Commit 2f5b0b3](https://github.com/Indenaiten/Evidencias-Angular/tree/2f5b0b30ace97d32e413a8d7c0890fbadf997bd4/appCurso/src/app/components/pipes/decimal)**_  

  ~~~
  <h2>Número 1.48 (3.2-2) => {{ n1 | number: '3.2-2' }}</h2>
  ~~~  


#### Currency
  _**[Commit cc9a2c2](https://github.com/Indenaiten/Evidencias-Angular/tree/cc9a2c23b9203e6e859703b3f4f15dd9c1ba4a30/appCurso/src/app/components/pipes/currency)**_  

  ~~~
  <h2>La cotización actual del dolar es de {{ dolaEuro | currency: 'EUR': true }}</h2>
  ~~~  


#### i18nSelect
  _**[Commit 86ef7d9](https://github.com/Indenaiten/Evidencias-Angular/tree/86ef7d909bc766c7033651a0b87ac9034923f8f1/appCurso/src/app/components/pipes/i18n-select)**_    

  ~~~
  <h2>{{ sex | i18nSelect: header }} {{ name }}</h2>
  ~~~  


#### JSON  
  _**[Commit b7d33d1](https://github.com/Indenaiten/Evidencias-Angular/tree/b7d33d1c7b81a4a3f9afa7802b419d59b852863b/appCurso/src/app/components/pipes/json)**_    

  ~~~
  <h2>{{ nameOfObject | json }}</h2>
  ~~~  


### 009 - Crear Pipes
  _**[Commit 8ba7630](https://github.com/Indenaiten/Evidencias-Angular/tree/8ba7630bb21fabca58dc452f7f27ae0c6c7dc566)**_  

Para crear un pipe ejecutaremos el siguiente comando:  
  ``ng generate pipe nameOfPipe``  
  ``ng g pipe nameOfPipe``  

**[Pipe](https://github.com/Indenaiten/Evidencias-Angular/tree/8ba7630bb21fabca58dc452f7f27ae0c6c7dc566/appCurso/src/app/pipes)**  
**[Componente](https://github.com/Indenaiten/Evidencias-Angular/tree/8ba7630bb21fabca58dc452f7f27ae0c6c7dc566/appCurso/src/app/components/pipes/custom-pipe)**  


### 010 - Crear Servicios  
  _**[Commit 71e33fe](https://github.com/Indenaiten/Evidencias-Angular/tree/71e33fe2f53084649c5003aeaabee5362126ff0e)**_  
  _**[Commit 680a8a2](https://github.com/Indenaiten/Evidencias-Angular/tree/680a8a2f2ba835f63cfd4ae0010cb6a758b4913f)**_

Para crear un servicio ejecutaremos el siguiente comando:  
  ``ng generate service nameOfService``  
  ``ng g service nameOfService``  

Una vez generado, tendrémos que registrarlo en _**app.module.ts**_ en el array de _**providers**_.  


### 011 - Routing  
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


### 012 - Formularios  

#### FormsModule  
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


#### Validaciones HTML5 y Angular
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


#### Reactive Forms
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



### 013 - Configurar la base de datos de Firebase  
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



### 014 - Hacer un C.R.U.D. con Firebase  
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



#### POST  
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



#### GET  
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
