import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'
import Login from './components/Login'
import {getSession, useSession} from "next-auth/react"
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'

export default function Home() {
  const { data: session } = useSession()

  
  if (session) {
    return (
      <div>
        <Head>
          <title>Berteman</title>
        </Head>
        {/*Header*/}
        <Header/>

        <main className="flex bg-blue-50">
          {/*Sidebar*/}
          <Sidebar/>
          {/*Feed*/}
          <Feed/>
          {/*Widgets*/}
          <Widgets/>
        </main>
      </div>
    )
  }
  return <Login/>
}


export async function getServerSideProps(context){

  return {
    props: {
      session: await getSession(context),
      
    },
  }
}
