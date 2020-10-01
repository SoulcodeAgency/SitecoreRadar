const fs = require('fs');
const parser = require('parser-front-matter');
const pagedown = require('pagedown');
const del = ",";
const converter = new pagedown.Converter(); 
const csvInit = "name,ring,quadrant,isNew,description\n"
const outFile = "radar.csv"

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

var data = [];
readFiles('./content/', function(filename, content) {
    
    data.push(parser.parseSync(content));
    
    let csvString = csvInit;
    let itemContent = '';

    data.forEach(function(item) {
        console.log("Add Entry: " + item.data.name);
        htmlString = converter.makeHtml(item.content).replace(/(?:\r\n|\r|\n)/g, '');
        itemContent = '"' + htmlString.replace(/["]/g, "\"\"") + '"';
        csvString += item.data.name + del + item.data.ring + del + item.data.quadrant + del + item.data.isNew + del + itemContent + "\n";
    });

    fs.writeFileSync(outFile, csvString);

}, function(err) {
  throw err;
});

