# mongodb-nz-census-geojson
Import Census boundary GeoJSON into MongoDB

To run:

Edit the Bower dependencies in bower.json, i.e.:

```json
"dependencies": {
  "nz_area_units_geojson":
"git@github.com:nzherald/nz_area_units_geojson.git#~1.0.0"
}
```

then `bower install`

then `node index.js`

Importing may take some time.
