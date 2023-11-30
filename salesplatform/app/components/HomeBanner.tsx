import React from 'react';
import Image from 'next/image';
import { Nunito_Sans, Orbitron } from 'next/font/google';
import { Rating } from '@mui/material';
import users from '../../public/users.png';
import phoneUser from '../../public/phoneuser.jpg';
import SearchBar from './SearchBar';

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500"] });
const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400"] });


const HomeBanner = () => {

  return (
    // <div className='relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8'>
    //     <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly'>
    //         <div className='mb-8 md:mb-0 text-center'>
    //             <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Summer Sale</h1>
    //             <p className='text-lg md:text-xl text-white mb-2'>Enjoy discounts on selected items</p>
    //             <p className='text-2xl md:text-5xl text-yellow-400 font-bold'>GET 50% OFF</p>
    //         </div>
    //         <div className='w-1/3 relative aspect-video'>
    //             <Image src='/banner-image.png' alt='Banner Image' className='object-contain' fill/>
    //         </div>
    //     </div>
    // </div>
    <div className='grid bg-[#EDEEF2] mb-10'>
      <div className='grid-cols-7 grid'>
        <div className='col-span-4 border-t p-8 border-slate-950'>
            <div className='flex mb-4'>
              <div className={`${orbitron.className} text-6xl text-slate-950`}>
              <span className='flex justify-end'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>

             </span>
                ELEVATE <br /> YOUR SAVINGS <br /> WITH <br /> OUR <br /> PLATFORM
              </div>
        

            
            </div>
            <div>
              <SearchBar/>
            </div>
        </div>
        <div className='col-span-3 border h-full border-slate-950'>
          <Image alt='customer' src={phoneUser}/>
        </div>
      </div>
      <div className='grid grid-cols-7'>

        <div className='col-span-2 border border-slate-950 p-8 flex-col bg-slate-950 text-white'>
            <div className='flex justify-between mb-10'>
              <div className={`${orbitron.className}`}>CUSTOMERS</div>
              <div className=''>/2023</div>
            </div>
            <div className={`flex ${orbitron.className}`}>
              <div className='md:text-6xl font-bold'>10000</div>
              <div className='text-[#1DB954] font-extrabold text-4xl'>+</div>
            </div>

        </div>
        <div className='col-span-2 p-8 border border-slate-950  bg-[#35B084] text-white'>
            <div className='flex mb-10 justify-between'>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>

              </div>
              <div className='border-white border rounded-xl py-1 px-2 text-xs'>BRANDS</div>
            </div>
            <div className='flex justify-between'>
              <div className={`text-white text-lg ${nunito.className}`}>Easily track <br />your favorite brands</div>
              <div className='flex items-end'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
              </svg>
              </div>
            </div>
        </div>
        <div className='col-span-3 p-8 bg-[#EDEEF2]'>
          <div className='flex justify-between mb-10'>
            <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 text-slate-950">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
            </div>
            <div className='flex items-center text-slate-950 border text-xs border-slate-950 rounded-xl py-2 px-2'>
               Rating:
               <Rating value={5} readOnly size='small'/>
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <Image width={100} src={users}/>
            </div>
            <div className='text-sm text-slate-950'>Helping customers find the best prices <br /> available in the market</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner