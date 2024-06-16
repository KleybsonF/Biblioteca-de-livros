import { putBook } from '@/app/bd/actions'
import { fetchBook } from '@/app/bd/data'
import React from 'react'

const SimgleBookPage = async ({params}: {
  params: {id: string}
}) => {
  const { id } = params;
  const u = await fetchBook(id)
  return (
    <div className="container flex gap-12 mt-5">
      
      <div className="form-container flex-[3] bg-gray-800 p-5 rounded-md">
        <form action={putBook} className="form flex flex-col">
          <input type="hidden" name="id" value={id} />
          <label className='text-xs'>Título</label>
          <input type="text" name='titulo' autoComplete="off" defaultValue={u.titulo} className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />
          
          <label className='text-xs'>Gênero</label>
          <input type="text" name='genero' autoComplete="off" defaultValue={u.genero} className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />
          
          <label className='text-xs'>Autor</label>
          <input type="text" name='autor' autoComplete="off" defaultValue={u.autor} className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />

          <label className='text-xs'>Descrição</label>
          <textarea name="descricao" rows={5} defaultValue={u.descricao} className={`p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md`}></textarea>

          <button className="w-full p-5 border-none bg-teal-500 rounded-md text-white cursor-pointer mt-5">Atualizar</button>
        </form>
      </div>
    </div>
  )
}

export default SimgleBookPage