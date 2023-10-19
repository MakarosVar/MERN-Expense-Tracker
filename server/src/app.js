import express from 'express';
import DBconnection from './config/DBconnection.js';

const app=express();
DBconnection();



export default app;