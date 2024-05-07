import Image from 'next/image'
import React from 'react'

const SimgleProductPage = () => {
  return (
    <div className="container flex gap-12 mt-5">
      <div className="info-container flex-1 bg-gray-800 p-5 rounded-md font-bold h-max">
        <div className="img-container relative w-full h-[300px] rounded-md overflow-hidden text-white mb-5">
          <Image src="/no-product.jpg" alt="" fill/>
        </div>
        Item 1
      </div>

      <div className="form-container flex-[3] bg-gray-800 p-5 rounded-md">
        <form action="" className="form flex flex-col">
          <label className='text-xs'>Title</label>
          <input type="text" name='title' placeholder='Item 1' className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />

          <label className='text-xs'>Price</label>
          <input type="number" name='price' placeholder='56.47' className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />

          <label className='text-xs'>Stock</label>
          <input type="number" name='stock'  placeholder='54' className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />

          <label className='text-xs'>Color</label>
          <input type="text" name='color' placeholder='red' className='p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md' />

          <label className='text-xs'>Size</label>
          <textarea name="size" rows={1} placeholder='Natal/RN' className={`p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md`}></textarea>

          <label className='text-xs'>Category</label>
          <select name="category" id="category" className={`p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md`}>
            <option className="text-black" value="computer">Computer</option>
            <option className="text-black" value="kitchen">Kitchen</option>
            <option className="text-black" value="phone">Phone</option>
          </select>

          <label className='text-xs'>Description</label>
          <textarea name="description" rows={10} placeholder='Description Item 1' className={`p-5 my-2 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md`}></textarea>

          <button className="w-full p-5 border-none bg-teal-500 rounded-md text-white cursor-pointer mt-5">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SimgleProductPage