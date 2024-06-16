import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

interface ConnectionStatus {
  isConnected?: number;
}

export const connect = async () => {
  const connection: ConnectionStatus = {}
  try {
    if (connection.isConnected) return;

    const mongoURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@biblioteca.9yem8a0.mongodb.net/biblioteca?retryWrites=true&w=majority&appName=biblioteca`;
    if (!mongoURI) {
      throw new Error("MongoDB URI not provided in environment variables");
    }

    const db = await mongoose.connect(mongoURI);
    connection.isConnected = db.connection.readyState;
  } catch (error: any) {
    throw new Error(error);
  }
}
