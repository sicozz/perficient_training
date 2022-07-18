const GREETINGS = "\
<p>Greetings from the space my beloved alien!!<br>Please let us know your\
name</p>\
<form action='/create-user' method='POST'>\
<input type='text' name='username'>\
<button type='submit'>Enter the club</button>\
</form>"
const THANKS = "Thanks for becoming a member of the club: ";

const usersDb = [ "Anakin Skywalker", "Obi Wan Kennoby" ];

const htmlComposer = body => `<html>
    <head><title>Outer Space</title></head>\
    <body>
        ${body}
    </body>
</html>`

const responseHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    res.setHeader('Content-Type', 'text/html');
    if (url === "/") {
        res.write(htmlComposer(GREETINGS));
        res.end();
    } else if (url === "/users" && method === "GET") {
        const userList = `<p>Members:</p><ul>${usersDb.map(user =>
            `<li>${user}</li>`)}<ul>`
        res.write(htmlComposer(userList));
        res.end()
    } else if (url === "/create-user" && method === "POST") {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split("=")[1];
            usersDb.push(username);
            res.write(`${THANKS} ${username}`);
            res.end();
        })
    } else {
        res.statusCode = 404;
        res.write('Site not found');
        res.end();
    }
};

module.exports = responseHandler;