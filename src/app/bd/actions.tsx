'use server'
import { revalidatePath } from "next/cache"
import { UserModel } from "./models/user"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt";
import { connect } from "./conn";
import { UserInterface } from "../interfaces/user.interface";
import { BookModel } from "./models/livro";
import { BookInterface } from "../interfaces/book.interface";

export const addUser = async (formData: any) => {
  const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)

  try {
    connect()
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive
    })
    await newUser.save()

  } catch (error) {
    console.error({error})
    throw new Error('Failed to create user!')
  }
  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const addBook = async (formData: any) => {
  const { titulo, genero, autor, descricao } = Object.fromEntries(formData)

  try {
    connect()

    const newBook = new BookModel({
      titulo,
      genero,
      autor,
      descricao
    })
    await newBook.save()

  } catch (error) {
    console.error({error})
    throw new Error('Failed to create book!')
  }
  revalidatePath('/dashboard/book')
  redirect('/dashboard/book')
}

export const delUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData)

  try {
    connect()
    await UserModel.findByIdAndDelete(id)
  } catch (error) {
    console.error({error})
    throw new Error('Failed to delete user!')
  }
  revalidatePath('/dashboard/users')
}

export const delBook = async (formData: any) => {
  const { id } = Object.fromEntries(formData)

  try {
    connect()
    await UserModel.findByIdAndDelete(id)
  } catch (error) {
    console.error({error})
    throw new Error('Failed to delete book!')
  }
  revalidatePath('/dashboard/book')
}

export const putUser = async (formData: any) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)
  console.log({ id, username, email, password, phone, address, isAdmin, isActive })

  try {
    connect()

    const updateFields: UserInterface = { username, email, password, phone, address, isAdmin, isActive }

    Object.keys(updateFields).map(input => (input==="" || undefined) && delete updateFields[input])

    console.log({id, updateFields})
    await UserModel.findByIdAndUpdate(id, updateFields)

  } catch (error) {
    console.error({error})
    throw new Error('Failed to create user!')
  }
  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const putBook = async (formData: any) => {
  const { id, titulo, genero, autor, descricao } = Object.fromEntries(formData)
  console.log({ titulo, genero, autor, descricao })

  try {
    connect()

    const updateFields: BookInterface = { id, titulo, genero, autor, descricao }

    Object.keys(updateFields).map(input => (input==="" || undefined) && delete updateFields[input])

    await BookModel.findByIdAndUpdate(id, updateFields)

  } catch (error) {
    console.error({error})
    throw new Error('Failed to create book!')
  }
  revalidatePath('/dashboard/book')
  redirect('/dashboard/book')
}