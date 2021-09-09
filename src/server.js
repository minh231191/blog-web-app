//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const whitelist = ['https://minhhn-blog.herokuapp.com'];

const corsOptions = {
  origin: function (origin, callback) {
      if (!origin) {
          return callback(null, true);
      }
      console.log('Origin: ' + origin);
      if (whitelist.indexOf(origin) === -1) {
          var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
      }
      return callback(null, true);
  }
}

app.use(cors(corsOptions));

// Serve only the static files form the dist directory
app.use(express.static('./dist/minhhn-blog-web-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/minhhn-blog-web-app/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
