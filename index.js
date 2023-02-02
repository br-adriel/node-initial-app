const fs = require('fs/promises');
const http = require('http');

const HOST = 'localhost';
const PORT = 3000;

function sendPage(response, content) {
  response.setHeader('Content-Type', 'text/html');
  response.writeHead(200);
  response.end(content);
}

const app = http.createServer(async (req, res) => {
  const url = req.url;
  switch (url) {
    case '/':
      fs.readFile(__dirname + '/pages/index.html').then((content) => {
        sendPage(res, content);
      });
      break;
    case '/contact':
      fs.readFile(__dirname + '/pages/contact.html').then((content) => {
        sendPage(res, content);
      });
      break;
    case '/about':
      fs.readFile(__dirname + '/pages/about.html').then((content) => {
        sendPage(res, content);
      });
      break;
    default:
      fs.readFile(__dirname + '/pages/404.html').then((content) => {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(404);
        res.end(content);
      });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`SERVER RUNNING => http://${HOST}:${PORT}`);
});
