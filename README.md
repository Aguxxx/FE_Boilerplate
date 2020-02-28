# FE_Boilerplate
Boilerplate code for front end projects development

This project is compiling with `Node v11.15.0`

Para installar todas las dependencias:
```
npm install
```

Para iniciar:
```
npm run-script build-dev-hot
```

Este script 
- Inicia el servidor webpack-dev-server
- Abre la página index.html
- Monitorea cambios, recompila, y actualiza la página automáticamente (hot module replacement)


Path | Description
------------ | -------------
/css		| Almacena los css que necesitemos para customizaciones finas.
/components 	| El árbol de componentes VUE, este directorio se vuelve enorme
/dev					| Para colocar los archivos, clases, lógica, en typescript.
/dist					| La carpeta donde compila javascript.
/plugins			| plugins / scripts .js que no sean los que producimos nosotros mismos. 

<br>

**Compilar TEST:**
```
npm run-script build-dev
```

**Compilar PRODUCCION:**
```
npm run-script build-prod
```


<br>
<br>


# MISIóN
* Descargar el proyecto. Ver si se entiende, consultar dudas, entender metodología de trabajo.
* Agregar un control nuevo y que se vea en la dashboard, que sea un COMPONENTE .VUE y que muestre algo, por ejemplo información del clima con una imagen y un texto.
	* Que dicho componente utilice sintaxis sencilla, solo markup de Vuetify, poco o ningún estilo inline, diagramación responsiva utilizando grillas (v-row / v-col), y tratar de no configurar demasiado los controls Vuetify (mantener los valores por default)
* Chequear http://vuetifyjs.com/ para encontrar todos los componentes que podemos usar para hacer nuestros propios componentes.
* Consultar las dudas o cosas que no salgan o no funcionen. 
* Hacer un pull-request con las modificaciones para evaluarlas y publicarlas.
