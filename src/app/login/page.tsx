const LoginPage = () => {
  return (
    <div className="container w-full h-screen flex items-center justify-center">
      <form action="" className="form flex flex-col bg-gray-800 p-12 w-[500px] h-[500px] justify-center items-center gap-7 rounded-md">
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" className=" w-full p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md" />
        <input type="password" name="password" placeholder="Password" className="w-full p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md" />
        <button className="w-full p-5 border-none rounded-md text-white bg-teal-500">Login</button>
      </form>
    </div>
  )
}

export default LoginPage