# Trabajos Tijuana
Muestra trabajos como marcadores en mapa de google. 

Saca trabajos de [empleonuevo.com/baja-california/tijuana/trabajos](https://www.empleonuevo.com/baja-california/tijuana/trabajos) usando [Grepsr](https://www.grepsr.com/) con la extension de google chrome para hacer scraping a los datos. La herramienta es de paga así que sólo la use para sacar un unico archivo json de los datos, está actualizado hasta el 18 de marzo.

Luego, usando el geocoder de la api de google maps, convierte la direccion a coordenadas y coloca marcadores en el mapa. En la segunda página se muestra una lista de los trabajos.

Puedes descargar el apk de [aquí](https://github.com/Argeliz/ionic-project/releases/download/0.4/TrabajosTijuana0.4.apk).

### Dependencias:

```
ionic cordova plugin add cordova-plugin-geolocation 
npm install --save @ionic-native/geolocation

ionic cordova plugin add cordova-plugin-network-information
npm install --save @ionic-native/network
```



### Todo:

- Implementar Login

- Añadir Loading, para hacerle saber al usuario que la página está cargando

- ...

  ​