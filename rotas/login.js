//var mongoskin  = require('mongoskin');
module.exports = function (app) {
  app.post('/login/:collection', function(req, res, next) {
    var json = req.body;
req.collection.findOne(json, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
               res.json({
                    type: true,
                    data: user,
                    token: user.token
                });
            } else {
                res.json({
                    type: false,
                    data: "Incorrect email/password"
                });
            }
        }
    });
});
};
