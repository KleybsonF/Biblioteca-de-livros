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

    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error("MongoDB URI not provided in environment variables");
    }

    const db = await mongoose.connect(mongoURI);
    connection.isConnected = db.connection.readyState;
  } catch (error: any) {
    throw new Error(error);
  }
}
