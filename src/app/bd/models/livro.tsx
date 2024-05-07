import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20
  },
  genero: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
  },
}, { timestamps: true });

export const BookModel = mongoose.models.Book || mongoose.model("Book", BookSchema)
