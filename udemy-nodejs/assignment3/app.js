/* 
- Server on port 3000
- Two routes: '/', '/users'
- Return greeting on '/'
- Return a list of dummy users (in html format)
- Add a form with a "username" <input> to the "/" page and submit a POST
request to "/create-user" upon a button click
- Add the "/create-user" route and parse the incoming data (i.e. the
username) and simply log it to the console
 */

const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);