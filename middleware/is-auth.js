const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
   const authHeader = req.get('Authorization')
   console.log(req.get('Access-Control-Allow-Origin'))
   if (!authHeader) {
      req.isAuth = false
      return next()
   }
   const token = authHeader.split(' ')[1]
   if (!token || token === '') {
      req.isAuth = false
      return next()
   }
   let decodedToken
   try {
      decodedToken = jwt.verify(token, process.env.SECRET_SUPER_KEY)
   } catch (err) {
      req.isAuth = false
      return next()
   }
   if (!decodedToken) {
      req.isAuth = false
      return next()
   }
   req.isAuth = true
   req.userId = decodedToken.userId
   next()
}
