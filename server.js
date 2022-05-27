const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log('page',page);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('month' in params){
      
      let cartoonImage = null;

      switch(params['month'].toLowerCase()) {
        case 'jan':
          cartoonImage = "https://static.wikia.nocookie.net/logocomics/images/1/10/Super_friends_logo.gif";
          break;
        case 'feb':
          cartoonImage = "https://1000logos.net/wp-content/uploads/2018/11/Ninja-Turtles-logo.jpg";
          break;
        case 'mar':
          cartoonImage = "https://www.cartoonbucket.com/wp-content/uploads/2017/03/Image-of-Darkwing-Duck.png";
          break;
        case 'apr':
          cartoonImage = "https://m.media-amazon.com/images/M/MV5BODgyYzRhNzAtMTJlNC00OTM0LWI3M2ItNzZjYzYxZmJiOWIyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_.jpg"
          break;
        case 'may':
          cartoonImage = "https://upload.wikimedia.org/wikipedia/en/8/8a/Animaniacs.png"
          break;
        case 'jun':
          cartoonImage = "https://static.wikia.nocookie.net/logopedia/images/4/42/CatDog.svg/revision/latest?cb=20200719151641"
          break;
        case 'jul':
          cartoonImage = "https://sbocmedia.com/wp-content/uploads/2016/07/The-Tick-Logo.jpg"
          break;
        case 'aug':
          cartoonImage = "https://static.wikia.nocookie.net/international-entertainment-project/images/8/8d/Garfield_and_Friends_-_logo_%28English%29.png/revision/latest?cb=20181225223332"
          break;
        case 'sep':
          cartoonImage = "https://upload.wikimedia.org/wikipedia/en/a/a6/Pinky_and_The_Brain_%28logo%29.png"
          break;
        case 'oct':
          cartoonImage = "https://static.wikia.nocookie.net/logo-timeline/images/8/85/TJ_LOGO.jpg/revision/latest/scale-to-width-down/220?cb=20160320180558";
          break;
        case 'nov':
          cartoonImage = "https://www.3djoes.com/uploads/1/3/3/9/13396852/gijoe-1982-1985-2d-logo-revised_orig.jpg"
          break;
        case 'dec':
          cartoonImage = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/34a309aa-ad3b-4301-bcf6-9ce22eeb1a1e/dfevf5-b24f5deb-f8cd-4f06-b538-bb7f86877577.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM0YTMwOWFhLWFkM2ItNDMwMS1iY2Y2LTljZTIyZWViMWExZVwvZGZldmY1LWIyNGY1ZGViLWY4Y2QtNGYwNi1iNTM4LWJiN2Y4Njg3NzU3Ny5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.I1AziXJgj9IxIOlnIND8-qnKKD5SxW4cAgnyAEb-uSg";
          break;
        default : 
        //   cartoonImage = 'https://media.giphy.com/media/g7GKcSzwQfugw/giphy.gif';

      }

      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        month: params['month'],
        cartoon: cartoonImage,
      }
      res.end(JSON.stringify(objToJson));
    }
  }
  if (page == '/css/style.css'){
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

