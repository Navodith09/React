import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("#2D3047")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      
      <div className='fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2'>
        
        <div className='flex flex-wrap justify-center 
        gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          
          <button onClick={() => setColor('#CF1259')} 
          className='outline-none rounded-xl px-5 py-1 
          shadow-lg text-white' style={{backgroundColor: '#CF1259'}}>
            Rose Red
          </button>
          
          <button onClick={() => setColor('#083D77')} 
          className='outline-none rounded-xl px-5 py-1 
          shadow-lg text-white' style={{backgroundColor: '#083D77'}}>
            Yale Blue
          </button>
          
          <button onClick={() => setColor('#44CF6C')} 
          className='outline-none rounded-xl px-5 py-1 
          shadow-lg text-white' style={{backgroundColor: '#44CF6C'}}>
            Emerald Green
          </button>
          
          <button onClick={() => setColor('#4E148C')} 
          className='outline-none rounded-xl px-5 py-1 
          shadow-lg text-white' style={{backgroundColor: '#4E148C'}}>
            Indigo
          </button>
          
          <button onClick={() => setColor('#E4B7E5')} 
          className='outline-none rounded-xl px-5 py-1 
          shadow-lg text-black' style={{backgroundColor: '#E4B7E5'}}>
            Lavender
          </button>
          
          <button onClick={() => setColor('#F78764')} 
          className='outline-none rounded-xl px-5 py-1 
          shadow-lg text-black' style={{backgroundColor: '#F78764'}}>
            Coral
          </button>

          <button onClick={() => setColor('#FFB30F')} 
          className='outline-none rounded-xl px-5 py-1 
          shadow-lg text-black' style={{backgroundColor: '#FFB30F'}}>
            Yellow
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
