const jwt = require('jwt-simple');



function createJwtToken (userInfo) {
    const payload = {name: 'Santiago'};
    const secret = 'xxx'
    let token = jwt.encode(payload, secret);
    
    return token
    
} 
//console.log(createJwtToken())

module.exports = {createJwtToken}