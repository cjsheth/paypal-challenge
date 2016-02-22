var express    =    require('express');
var app        =    express();
var path    = require("path");


app.get('/',function(req,res){
    res.sendfile(path.join(__dirname+'/views/index.html'));
});

app.get('/css/app.css',function(req,res){
    res.sendfile(path.join(__dirname+'/css/app.css'));
});

app.get('/images/loading.gif',function(req,res){
    res.sendfile(path.join(__dirname+'/images/loading.gif'));
});

app.get('/sendMoney',function(req,res){
    res.sendfile(path.join(__dirname+'/views/sendMoney.html'));
});

app.get('/transactionHistory',function(req,res){
    res.sendfile(path.join(__dirname+'/views/transactionHistory.html'));
});

app.get('/transactions', function(req,res){
    var transactions = [];
    for(var i = 1; i<300;i++){
        transactions.push({
            date: '11/11/2013',
            email: 'emailaddress' + i + '@test.com',
            currency: (i%2) ? 'USD' : 'EUR',
            amount: i*10
        });
    }
    res.json(transactions);
});

var server     =    app.listen(3000,function(){
    console.log("We have started our server on port 3000");
});


app.use('/', express.static(process.cwd() + '/views/'))
