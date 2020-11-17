const appRoot = require('app-root-path');
const path = require('path');

// path names to files
const projectRoot = appRoot.path;
const viewsDir = path.join(projectRoot,'/public/views/');

module.exports = function (app) {

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile(viewsDir + 'index.html'); // load our public/index.html file
    });


}