/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div>
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            width={250}
            height={250}
            alt='Logo'
            className='ml-4 mt-10 lg:ml-10 lg:w-[300px]'
          />
        </Link>
      </div>
      <section className="relative flex flex-col items-center text-white mt-[80px] mb-32 text-center lg:my-40">
        <div className="absolute top-22 left-1/2 w-[200px] h-[200px] bg-purple-500 rounded-full mix-blend-hard-light filter blur-2xl opacity-40  animate-blob lg:w-[400px] lg:h-[400px]"></div>
        <div className="absolute top-28 right-1/2 w-[200px] h-[200px] bg-sky-400 opacity-40-300 rounded-full mix-blend-hard-light filter blur-2xl opacity-40  animate-blob animation-delay-6000 lg:w-[400px] lg:h-[400px]"></div>
        <div className="absolute top-18 w-[200px] h-[200px] bg-indigo-400 rounded-full mix-blend-hard-light filter blur-2xl opacity-40  animate-blob animation-delay-4000 lg:w-[400px] lg:h-[400px]"></div>

        <div className='mx-auto'>
          <h1 className='text-[2.5rem] z-10 font-manrope mr-4 lg:text-[5rem]'>〝Leveraging the</h1>
          <h1 className='text-[2.5rem] z-10 ml-8 lg:text-[5rem]'> Beauty of Code〞</h1>
          <p className='text-2xl max-w-[1000px] z-10 mt-6 font-light mx-10 text-justify md:text-center lg:text-4xl lg:mt-14'>At TWC, we are passionate about transforming ideas into stunning and functional web experiences.</p>
        </div>
        <button className="mt-[80px] font-medium text-2xl w-[250px] h-[85px] shadow-xl bg-transparent text-white border rounded-[150px] hover:bg-white hover:text-black z-10 font-manrope lg:w-[299px] lg:h-[90px]"><Link href="/contact">Consult With Us</Link></button>


      </section>


      <section className="relative mx-auto flex flex-col items-center justify-center text-white mt-[80px] mb-32 lg:my-44">
        <h1 className='text-4xl mb-10 lg:text-5xl lg:mb-24'>Our Services</h1>
        <div className="flex flex-col justify-center gap-10 lg:flex-row lg:flex-wrap lg:gap-6">
          <div className='flex flex-col gap-10 lg:flex lg:gap-6'>
            <div className='shadow-[-1px_-1px_10px_1px] shadow-[#8665ff] rounded-lg w-[90vw] h-[150px] p-6 md:w-[75vw] md:text-center lg:rounded-3xl lg:w-[500px] lg:h-[400px] lg:flex lg:items-center lg:justify-center lg:shadow-none lg:border-2 lg:border-white lg:hover:border-none lg:hover:shadow-[-1px_-1px_10px_5px] lg:hover:shadow-[#00d722]'>
              <div>
                <h1 className="text-2xl font-bold mb-4 lg:font-light">E-commerce Solutions</h1>
                <p className='text-lg lg:text-3xl'>Elevate Your Business,<br />One Click At a Time</p>
              </div>
            </div>
            <div className='shadow-[-1px_-1px_10px_1px] shadow-[#00d722] rounded-lg w-[90vw] h-[150px] p-6 md:w-[75vw] md:text-center lg:rounded-3xl lg:w-[500px] lg:h-[200px] lg:flex lg:items-center lg:justify-center lg:shadow-none lg:border-2 lg:border-white lg:hover:border-none lg:hover:shadow-[-1px_-1px_10px_5px] lg:hover:shadow-[#ff6b00]'>
              <div>
                <h1 className="text-2xl font-bold mb-4 lg:font-light">Backend Bridges</h1>
                <p className='text-lg lg:text-3xl'>Behind the Scenes</p>
              </div>

 
            </div>
          </div>
          <div className='flex flex-col gap-10 lg:flex lg:gap-6'>
            <div className='shadow-[-1px_-1px_10px_1px] shadow-[#ff1100] rounded-lg w-[90vw] h-[150px] p-6 md:w-[75vw] md:text-center lg:rounded-3xl lg:w-[500px] lg:h-[200px] lg:flex lg:items-center lg:justify-center lg:shadow-none lg:border-2 lg:border-white lg:hover:border-none lg:hover:shadow-[-1px_-1px_10px_5px] lg:hover:shadow-[#ed52cb]'>
              <div>
                <h1 className="text-2xl font-bold mb-4 lg:font-light">UI / UX Designs</h1>
                <p className='text-lg lg:text-3xl'>Beauty Meeting the Beast</p>
              </div>
            </div>
            <div className='shadow-[-1px_-1px_10px_1px] shadow-[#4c00ff] rounded-lg w-[90vw] h-[150px] p-6 md:w-[75vw] md:text-center lg:rounded-3xl lg:w-[500px] lg:h-[400px] lg:flex lg:items-center lg:justify-center lg:p-8 lg:shadow-none lg:border-2 lg:border-white lg:hover:border-none lg:hover:shadow-[-1px_-1px_10px_5px] lg:hover:shadow-teal-500'>
              <div>
                <h1 className="text-2xl font-bold mb-4 lg:font-light">Landing Pages / Sites</h1>
                <p className='text-lg lg:text-3xl'>Beyond Screens: Transforming Digital Realities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col mb-32 p-8 justify-center items-center mx-auto lg:my-44'>
        <h1 className='text-4xl text-white mb-10 lg:text-5xl'>Our Expertise</h1>
        <div className="flex flex-row flex-wrap gap-10 justify-center md:border-2 md:border-white md:pt-8 md:pb-10 md:rounded-2xl lg:border-0 lg:max-w-[900px]">
          <Image
            src="/assets/react-2.svg"
            width={80}
            height={80}
            alt='Logo'
            className=''
          />

          <Image
            src="/assets/node-logo.png"
            width={100}
            height={100}
            alt='Logo'
            className=''
          />
          <Image
            src="/assets/MongoDB.svg"
            width={150}
            height={150}
            alt='Logo'
            className=''
          />
          <Image
            src="/next.svg"
            width={150}
            height={150}
            alt='Logo'
            className=''
          />

          <Image
            src="/assets/tailwindcss-logo.svg"
            width={220}
            height={220}
            alt='Logo'
            className=''
          />
          <Image
            src="/assets/Figma-Logo.svg"
            width={150}
            height={150}
            alt='Logo'
            className=''
          />
          <Image
            src="/assets/Framer.svg"
            width={150}
            height={150}
            alt='Logo'
            className=''
          />
          <Image
            src="/assets/MaterialUI.svg"
            width={250}
            height={250}
            alt='Logo'
            className=''
          />

        </div>
      </section>


      <section className="flex flex-col items-center justify-center gap-20 text-white mb-48 lg:flex-row lg:justify-around lg:my-44">
        <h1 className='text-[60px] font-medium leading-relaxed text-center lg:text-left lg:text-[150px] lg:leading-tight'>Let's <br />Talk <br />Business</h1>
        <Link href='/contact'>
          <div className='flex justify-center items-center w-[200px] h-[200px] rounded-full border-4 animate-pulse lg:w-[300px] lg:h-[300px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="148" viewBox="0 0 160 148" fill="none" className='lg:w-[200px]'>
              <path d="M157.071 81.0711C160.976 77.1658 160.976 70.8342 157.071 66.9289L93.4315 3.28932C89.5262 -0.615921 83.1946 -0.615921 79.2893 3.28932C75.3841 7.19456 75.3841 13.5262 79.2893 17.4315L135.858 74L79.2893 130.569C75.3841 134.474 75.3841 140.805 79.2893 144.711C83.1946 148.616 89.5262 148.616 93.4315 144.711L157.071 81.0711ZM0 84H150V64H0V84Z" fill="white" />
            </svg>
          </div>
        </Link>

      </section>

      <section className=' bg-white p-10'>
        <div className='flex flex-col w-full gap-20 items-center justify-between md:items-start lg:flex-row'>
          <div className=''>
            <Image
              src="/assets/logo-black.svg"
              width={300}
              height={300}
              alt='Logo'
              className=''
            />
          </div>
          <div className='flex flex-col gap-6'>
            <div>
              <h3 className='font-bold'>Email</h3>
              <p className='text-xl'>theweekendcodershq@gmail.com</p>
            </div>
            <div>
              <h3 className='font-bold'>Contact</h3>
              <p className='text-xl'>9789260864</p>
            </div>
          </div>
          <div className='flex flex-row gap-5'>
            <div className=' w-12 h-12 rounded-full border-2 border-white bg-white'>
              <Link href='https://twitter.com/weekendcoders'>
                <Image
                  src="/assets/twitter.png"
                  width={102}
                  height={102}
                  alt='Logo'

                  className='rounded-full'
                />
              </Link>
            </div>
            <div className=' w-12 h-12 rounded-full border-2 border-white bg-white'>
              <Link href="https://www.instagram.com/the_weekend_coders/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==">
                <Image
                  src="/assets/instagram.png"
                  width={102}
                  height={102}
                  alt='Logo'
                  className='rounded-full'
                />
              </Link>
            </div>
            <div className=' w-12 h-12 rounded-full border-2 border-white bg-white'>
              <Link href='https://www.linkedin.com/in/the-weekend-coders-undefined-108b70297/'>
                <Image
                  src="/assets/linkedin.png"
                  width={102}
                  height={102}
                  alt='Logo'
                  className='rounded-full'
                />
              </Link>
            </div>
            <div className=' w-12 h-12 rounded-full border-2 border-white bg-white'>
              <Link href='https://www.behance.net/theweekendcoderstwc'>
                <Image
                  src="/assets/behance.png"
                  width={102}
                  height={102}
                  alt='Logo'
                  className='rounded-full'
                />
              </Link>
            </div>
            <div className=' w-12 h-12 rounded-full border-2 border-white bg-white'>
              <Link href='https://dribbble.com/The_Weekend_Coders'>
                <Image
                  src="/assets/dribbble.png"
                  width={102}
                  height={102}
                  alt='Logo'
                  className='rounded-full'
                />
              </Link>
            </div>
          </div>

        </div>
      </section>







    </>


  )
}

export default page
