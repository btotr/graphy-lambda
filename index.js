// index.js

const serverless = require('serverless-http');
const express = require('express');
const graphy = require('graphy');
const cors = require('cors');
const trig_read = graphy.content.trig.read;
const xml_scribe = graphy.content.xml.scribe;
const dataset = graphy.memory.dataset.fast;
const app = express();
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/trig2xml', (ds_req, ds_res) => {
    var data = "";
    (async() => {
    let xml = await ds_req.pipe(trig_read())
        .pipe(xml_scribe())
            .on("data", (xml_data) => {
                data += xml_data;
            })
        .until('finish', true);
        ds_res.type('xml');
    ds_res.status(200).end(data);
})();

    
});

module.exports.handler = serverless(app);