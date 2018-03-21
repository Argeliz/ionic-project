# Trabajos Tijuana
Muestra trabajos como marcadores en mapa de google. 

Saca trabajos de [empleonuevo.com/baja-california/tijuana/trabajos](https://www.empleonuevo.com/baja-california/tijuana/trabajos) usando [Grepsr](https://www.grepsr.com/) con la extension de google chrome para hacer scraping a los datos. La herramienta es de paga así que sólo la use para sacar un unico archivo json de los datos, está actualizado hasta el 18 de marzo.

Luego, usando el geocoder de la api de google maps, convierte la direccion a coordenadas y coloca marcadores en el mapa. En la segunda página se muestra una lista de los trabajos.

### Dependencias:

```
ionic cordova plugin add cordova-plugin-geolocation 
npm install --save @ionic-native/geolocation
```



Todo:

- Mostart modal con los datos del trabajo

- Implementar Login

- Alertar al usuario si no está conectado a Internet

- Añadir Loading, para hacerle saber al usuario que la página está cargando

- ...

  ​