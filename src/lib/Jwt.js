const { sign, verify } = require('jsonwebtoken');
 
const signUser = (payload) => sign(payload, "SECRET_KEY");
const verifyUser = (payload) => verify(payload, "SECRET_KEY");

module.exports = {
  signUser,
  verifyUser
}