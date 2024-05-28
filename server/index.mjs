import express, { response } from 'express'
import dotenv from "dotenv";
import cors from 'cors'
import { createHandler } from 'graphql-http/lib/use/express';
import rootSchema from './schema/schema.mjs'

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.all('/graphql', createHandler({ schema: rootSchema }));


app.listen({ port: PORT});
console.log('Listening to port 4000');