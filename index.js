const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const typeDefs = require('./graphql/schema/index')
const resolvers = require('./graphql/resolvers/index')
const isAuth = require('./middleware/is-auth')
require('dotenv').config()

const app = express()
app.use(cors())

app.use(isAuth)

const SES_EXP = +process.env.SESSION_EXPIRY

const store = new MongoDBStore({
   uri: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-jy47h.mongodb.net/${process.env.MONGO_DB}`,
   collection: process.env.SESSION_TABLE,
})

app.use(
   session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: SES_EXP },
      store: store,
   })
)

const server = new ApolloServer({
   typeDefs,
   resolvers,
   engine: {
      reportSchema: true,
   },
   context: (integrationContext) => ({
      req: integrationContext.req,
   }),
})
server.applyMiddleware({ app })

mongoose
   .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-jy47h.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
   )
   .then(() => {
      app.listen(4000, () => {
         console.log(`Server running at http://localhost:4000/graphql`)
      })
   })
   .catch((err) => {
      console.log(err)
   })
