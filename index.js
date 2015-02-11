var monk   = require('monk'),
    fs     = require('fs'),
    glob   = require('glob'),
    dotenv = require('dotenv');

dotenv.load();
var db = monk(process.env.DATABASE_URL || 'localhost/boundaries');


