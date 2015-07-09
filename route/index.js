var indexctr = require('../controller/indexctr');
var docctr = require('../controller/docctr');
function router(app){
    app.use('/', indexctr);      //index
    app.use('/doc', docctr);  //article
}
module.exports = router;