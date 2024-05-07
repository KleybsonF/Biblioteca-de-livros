import { addUser } from "@/app/bd/actions"

const AddUserPage = () => {

  return (
    <div className="container bg-gray-800 p-5 rounded-md mt-5">
      <form action={addUser} className="form flex flex-wrap justify-between">
        <input type="text" name="username" required placeholder="Username" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <input type="emial" name="email" required placeholder="E-mail" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <input type="password" name="password" autoComplete="on" required placeholder="Password" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />
        <input type="text" name="phone" placeholder="Phone" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-[45%]`} />

        <select defaultValue={'false'} name="isAdmin" id="isAdmin" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md  w-[45%] select`}>
          <option value="false" disabled>Is Admin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select defaultValue={'true'} name="isActive" id="isActive" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md  w-[45%] select`}>
          <option value="true" disabled>Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <textarea name="address" rows={6} placeholder="Address" className={`p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md w-full`}></textarea>

        <button type="submit" className="border-none bg-teal-500 p-7 text-white rounded-md w-full cursor-pointer">Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage