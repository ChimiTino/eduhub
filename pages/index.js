import Head from 'next/head'
import styles from '../styles/Home.module.css'



export const getStaticProps = async () =>{
  const res = await fetch('https://ngnfffasfd.herokuapp.com/edu_cntr');
  const data = await res.json();

  return{
    props: {school: data}
  }
}



export default function Home({school}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Edu.Hub</title>  
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

{school.map((item)=>{
  return(
  <>
  
    <a href = {'/grade/'+ item.id} >
    <h1 >{item.subject}</h1></a>
    </>
  )
  
})}
   </div>   
  )
}
