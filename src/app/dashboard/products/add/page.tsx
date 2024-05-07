const AddProductPage = () => {
  const category = [
    { value: 'Kitchen'},
    { value: 'Phone'},
    { value: 'Computer'}
  ]
  return (
    <div className="container bg-gray-800 p-5 rounded-md mt-5">
      <form action="" className="form flex flex-wrap justify-between">
        <input type="text" name="title" required placeholder="Title" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />

        <select name="cat" id="cat" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md  w-[45%] select`}>
          <option value="general" className="p-4">Choose a Category</option>
          {category.map((cat, i) => (
            <option key={i} value={cat.value}>{cat.value}</option>
          ))}
        </select>

        <input type="number" name="price" placeholder="Price" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <input type="number" name="stock" placeholder="Stock" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <input type="text" name="color" placeholder="Color" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <input type="text" name="size" placeholder="Size" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <textarea name="desc" rows={16} placeholder="Description" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-full`}></textarea>

        <button type="submit" className="border-none bg-teal-500 p-7 text-white rounded-md w-full cursor-pointer">Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage