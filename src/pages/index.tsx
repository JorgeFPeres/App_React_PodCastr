//SPA (single page application) ---------------
//Essa estratégia não indexa no google

//  useEffect(() => {
//    fetch('http://localhost:3333/episodes')
//      .then((response) => response.json())
//      .then((data) => console.log(data))
//  }, [])

//SSR (Server-side rendering) -----------------
// A primeira chamada é feita pelo Next(servidor Node q esta rodando),
// executa toda vez que alguém entra na aplicacao.

// export default function Home(props) {
//   return <h1>Index</h1>
// }

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()
//   return {
//     props: {
//       episodes: data,
//     },
//   }
// }

//SSG (Static Site Generetor) ------------------
// Gera um versão estática, um html puro, que é servido para todas as pessoas, por um tempo pré determinado pelo revalidate(segundos).

export default function Home(props) {
  return <h1>Index</h1>
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
