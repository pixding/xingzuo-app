var fs = require('fs');
var path = require('path');
var upload_post_img = path.join(path.dirname(__dirname), 'static/img');

exports.postUpload = function(req, res, next) {
    var host = req.headers.host;
    var file = req.files.file;
    if(file){
        var now = new Date();


        var ext = path.extname(file.name);
        var filename = dateFormat(now, "HHMMss") + Math.ceil(Math.random()*1000) + ext;
        var new_path = path.join(upload_post_img, filename);
        fs.rename(file.path, new_path, function(err) {
            if (err) {
                console.log("uploadERROR:"+err);
                return next;

            }
            var url = "/upload/static/img/"+filename;
            console.log(url);
        });

    }else{
        res.json({ error: 1, message: "出错了!" });
    }
};