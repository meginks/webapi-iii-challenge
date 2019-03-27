//MIDDLEWARE 

function capitalizeName(req, res, next) {
    req.body.capitalizedName = req.body.name.toUpperCase(); 
    next(); 
 }
 
 module.exports = { capitalizeName }; 