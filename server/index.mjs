import express, { response } from 'express'
import dotenv from "dotenv";
import cors from 'cors'
import { createHandler } from 'graphql-http';
import schema from './schema/schema.mjs';

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express()

app.all('/graphql', createHandler({ schema }));

app.use(cors())


// app.use('/graphql', graphqlHTTP({
//     schema: require('./graphql/schema'),
//     graphiql: true,
// }))

app.get("/", (request, response) =>{
    response.send("Welcome to Project Management GraphQL API!")
})



app.listen(PORT, ()=>{
    console.log(`Server Started ${PORT}`)
})