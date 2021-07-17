const fs = require('fs');
const parser = require('parser-front-matter');
const pagedown = require('pagedown');
const del = ",";
const converter = new pagedown.Converter(); 
const csvInit = "name,ring,quadrant,isNew,description\n"
const outFile = "radar.csv"
const workDir = "./content"

function readFiles(directoy, files)
{
  content = [];

  for(var i = 0; i < files.length; i++)
  {
    if (files[i] != "_blip.md")
    {
      console.log("Reading file: " + files[i]);
      content.push(fs.readFileSync(directoy + "/" + files[i], 'utf-8'));
    }
  }
  return content;
}

function processBlip(blip)
{
  // parse blip (includes front matter and body)
  parsedBlip = parser.parseSync(blip);
  
  console.log("Processing blip: " + parsedBlip.data.name);

  // convert markdown to html and remove newlines
  parsedBlip.content = converter.makeHtml(parsedBlip.content).replace(/(?:\r\n|\r|\n)/g, '');
  parsedBlip.content = '"' + parsedBlip.content.replace(/["]/g, "\"\"") + '"';

  return parsedBlip;
}

function getCsvString(a)
{
  var tmpString = '';

  for (var i = 0; i<a.length; i++)
  {
    tmpString += a[i].data.name + del + a[i].data.ring + del + a[i].data.quadrant + del + a[i].data.isNew.toString().toUpperCase() + del + a[i].content + "\n";
  }
  return tmpString;
}

// get the content of all blips
blips = readFiles(workDir, fs.readdirSync(workDir));

let csvString = csvInit;
let adopt = [];
let trial = [];
let assess = [];
let hold = [];

for (var i = 0; i < blips.length; i++)
{
  blip = processBlip(blips[i]);

  switch (blip.data.ring) {
    case "Adopt":
      adopt.push(blip);
      break;
    case "Trial":
      trial.push(blip);
      break;
    case "Assess":
      assess.push(blip);
      break;
    case "Hold":
      hold.push(blip);
      break;
    default:
      break;
  }
}

// need to make sure we have at least sorted the rings, otherwise the radar renders rubbish.
csvString += getCsvString(adopt);
csvString += getCsvString(trial);
csvString += getCsvString(assess);
csvString += getCsvString(hold);

console.log("write csv...");
fs.writeFileSync(outFile, csvString);