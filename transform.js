const fs = require('fs');
const parser = require('parser-front-matter');
const pagedown = require('pagedown');
const del = ",";
const converter = new pagedown.Converter(); 
const csvInit = "name,ring,quadrant,isNew,description\n"
const outFile = "radar.csv"
const workDir = "./content"

function readFiles(directoy, files) {
  content = [];
  for(var i = 0; i < files.length; i++){
    if (files[i] != "blip.md") {
      console.log("Reading file: " + files[i]);
      content.push(fs.readFileSync(directoy + "/" + files[i], 'utf-8'));
    }
  }
  return content;
}

// get the content of all blips
blips = readFiles(workDir, fs.readdirSync(workDir));

let csvString = csvInit;

for (var i = 0; i < blips.length; i++) {
  
  // parse front matter
  blip = parser.parseSync(blips[i]);
  
  console.log("Adding entry: " + blip.data.name);

  // convert markdown to html and remove newlines
  htmlString = converter.makeHtml(blip.content).replace(/(?:\r\n|\r|\n)/g, '');
  blipContent = '"' + htmlString.replace(/["]/g, "\"\"") + '"';

  // add blip to csv string
  csvString += blip.data.name + del + blip.data.ring + del + blip.data.quadrant + del + blip.data.isNew.toString().toUpperCase() + del + blipContent + "\n";
}

console.log("write csv...");
fs.writeFileSync(outFile, csvString);