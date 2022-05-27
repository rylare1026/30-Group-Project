const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('month' in params){

      // January Start
      if(params['month']== 'january'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "January",
          cartoon: "https://static.wikia.nocookie.net/logocomics/images/1/10/Super_friends_logo.gif/revision/latest/scale-to-width-down/250?cb=20180224001851"
        }
        res.end(JSON.stringify(objToJson));
      }// January End

      // February Start
      else  if(params['month']== 'february'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "February",
          cartoon: "https://1000logos.net/wp-content/uploads/2018/11/Ninja-Turtles-logo.jpg"
        }
        res.end(JSON.stringify(objToJson));
      }// February End

      // March Start
      else  if(params['month']== 'march'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "March",
          cartoon: "https://static.wikia.nocookie.net/disney/images/e/ef/Darkwing_duck.jpg/revision/latest?cb=20180327080807"
        }
        res.end(JSON.stringify(objToJson));
      }// March End

      // April Start
      else  if(params['month']== 'april'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "April",
          cartoon: "https://m.media-amazon.com/images/M/MV5BODgyYzRhNzAtMTJlNC00OTM0LWI3M2ItNzZjYzYxZmJiOWIyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_.jpg"
        }
        res.end(JSON.stringify(objToJson));
      }// April End

      // May Start
      else  if(params['month']== 'may'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "May",
          cartoon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Animaniacs.png"
        }
        res.end(JSON.stringify(objToJson));
      }// May End

      // June Start
      else  if(params['month']== 'june'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "June",
          cartoon: "https://static.wikia.nocookie.net/logopedia/images/4/42/CatDog.svg/revision/latest?cb=20200719151641"
        }
        res.end(JSON.stringify(objToJson));
      }// June End

      // July Start
      else  if(params['month']== 'july'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "July",
          cartoon: "https://sbocmedia.com/wp-content/uploads/2016/07/The-Tick-Logo.jpg"
        }
        res.end(JSON.stringify(objToJson));
      }// July End

      // August Start
      else  if(params['month']== 'august'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "August",
          cartoon: "https://static.wikia.nocookie.net/international-entertainment-project/images/8/8d/Garfield_and_Friends_-_logo_%28English%29.png/revision/latest?cb=20181225223332"
        }
        res.end(JSON.stringify(objToJson));
      }// August End

      // September Start
      else  if(params['month']== 'september'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "September",
          cartoon: "https://upload.wikimedia.org/wikipedia/en/a/a6/Pinky_and_The_Brain_%28logo%29.png"
        }
        res.end(JSON.stringify(objToJson));
      }// September End

      // October Start
      else  if(params['month']== 'october'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "October",
          cartoon: "https://static.wikia.nocookie.net/logo-timeline/images/8/85/TJ_LOGO.jpg/revision/latest/scale-to-width-down/220?cb=20160320180558"
        }
        res.end(JSON.stringify(objToJson));
      }// October End

      // November Start
      else  if(params['month']== 'november'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "November",
          cartoon: "https://www.3djoes.com/uploads/1/3/3/9/13396852/gijoe-1982-1985-2d-logo-revised_orig.jpg"
        }
        res.end(JSON.stringify(objToJson));
      }// November End

      // December Start
      else  if(params['month']== 'december'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          month: "December",
          cartoon: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34a309aa-ad3b-4301-bcf6-9ce22eeb1a1e/dfevf5-b24f5deb-f8cd-4f06-b538-bb7f86877577.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM0YTMwOWFhLWFkM2ItNDMwMS1iY2Y2LTljZTIyZWViMWExZVwvZGZldmY1LWIyNGY1ZGViLWY4Y2QtNGYwNi1iNTM4LWJiN2Y4Njg3NzU3Ny5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.I1AziXJgj9IxIOlnIND8-qnKKD5SxW4cAgnyAEb-uSg"
        }
        res.end(JSON.stringify(objToJson));
      }// December End
      


    } // End Month If Statements
  }//else if

  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    fs.readFile('404.html', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

//setup listen and allow port assignment.
const PORT = process.env.PORT || 8000;
server.listen(PORT, ()=> console.log(`Running on port ${PORT}...`))

////////////////gang gang we in here///////////////////////////////////
// WHAT IT DO!
// i'm here addin lines yyooooooo

