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

## How does this work?

I've been using QGIS to export Census shapefiles as GeoJSON, and include
a bower.json component definition. This script assumes a naming
structure of `nz_[type of area]_geojson/geojson/*.json`.

For example: [Area
Units](https://github.com/nzherald/nz_area_units_geojson)

### Why is there a geojson folder inside the repo?

Because Github truncates large file lists.


## Why would anyone want to use this?

If you use MongoDB and want to do spatial queries, this can be useful.


## Contribution

Pull requests are welcome!
