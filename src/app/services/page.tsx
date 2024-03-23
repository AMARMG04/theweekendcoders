import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const page = () => {
    const services = [
        {
            title: "UI / UX Designs",
            description: "Now what true engineer doesn't love challenges? Highly creative designs that challenge you to explore the possibilities of frontend engineering.",
            price: "1999"
        },
        {
            title: "Landing Pages & Sites",
            description: "Stand out from the crowd with innovative landing pages and websites that leverage the latest design trends and technology.",
            price: "6999"
        },
        {
            title: "E-commerce Solutions",
            description: "Unlock the full potential of your online store with our innovative ecommerce solutions.",
            price: "19999"
        },
        {
            title: "SaaS Solutions",
            description: "Build a custom software solution that fits your business needs.",
            price: "29999"
        }
        
    ]

    return (
        <div>
            <NavBar />
            <h1 className='text-[48px] md:text-[64px] tracking-[-4px] my-11 font-medium text-center text-white'>Services</h1>
            <section className='px-4 md:px-16 text-white mb-11'>
                <div className='flex flex-row flex-wrap justify-center gap-10'>
                    {
                        services.map((service, index) => (
                            <div className='relative border-2 border-white rounded-3xl w-[450px] h-[580px] p-10 backdrop-blur-xl' key={index}>
                                <h1 className='text-[32px] tracking-[-2px] font-medium text-left'>
                                    {service.title}
                                </h1>
                                <p className='my-10 text-2xl text-left font-normal tracking-tight text-[#DDCDDE]'>
                                    {service.description}
                                </p>
                                <div className='absolute bottom-20 right-10'>
                                    <p className='font-medium'>Starts at</p>
                                    <div className='flex items-start'>
                                        <span className='text-lg'>₹</span><span className='font-semibold text-6xl'>{service.price}</span>
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
