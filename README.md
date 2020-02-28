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

