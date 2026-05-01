import { useState } from 'react';
import './App.css';

function App() {
  const [count,setcount] = useState(0)
  return (
    <>
    <div className='flex'>
        <section className='grid grid-row gap-3 w-1/5 h-screen rounded-lg bg-orange-500 text-right p-6 '>
          <h4 className='border-white'>Burger</h4>
          <h4>Pizza</h4>
          <h4>Finger</h4>
          <h4>Cakes</h4>
          <h4>Machuruna</h4>
          <h4>Rice</h4>
          <h4>Popcorn</h4>
          <h4>Coffee</h4>
          <h4>Tea</h4>
          <h4>Soft Drink</h4>
        </section>
      <div className='grid grid-cols-5'>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_1.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_2.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>

        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_2.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>

        </div>
        <div className='bg-white w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_4.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>

        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_5.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_6.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_7.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_8.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_9.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_10.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_11.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_5.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_13.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_1.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_5.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_13.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_10.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_5.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_1.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
        <div className='bg-white  w-[200px] h-56 rounded-xl shadow-xl m-5 shadow-slate-400'>
          <img src='/image_7.png' className='w-52 h-36' alt='burger'></img>
          <hr/>
          <h4 className='text-center'>Cheeses Burger</h4>
          <p className='text-center font-serif font-semibold'>$122</p>
          <p className='text-center border-2 rounded-xl' onClick={()=>setcount(()=>(count+1))}>{count}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
