import { connect } from "./conn";
import { BookModel } from "./models/livro";
import { ProductModel } from "./models/product";
import { UserModel } from "./models/user";

export const fetchUsers = async (res: {
  q: string,
  page: number,
  take: number,
}) => {
  const regex = new RegExp(res.q, 'i');
  try {
    connect();
    const count = await UserModel
    .find({username: {$regex: regex}})
    .countDocuments();

    const users = await UserModel
      .find({username: {$regex: regex}})
      .limit(res.take)
      .skip(res.take * (res.page-1));

    return {count, users};
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
}
export const fetchBooks = async (res: {
  q: string,
  page: number,
  take: number,
}) => {
  const regex = new RegExp(res.q, 'i');
  try {
    connect();
    const count = await BookModel
    .find({titulo: {$regex: regex}})
    .countDocuments();

    const books = await BookModel
      .find({titulo: {$regex: regex}})
      .limit(res.take)
      .skip(res.take * (res.page-1));

    return {count, books};
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
}

export const fetchUser = async (id: string) => {
  try {
    connect();
    const user = await UserModel.findById(id)
    return user
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
}

export const fetchProducts = async (res: {
  q: string,
  page: number,
  take: number,
}) => {
  const regex = new RegExp(res.q, 'i');
  try {
    connect();
    const count = await ProductModel
    .find({title: {$regex: regex}})
    .countDocuments();

    const products = await ProductModel
      .find({title: {$regex: regex}})
      .limit(res.take)
      .skip(res.take * (res.page-1));

    return {count, products};
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
}