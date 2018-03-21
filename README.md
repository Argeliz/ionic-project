# Trabajos Tijuana
Muestra trabajos como marcadores en mapa de google. 

Saca trabajos de [empleonuevo.com/baja-california/tijuana/trabajos](https://www.empleonuevo.com/baja-california/tijuana/trabajos) usando [Grepsr](https://www.grepsr.com/) con la extension de google chrome para hacer scraping a los datos.

Luego, usando el geocoder de la api de google maps, convierte la direccion a coordenadas y coloca marcadores en el mapa. En la segunda página se muestra una lista de los trabajos.

### Dependencias: 

```
ionic cordova plugin add cordova-plugin-geolocation 
npm install --save @ionic-native/geolocation
```

