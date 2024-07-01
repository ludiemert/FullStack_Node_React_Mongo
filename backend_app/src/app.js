import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import routes from './routes.js';

class App {
  constructor() {
    this.server = express();
    
    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json());
  }

  database() {
    const dbURI = "mongodb+srv://totalzero:Julia202019@cluster0.qnkdh8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    
    mongoose.connect(dbURI)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB', err);
      });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
