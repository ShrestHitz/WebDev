const express =  require("express");
const app = express();

const users = [{
  name: "John",
  kidneys: [{
    healthy: false   
  }]
}];

app.use(express.json())

//first endpoint 
//query parameter for get request
app.get("/", function(req,res){
  //write the logic
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  //filter in js, study
  let numberOfHealthyKidneys = 0;
  for(let i=0; i<johnKidneys.length; i++) {
    if (johnKidneys[i].healthy){
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys
  })
})

//second endpoint
//we usually send data in the "body"
app.post("/", function(req, res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy : isHealthy
  })
  res.json({
    msg : "Done!"
  })
})

app.listen(3000);