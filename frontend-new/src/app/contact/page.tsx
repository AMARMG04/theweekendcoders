import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'


const ContactPage = () => {
    return (
        <>
            <div className="bg-black">
                <Link href='/'>
                    <Image
                        src="/assets/logo.svg"
                        width={250}
                        height={250}
                        alt='Logo'
                        className='ml-8 my-10 mx-auto md:mx-0 md:ml-8 lg:w-[300px]'
                    />
                </Link>
            </div>
            <div className="flex flex-col lg:flex-row ">
                <div className='lg:grow lg:w-1/2 lg:bg-black'>
                    <div className='bg-hero-bg bg-cover bg-opacity-10  h-72 text-center flex justify-center lg:ml-10  lg:items-start lg:mt-20 lg:h-[700px] lg:rounded-3xl'>
                        <div className=''>
                            <h1 className='text-5xl text-white font-medium lg:text-[60px]'>Work With Us</h1>
                            <p className='text-white'>Together, Lets Redefine Possibilities</p>
                        </div>
                    </div>
                </div>
                <div className="min-w-screen bg-black lg:grow lg:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </>

    )
}

export default ContactPage
