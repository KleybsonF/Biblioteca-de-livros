import { addBook } from "@/app/bd/actions"

const AddBookPage = () => {

  return (
    <div className="container bg-gray-800 p-5 rounded-md mt-5">
      <form action={addBook} className="form flex flex-wrap justify-between">
        <input type="text" name="titulo" required placeholder="Título" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <input type="text" name="genero" required placeholder="Gênero" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <input type="text" name="autor" required placeholder="Autor" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <textarea name="descricao" rows={6} placeholder="Descrição" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-full`}></textarea>

        <button type="submit" className="border-none bg-teal-500 p-7 text-white rounded-md w-full cursor-pointer">Salvar</button>
      </form>
    </div>
  )
}

export default AddBookPage