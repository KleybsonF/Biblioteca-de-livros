const Page = () => {

  const handleForm = async (formData: any) => {
    'use server'
    const name = formData.get('name')
    console.log(name)
  }

  return (
    <div>
      <form action={handleForm}>
        <input name="name" type="text"/>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Page
