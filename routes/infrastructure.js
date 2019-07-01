var express = require('express');
var router = express.Router();
var multer = require('multer')

var infra = require('../models/infrastructure')


//upload image 

const storage = multer.diskStorage ({
  destination : function(req,file,cb) {
    cb(null,'./uploads');
  }, 
  filename(req,file,cb) {
    cb(null,new Date().toISOString().replace(/:/g, '-')+file.originalname);
  }
})

const upload = multer({storage:storage});

/* GET users listing. */
router.get('/', function(req, res, next) {
    var users = null ; 
    infra.find().sort('-date')
        .then((data)=>{
           // res.setHeader("Access-Control-Allow-Origin", "*"),
           // res.statusCode=200,
            //res.contentType('application/json'),
            res.json(data)
        }) 
  });
  
  
  router.post('/add',upload.single('infraImage'),function(req,res){
  
    var now = new Date()
    m  = new infra({
      title : req.body.title,
      date : now,
      type : req.body.type,
      desciption : req.body.desciption,
      image : req.file.path,
     
  
   });
   m.save(function(err,ques){
       if (err) 
           res.send(err)
       else 
           res.send(ques)
   }) 
   console.log(m)
   //console.log("reponses contenu"+ req.body.reponses)
  });
  
  
  router.put('/update/:id',upload.single('infraImage'),function(req,res){
  
    var now = new Date()
    let query = {
      "_id" : req.params.id
  }
  console.log('id'+req.params.id)
  infra.findByIdAndUpdate(req.params.id, {$set: 
    
    {
      title : req.body.title,
      date : now,
      type : req.body.type,
      desciption : req.body.desciption,
      image : req.file.path,
    }
  },
    function (err, meetings) {
      if (err) return res.send(err)
      res.send('infra udpated.');
  });
  })
  
  
  router.delete('/delete/:id', function(req, res, next) {
    let query = {
        "_id" : req.params.id
    }
    //console.log(query)
    club.remove(query,(err)=>{
        if(err) {
            console.log('error supression');
            return;
        } 
        else{
          res.send('club deleted.');
        }
    });
  
  });
  
  
  router.get('/id/:id',function(req,res){
  
    var now = new Date()
    let query = {
      "_id" : req.params.id
  }
  console.log('id'+req.params.id)
  club.findById(req.params.id,
    
    function (err, meetings) {
      if (err) return res.send(err)
      res.send(meetings);
  });
  })

  router.get('/sportif', function(req, res, next) {
    var users = null ;
    var now = new Date() 
    infra.find()
        .then((data)=>{
           // res.setHeader("Access-Control-Allow-Origin", "*"),
           // res.statusCode=200,
            //res.contentType('application/json'),
           // res.json(data)
           let sports = [] 
           data.forEach(element => {
             if(element.type==='sportif'){
                  sports.push(element)
             }
           });
           res.json(sports)
        })
        
        
    });
  
    router.get('/autres', function(req, res, next) {
      var users = null ;
      var now = new Date() 
      infra.find()
          .then((data)=>{
             // res.setHeader("Access-Control-Allow-Origin", "*"),
             // res.statusCode=200,
              //res.contentType('application/json'),
             // res.json(data)
             let autres = [] 
             data.forEach(element => {
               if(element.type==='autres'){
                    autres.push(element)
               }
             });
             res.json(autres)
          })
          
          
      });

      router.get('/searsh',function(req,res){
        var title = req.query.title 
        console.log(title)
        infra.find({ 'title': new RegExp(title, 'i') }).sort('-date')
        .then((data)=>{
           // res.setHeader("Access-Control-Allow-Origin", "*"),
           // res.statusCode=200,
            //res.contentType('application/json'),
            res.json(data)
        }) 
      
      })
  
  module.exports = router;