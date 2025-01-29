import mysql from 'mysql2/promise';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000; 

const connection = await mysql.createConnection({ 
    host: '127.0.0.1',
    database: 'dm',
    user: 'root',
    password: 'root'
});