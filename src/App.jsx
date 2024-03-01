import { useState } from 'react';
import data from './data';
import Tours from './components/Tours';


function App() {

  const[tours,setTours] = useState(data);
  // console.log(tours)

  function removeTour(id){
    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  }

  function resetHandler(){
    setTours(data);
  }

  if(tours.length === 0){
    return(
      <div className=' container border border-black w-full h-full flex items-center justify-center'>
        <div className='w-[30%] h-[15%] flex flex-col justify-center items-center'>
          <h2 className='flex text-3xl font-bold justify-center items-center'>No Tours Left</h2>
          <button onClick={resetHandler} className="text-center bg-slate-800 text-gray-300 rounded-xl py-4 mt-6 w-[40%] text-2xl">
            RESET
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#f5f5f5]'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App;
