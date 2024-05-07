import { putUser } from '@/app/bd/actions'
import { fetchUser } from '@/app/bd/data'
import Image from 'next/image'
import React from 'react'

const SimgleUserPage = async ({params}: {
  params: {id: string}
}) => {
  const { id } = params;
  const u = await fetchUser(id)

  return (
    <div className="container flex gap-12 mt-5">
      <div className="info-container flex-1 bg-gray-800 p-5 rounded-md font-bold h-max">
        <div className="img-container relative w-full h-[300px] rounded-md overflow-hidden text-white mb-5">
          <Image src={u.img || "/no-avatar.png"} alt="" fill sizes='100% 100%'/>
        </div>
        {u.username}
      </div>

      <div className="form-container flex-[3] bg-gray-800 p-5 rounded-md">
        <form action={putUser} className="form flex flex-col">
          <input type="hidden" name="id" value={id} />
          <label className='text-xs'>Username</label>
          <input type="text" name='username' autoComplete="off" defaultValue={u.username} className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />

          <label className='text-xs'>E-mail</label>
          <input type="email" name='email' defaultValue={u.email} className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />

          <label className='text-xs'>Password</label>
          <input type="password" name='password' autoComplete="on" defaultValue={u.password} className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />

          <label className='text-xs'>Phone</label>
          <input type="text" name='phone' defaultValue={u.phone} className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />

          <label className='text-xs'>Address</label>
          <textarea name="address" rows={1} defaultValue={u.address} className={`p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md`}></textarea>

          <label className='text-xs'>Is Admin?</label>
          <select name="isAdmin" id="isAdmin" className={`p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md`}>
            <option className="text-black" selected={u.isAdmin} value="true">Yes</option>
            <option className="text-black" selected={!u.isAdmin} value="false">No</option>
          </select>

          <label className='text-xs'>Is Active?</label>
          <select name="isActive"  id="isActive" className={`p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md`}>
            <option className="text-black" selected={u.isActive} value="true">Yes</option>
            <option className="text-black" selected={!u.isActive} value="false">No</option>
          </select>

          <button className="w-full p-5 border-none bg-teal-500 rounded-md text-white cursor-pointer mt-5">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SimgleUserPage