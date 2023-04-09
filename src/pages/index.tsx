import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps, NextPage } from 'next'

interface HomeProps {
  show: any
}

const Home: NextPage<HomeProps> = ({show}) => {
  return (
    <>
      <Head>
        <title>Make Me Faster</title>
        <meta name="description" content="Demonstrating edge caching with a custom next.js server and getServerSideProps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1>{show.name}</h1>

        {// eslint-disable-next-line @next/next/no-img-element
        <img alt="" src={show.image.medium} />
        }
        <div className={styles.description} dangerouslySetInnerHTML={{__html: show.summary}}>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=blake%27s%7`)
  const data = (await response.json())[0]

  // Sit and wait for 5 seconds
  await new Promise(resolve => setTimeout(resolve, 5000))

  return {
    props: { ...data },
  }
}

export default Home
