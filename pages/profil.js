import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'
import Login from './components/Login'
import {getSession, useSession} from "next-auth/react"
import Sidebar_profil from './components/Sidebar_profil'
import Feed from './components/Feed'
import ImagePosted from './components/ImagePosted'
import {
BriefcaseIcon
} from "@heroicons/react/solid"

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
          <Sidebar_profil/>
          {/*Feed*/}
          <ImagePosted/>
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

