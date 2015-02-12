var monk   = require('monk'),
    fs     = require('fs'),
    glob   = require('glob'),
    dotenv = require('dotenv');

dotenv.load();
var db = monk(process.env.DATABASE_URL || 'localhost/boundaries');

var matchRegEx  = /bower_components\/nz_(.*)_geojson/,
    matchString = 'bower_components/nz_*_geojson',
    directories = glob.sync(matchString);

var matches = directories.map(function(m) { return m.match(matchRegEx)[1]; });

console.dir(matches);

for(var m of matches) {
  console.dir(m);
  var collection = db.get(m),
      files      = glob.sync('bower_components/nz_' + m + '_geojson/geojson/*.geojson')
  for(var file of files) {
    console.log('Importing ' + file);
    var shape = JSON.parse(fs.readFileSync(file, 'utf-8')),
        keys  = Object.keys(shape.features[0].properties),
        vals  = [];

    for(var key of keys) {
      vals.push(shape.features[0].properties[key]);
    }

    var record = {
      id: Number(vals[0]),
      name: vals[1],
      shape: shape
    };
    collection.insert(record);
  };
};

