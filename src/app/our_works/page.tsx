import React from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

const page = () => {
    const works = [
        {
            title: 'Byte Forge',
            description: 'An online retail shop.',
            link: '/',
            isLive: false
        },
        // {
        //     title: 'BayLeaf',
        //     description: 'A web solution for a restaurant.',
        //     link: '/'
        // },
        {
            title: 'Lap Corner',
            description: 'An online retail shop for electronics.',
            link: 'https://www.lapcorner.in',
            isLive: true
        },
        {
            title: 'SHGS',
            description: 'A sweet shop.',
            link: '/',
            isLive: false
        },
    ]
    return (
        <div>
            <NavBar />
            <h1 className='text-[48px] md:text-[64px] tracking-[-4px] font-medium text-center lg:my-14 text-white'>Showcase</h1>
            <section className='px-4 md:px-16 text-white mb-20'>
                <div className=' flex flex-col justify-center items-center lg:grid lg:grid-cols-2  xl:grid-cols-3 xl:justify-start gap-10'>
                    {
                        works.map((item, index) => (
                            <div className='' key={index}>
                                <div className='w-[350px] h-[200px] md:w-[430px] md:h-[250px] lg:w-[400px] backdrop-blur-lg bg-black/30 rounded-t-[50px] flex justify-center items-center'>
                                    <span className='text-4xl font-medium tracking-tighter'>{item.title}</span>
                                </div>
                                <div className='w-[350px] h-[200px] md:w-[430px] md:h-[200px] lg:w-[400px] backdrop-blur-md bg-black/10 rounded-b-[50px]'>
                                    <div className='flex flex-row justify-between items-start p-8'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-xl font-medium tracking-tight'>{item.title} </p>
                                            <p className='text-lg font-normal tracking-tight text-[#E7E7E7] max-w-[300px]'>{item.description}</p>
                                            {
                                                item.isLive ? <p className='text-md text-green-400'>Live</p> :  <p className='text-md text-yellow-300'>Cooking</p> 
                                            }
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-1'>
                                            <Link href={item.link}>
                                            <div className='w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center'>
                                                <Image
                                                    src="/images/arrow.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="link"
                                                />
                                            </div>
                                            </Link>
                                            <span className='text-[#E7E7E7] text-md'>Visit</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
            <Footer></Footer>
        </div>
    )
}

export default page
