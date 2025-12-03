import { useState } from 'react'

import Card from './components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const App = () => {
  const familyImages = [
    {
      src: '/img/family.jpg',
    },
    {
      src: '/img/family2.JPG',
      position: 'object-[50%_36%]'
    },
    {
      src: '/img/family3.JPG'
    }
  ];

  const hobbyImages = [
    {
      src: '/img/hobby.JPEG'
    },
    {
      src: '/img/hobby2.png'
    },
    {
      src: '/img/hobby3.JPG',
      position: 'object-[50%_42%]'
    }
  ]

  const [isNutshellOpen, setIsNutshellOpen] = useState(false);
  const revealNutshell = () => {
    if (!isNutshellOpen) {
      setIsNutshellOpen(true);
    }
  }

  return (
    <main className="bg-black font-serif">
      <section className='header-container relative h-[120vh] overflow-hidden'>
        <h1 className='text-[3.5rem] text-white font-semibold animate-[spin_1s_linear_1] absolute left-[10%] top-1/2 -translate-y-1/2 transform scale-y-200'>About Richard Thomas</h1>
        <img src='/img/Richard-pfp.png' alt='a picture of Richard' className='absolute right-0 top-1/2 h-[120vh] w-auto -translate-y-1/2 translate-x-1/3' />
      </section>

      <section className="random-facts-page flex h-screen justify-around items-center">
        <div className="w-[40%] h-180 rounded-xl">
          <img src="/img/piano.jpg" className="h-175 rounded-xl" />
          <p className="text-white inline text-[0.8rem]">*fun fact: i took this pic</p>
        </div>
        <div className="max-w-2xl">
          <h2 className="mb-4 text-[2.8rem] font-semibold text-white transform scale-y-150">Random Facts.</h2>
          <p className="text-[1.5rem] text-white">I have a passion for volleyball, i'm the oldest sibling, my favorite number is 14, live a minimalistic lifestyle, i knew what i wanted to do around middle school age, i've played piano, my favorite dessert is tiramisu, favorite chocolate is kitkat, and i've broken 2 bones.</p>
        </div>
      </section>

      <section className="relative h-[40vh] flex justify-center items-center" >s
        <div className="relative w-[80vw]">
          <p onClick={revealNutshell} className={`absolute text-orange-400 font-semibold mb-5 tracking-widest z-2 transition-all duration-[1s] ease-linear ${
            isNutshellOpen ? 'left-0 -translate-x-0 -translate-y-10 cursor-default' : 'left-1/2 -translate-x-1/2 cursor-pointer scale-200'} hover:invert`}>me-in-a-nutshell</p>
          <p id="nutshellContent" className={`text-white text-[2.5rem] transition-all duration-500 ease-in-out ${isNutshellOpen ? 'opacity-100' : 'opacity-0'}`}>i'm a brother, son, volleyball player, gamer, and an aspiring software engineer</p>
        </div>
      </section>

      <section className="flex justify-evenly items-center pb-10">
        <div className="">
          <Card cardName="Family" images={familyImages} />
        </div>
        <div className="">
          <Card cardName="Hobbies" images={hobbyImages} />
        </div>
      </section>
      
      <footer className="flex justify-center items-center h-[10vh] border border-t-gray-800">
        <div className="text-white flex justify-around items-center w-[20%] relative">
          <p className="">Connect with me:</p>
          <div>
            <a href="https://instagram.com/king_richardthomas" target="_blank" > <FontAwesomeIcon className="text-[1.5rem] absolute top-0 left-7/12 transition duration-300 ease-in-out hover:scale-150" icon='fa-brands fa-instagram' /> </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/therealrichardthomas/" target='_blank'><FontAwesomeIcon className="text-[1.5rem] absolute top-0 left-9/12 transition duration-300 ease-in-out hover:scale-150" icon='fa-brands fa-linkedin' /> </a>
          </div>
        </div>
      </footer>
    </main>
  )
}


export default App;