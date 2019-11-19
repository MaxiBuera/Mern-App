const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const City = require('./City');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://MaxiB:Argentina@mycluster-9sh7r.mongodb.net/citiesdb?retryWrites=true&w=majority', {useNewUrlParser: true , useUnifiedTopology: true } )
.then( res=> {
  City.find()
  .then(res=> console.log(res))
    })
.catch(error => handleError(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test', (req, res) => {
  res.send({ express: 'Tests Works' });
});
/*
app.get('/api/cities', async (req, res) => {
  const cities = await City.find()
  res.send(cities)
});*/

app.get('/cities', (req, res) => {
  console.log("conectado")
  City.find()
  .then(resp=> 
  res.send(resp)
  );
});


app.listen(port, () => console.log(`Listening on port ${port}`));

/*
router.get('/get-data', function(req,res,next){

  var resultArray=[];

  mongoose.connect(url, function(err,citiesdb){
      assert.equal(null,err);
      var cursor = citiesdb.collection('country').find();
      cursor.foreach(function (doc,err){
          assert.equal(null,err);
          resultArray.push(doc);
      }, function () {
          citiesdb.close();
          res.render('index',{items: resultArray})
      });
  });
})*/