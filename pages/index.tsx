import Head from 'next/head'
import Image from 'next/image'
import VideoCard from '../components/VideoCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <VideoCard name={"tesouro perdido"} description="descrição do filme" />
      <h1>OK!!</h1>
    </>

  )
}
