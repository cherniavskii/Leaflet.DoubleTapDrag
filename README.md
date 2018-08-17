# Leaflet.DoubleTapDrag

This plugin adds `doubletapdragstart`, `doubletapdrag` and `doubletapdragend` map events on touch devices.
It allows to handle double-tap and hold gesture.

## Demo: https://cherniavskii.github.io/Leaflet.DoubleTapDrag/

## Usage

### NPM

`npm install --save leaflet-doubletapdrag`

```js
import L from 'leaflet';
import 'leaflet-doubletapdrag';

const map = L.map('map');

...
...
...

map.on('doubletapdragstart', (e) => {
  console.log('doubletapdragstart');
});

map.on('doubletapdrag', (e) => {
  console.log('doubletapdrag');
});

map.on('doubletapdragend', (e) => {
  console.log('doubletapdragend');
});
```

### Loading from unpkg.com:

Add script to head:

`<script src="https://unpkg.com/leaflet-doubletapdrag"></script>`

Now it's ready to use:

```
const map = L.map('map');

...
...
...

map.on('doubletapdragstart', (e) => {
  console.log('doubletapdragstart');
});

map.on('doubletapdrag', (e) => {
  console.log('doubletapdrag');
});

map.on('doubletapdragend', (e) => {
  console.log('doubletapdragend');
});
```

## Events

- `doubletapdragstart` - fired when user double-taps and holds finger on map
- `doubletapdrag` - fired when user moves finger without releasing it from screen
- `doubletapdragend` - fires when user releases finger from screen
