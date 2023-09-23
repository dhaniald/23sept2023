//1. Import area

// Import DefaultImport from 'some Library/someLocation'
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/component/Header';
import Main from '@/component/Main';
import Footer from '@/component/Footer';
import A from '@/component/UI/A';
 
 //2. Defenation Area
 function Home() {
  return (
  <> 

      
     <main>
      Home page
      <A msg="welcome to my first website"></A> 
      </main>
    
    </>
  )
}

//3. Export area
//3.1 Deault Export
export default Home;

