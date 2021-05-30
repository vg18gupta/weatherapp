const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('./api');
const appInfo = require('./credentials');
const path = require('path');


const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/weatherInfo/:city', (req, res) => {
    let city = req.params.city

    request.get(
        `${appInfo.baseURI}?location=${city}&format=json`,
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
                res.status(404).json({
                    success: false,
                    msg: "No match found!!"
                })
            } else {
                res.send(data);
            }
        }
    );
});

app.post('/weatherInfo', (req, res) => {

    let cities = req.body.cities;
    let p = fetchData(cities);
    p.then((response,error)=>{
        if (error) {
            console.log(error);
            res.status(404).json({
                success:false,
                msg:"Error while fetching Data!"
            })
        } else {
            let dataArray = [];
            for(let d of response){
                dataArray.push(JSON.parse(d));
            }
            res.send(dataArray);
            
        }
    })
});

function asyncFunctionCall(cityId) {
    return new Promise(resolve => {
        request.get(
        `${appInfo.baseURI}?woeid=${cityId}&format=json`,
            null,
            null,
            function (error, response, body) {
                if(error){
                    console.log(`\n Response for ${cityId} \n ${error}`);
                }
                else if(typeof response !== 'undefined') {
                        resolve(response);
                        return;
                }
                resolve(false);
            }
        );

    });
  }

function fetchData(cities) { 
    const promises = [];
    for(var cityId of cities) {
        promises.push(asyncFunctionCall(cityId)); 
    }
        return Promise.all(promises);
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
const port = process.env.PORT || 1506;

app.listen(port, () => console.log(`Server started on port: ${port}`))