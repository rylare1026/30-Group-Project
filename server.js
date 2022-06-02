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
          cartoonImage = "images/super_friends.jpg";
          break;
        case 'feb':
          cartoonImage = "images/ninja_turtles.jpg";
          break;
        case 'mar':
          cartoonImage = "images/darkwing_duck.png";
          break;
        case 'apr':
          cartoonImage = "images/he-man.jpg"
          break;
        case 'may':
          cartoonImage = "images/animaniacs.png"
          break;
        case 'jun':
          cartoonImage = "images/cat_dog.png"
          break;
        case 'jul':
          cartoonImage = "images/the_tick.jpg"
          break;
        case 'aug':
          cartoonImage = "images/garfield.webp"
          break;
        case 'sep':
          cartoonImage = "images/pinky_and_the_brain.png"
          break;
        case 'oct':
          cartoonImage = "images/tom_and_jerry.webp";
          break;
        case 'nov':
          cartoonImage = "images/gi_joe.jpg"
          break;
        case 'dec':
          cartoonImage = "images/thundercats.jpg";
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
  
  //set content type based on the extension
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
});

//setup listen and allow port assignment.
const PORT = process.env.PORT || 8000;
server.listen(PORT, ()=> console.log(`
              o
              |    o
              |   /
              |  / 
            .-| /.
             (|/ )
    .==================.
    | .--------------. |
    | |--.__.--.__.--| |
    | |--.__.--.__.--| |
    | |--.__.--.__.--| |
    | |--.__.--.__.--| |
    | |--.__.--.__.--| |
    | '--------------'o|
    | O O  """""""    o|
    '=================='
Turning on the tv to port ${PORT}...
`))


