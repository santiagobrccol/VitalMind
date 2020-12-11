const jwt = require('jwt-simple');
const SECRET = 'xxx'


const createJwtToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        userName: user.userName,
        email: user.email,
        level: user.level
    };

    return jwt.encode(payload, SECRET);
    
} 
//console.log(createJwtToken())

module.exports = {createJwtToken}