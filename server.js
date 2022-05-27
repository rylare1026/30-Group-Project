const http = require('http');
const fs = require('fs')
const url = require('url');
const path = require('path')
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log('page',page);

  //// HANDLE API ///////////////////////////
  if(page === '/api'){
    if('month' in params){
      //assign cartoon image based on month
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
          cartoonImage = "images/december.jpg";
          break;
        default : 
          cartoonImage = 'images/gotLost.webp';
      }
  
      //send json content
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        month: params['month'],
        cartoon: `public/${cartoonImage}`,
      }
      res.end(JSON.stringify(objToJson));
    }
  }
  //// HANDLE PAGE NAVIGATION ///////////////////////////
  let contentType;
  let extName = path.extname(req.url);
  let filePath = path.join(
    __dirname, 
    req.url === '/' ? 'index.html' : req.url
  );

  console.log('filepath',filePath)
   
  //set content type
  switch(extName){
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json'
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.webp':
      contentType = 'image/webp';
      break;
    default:
      contentType = 'text/html';
  }


  fs.readFile(filePath, (err,data) => {
    //Check if any errors
    if(err){
      //if page not found, display 404
      if(err.code === 'ENOENT') {
        fs.readFile('404.html', function(err, data) {
          if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
          }
          res.write(data);
          res.end();
        });
      } else {
        //Some kind of server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`)
      }
    } 

    //If no errors, write appropriate content
    if(!err){
      res.writeHead(200, {'Content-Type': contentType});
      res.end(data, 'utf-8');
    }
  })



  // if (page == '/') {
  //   fs.readFile('index.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/api') {
  //   console.log('params', params)

  //   if('month' in params){
      
  //     let cartoonImage = null;

  //     switch(params['month'].toLowerCase()) {
  //       case 'jan':
  //         cartoonImage = "https://static.wikia.nocookie.net/logocomics/images/1/10/Super_friends_logo.gif";
  //         break;
  //       case 'feb':
  //         cartoonImage = "https://1000logos.net/wp-content/uploads/2018/11/Ninja-Turtles-logo.jpg";
  //         break;
  //       case 'mar':
  //         cartoonImage = "https://www.cartoonbucket.com/wp-content/uploads/2017/03/Image-of-Darkwing-Duck.png";
  //         break;
  //       case 'apr':
  //         cartoonImage = "https://m.media-amazon.com/images/M/MV5BODgyYzRhNzAtMTJlNC00OTM0LWI3M2ItNzZjYzYxZmJiOWIyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_.jpg"
  //         break;
  //       case 'may':
  //         cartoonImage = "https://upload.wikimedia.org/wikipedia/en/8/8a/Animaniacs.png"
  //         break;
  //       case 'jun':
  //         cartoonImage = "https://static.wikia.nocookie.net/logopedia/images/4/42/CatDog.svg/revision/latest?cb=20200719151641"
  //         break;
  //       case 'jul':
  //         cartoonImage = "https://sbocmedia.com/wp-content/uploads/2016/07/The-Tick-Logo.jpg"
  //         break;
  //       case 'aug':
  //         cartoonImage = "https://static.wikia.nocookie.net/international-entertainment-project/images/8/8d/Garfield_and_Friends_-_logo_%28English%29.png/revision/latest?cb=20181225223332"
  //         break;
  //       case 'sep':
  //         cartoonImage = "https://upload.wikimedia.org/wikipedia/en/a/a6/Pinky_and_The_Brain_%28logo%29.png"
  //         break;
  //       case 'oct':
  //         cartoonImage = "https://static.wikia.nocookie.net/logo-timeline/images/8/85/TJ_LOGO.jpg/revision/latest/scale-to-width-down/220?cb=20160320180558";
  //         break;
  //       case 'nov':
  //         cartoonImage = "https://www.3djoes.com/uploads/1/3/3/9/13396852/gijoe-1982-1985-2d-logo-revised_orig.jpg"
  //         break;
  //       case 'dec':
  //         cartoonImage = "public/images/december.jpg";
  //         break;
  //       default : 
  //         cartoonImage = 'public/images/gotLost.webp';

  //     }

  //     res.writeHead(200, {'Content-Type': 'application/json'});
  //     const objToJson = {
  //       month: params['month'],
  //       cartoon: cartoonImage,
  //     }
  //     res.end(JSON.stringify(objToJson));
  //   }
  // }
  // if (page == '/public/css/style.css'){
  //   fs.readFile('public/css/style.css', function(err, data) {
  //     res.write(data);
  //     res.end();
  //   });
  // }else if (page == '/public/js/main.js'){
  //   fs.readFile('public/js/main.js', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/javascript'});
  //     res.write(data);
  //     res.end();
  //   });
  // }else{
    // fs.readFile('404.html', function(err, data) {
    //   if (err) {
    //       console.log('Something went wrong...');
    //       console.dir(err);
    //       return;
    //   }
    //   res.write(data);
    //   res.end();
    // });
  // }
});

//setup listen and allow port assignment.
const PORT = process.env.PORT || 8000;
server.listen(PORT, ()=> console.log(`Running on port ${PORT}...`))


