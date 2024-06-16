import Image from "next/image"
import Link from "next/link"

const Homepage = () => {
  return (
    // <div className="container w-full h-screen flex items-center justify-center">
    //   <form action="" className="form flex flex-col bg-gray-800 p-12 w-[500px] h-[500px] justify-center items-center gap-7 rounded-md">
    //     <h1>Login</h1>
    //     <input type="text" name="username" placeholder="Username" className=" w-full p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md" />
    //     <input type="password" name="password" placeholder="Password" className="w-full p-5 mb-5 border-2 border-solid border-gray-600 bg-gray-900 text-white rounded-md" />
    //     <button className="w-full p-5 border-none rounded-md text-white bg-teal-500">Login</button>
    //   </form>
    // </div>

    <div>
      <header className="header bg-white w-100 h-[113px] flex items-center justify-between ">
        <img src="/logo-wiki.png" alt="Logo Wiki" className="w-[113px] h-[113px]" />
        <Link className="mr-6 no-underline" href={'/dashboard/book'}>Página Inicial</Link>
      </header>

      <section className="justify-center pt-20 bg-[#292d33] h-[830px] hidden lg:flex">
        <div className="relative">
          <Image src="/library.jpg" alt="Livros em estatnte" width={634} height={416}></Image>
          <Image src="/girl.jpg" alt="Livros em estatnte" className="absolute girl" width={454} height={501}></Image>
          <div className="wiki absolute bg-[#478ac9] p-6 md:p-8 xl:p-10 ">
            <h1 className="font-bold pb-6 text-4x1 text-2xl md:text-3xl xl:text-4xl">InfoLivros</h1>
            <p className="leading-7 pb-6 italic text-justify">
              Bem-vindo à InfoLivros, o seu portal definitivo para explorar o universo dos livros! Aqui, você encontrará uma descrição detalhada de cada obra cadastrada, desde clássicos da literatura até lançamentos contemporâneos. Nossa missão é fornecer informações abrangentes sobre cada livro, ajudando você a descobrir novos títulos, entender suas tramas e conhecer mais sobre seus autores. Navegue por nossa coleção e mergulhe no mundo fascinante da leitura!
            </p>
            <Link className="text-white font-bold text:1xl md:text-2xl xl:text-2xl" href={'/dashboard/book'}>ACESSE AGORA!</Link>
          </div>
        </div>
      </section>

      <section className="justify-center p-20 bg-[#292d33] lg:hidden flex">
        <div className="bg-[#478ac9] p-6 md:p-8 xl:p-10 ">
          <h1 className="font-bold pb-6 text-4x1 text-2xl md:text-3xl xl:text-4xl">InfoLivros</h1>
          <p className="leading-7 pb-6 italic text-justify">
            Bem-vindo à InfoLivros, o seu portal definitivo para explorar o universo dos livros! Aqui, você encontrará uma descrição detalhada de cada obra cadastrada, desde clássicos da literatura até lançamentos contemporâneos. Nossa missão é fornecer informações abrangentes sobre cada livro, ajudando você a descobrir novos títulos, entender suas tramas e conhecer mais sobre seus autores. Navegue por nossa coleção e mergulhe no mundo fascinante da leitura!
          </p>
          <Link className="text-white font-bold text:1xl md:text-2xl xl:text-2xl" href={'/dashboard/book'}>ACESSE AGORA!</Link>
        </div>
      </section>

      <section className="flex justify-center bg-[url('/bg-books.jpg')] bg-cover">
        <div className="w-[80%] flex flex-col items-center px-4 md:px-8 xl:px-20">

          <div className="flex flex-col text-center pt-32">
            <div className="bg-white h-2 w-full "></div>
            <h1 className="font-bold pt-10 pb-10 text-3xl md:text-5xl xl:text-7xl">
              AQUI VOCÊ É LIVRE!
            </h1>
            <div className="bg-white h-2 w-full"></div>
            <b className="text-1xl md:text-2xl xl:text-3xl pb-6 pt-16">
              Não achou nada sobre seu livro favorito?
            </b>
            <p className="text-1xl md:text-2xl xl:text-3xl pb-6">
              Nos ajude a fazer novas pessoas a conhecerem ele!
            </p>
            <small className="text-1xl md:text-2xl xl:text-3xl pb-6">
              Você é livre para editar e adicionar livros a nossa biblioteca!
            </small>
          </div>

          <div className="bg-white h-2 w-full">

            <div className="flex flex-col text-center pt-10">
              <b className="text-1xl md:text-2xl xl:text-2xl">
                Na nossa plataforma você irá encontrar essas informações sobre livros:
              </b>
            </div>

          </div>
          <div className="flex items-center pt-28">
            <article className="w-20 flex justify-center flex-col items-center mx-7">
              <img src="\caixinha.png" alt="" className="w-[100%]" />
              <p className="text-center text-1xl xl:text-2xl">TÍTULO</p>
            </article>
            <article className="w-20 flex justify-center flex-col items-center mx-7">
              <img src="\caixinha.png" alt="" className="w-[100%]" />
              <p className="text-center text-1xl xl:text-2xl">GÊNERO</p>
            </article>
            <article className="w-20 flex justify-center flex-col items-center mx-7">
              <img src="\caixinha.png" alt="" className="w-[100%]" />
              <p className="text-center text-1xl xl:text-2xl">AUTOR</p>
            </article>
            <article className="w-20 flex justify-center flex-col items-center mx-7">
              <img src="\caixinha.png" alt="" className="w-[100%]" />
              <p className="text-center text-1xl xl:text-2xl">DESCRIÇÃO</p>
            </article>
          </div>
          <div className="mt-10"></div>
          <div className="bg-white h-2 w-full"></div>
          <div className="mb-32"></div>
        </div>


      </section>
      <section className="flex justify-center bg-[url('/livro.jpg')] bg-cover">

        <div className="w-[80%] flex flex-col items-center px-4 md:px-8 xl:px-20">
          <h1 className="font-bold pt-72 pb-20 text-center text-3xl md:text-5xl xl:text-7xl">
            O QUE ESTÁ ESPERANDO??
          </h1>
          <p className="w-[60%] pb-20 text-center text-1xl md:text-2xl xl:text-3xl">
            ACESSE AGORA MESMO A NOSSA PLATAFORMA UTILIZANDO O BOTÃO ABAIXO!
          </p>
          <div className="bg-[#db545a] p-5">
            <Link className="text-white font-bold text-xl no-underline text-1xl md:text-2xl xl:text-3xl" href={'/dashboard/book'}>VAMOS COMEÇAR!</Link>
          </div>
          <div className="pb-72"></div>
        </div>
      </section>

      <section className="header bg-[#333333] w-100 h-[113px] flex align-middle items-center">
        <div className="w-[100%] flex flex-col px-4 md:px-8 xl:px-20">
          <Image alt='' src={'/logo-unp-branco.svg'} width={130} height={29}></Image>
          <p className="text-1xl m-0 mt-2">
            Projetos e Processos de TI
          </p>
        </div>
      </section>

    </div>

  )
}

export default Homepage