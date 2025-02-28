import React from 'react'
import Logo from '../Logo/Logo';
import Arrow from '../Arrow/Arrow';
import Insta from '../Symbols/Insta';
import Facebook from '../Symbols/Facebook';


const Footer = () => {
    const year = new Date().getFullYear()
    return(
        <footer className=' py-10 justify-center flex px-10 bg-black bg-opacity-70 h-[52rem] lg:h-[22rem]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:gap-x-24 sm:gap-x-1 gap-y-0 grid-rows-5 lg:grid-rows-3'>
                <div className='flex items-center  space-x-4'> 
                    <Logo className="h-24" />
                    <p className='font-cotta text-3xl text-gold'>Golden Age Care</p>
                </div>
                <div className='row-start-2 py-2 space-y-1'>
                <div className='text-gold text-2xl font-medium row-start-2 flex items-center'>
                    <a  className='flex items-center' href='mailto:office@goldenagecare.ro'>office@goldenagecare.ro <Arrow /></a>
                </div>
                <div className='text-gold text-2xl font-medium row-start-2 flex items-center'>
                    <a  className='flex items-center' href='tel:+40733697231'>+40 733 697 231 <Arrow /></a>
                </div>
                <div className='text-gold text-2xl w-full font-medium row-start-3 flex items-center'>
                <a className='flex items-center' target='_blank' href='https://goo.gl/maps/AUigHMpHu43W3zE2A'>Strada Muzelor, Nr.2, Săcălaz <Arrow /> </a>
                
                </div>
                
                   
                </div>

                <div className='col-start-1 row-start-6 text-gold'>
                        Copyright {year} Golden Age Care
                        </div>

                <div className='col-start-4 row-start-6'>
                <div className=' mx-2 flex w-[64px] h-auto'>
                    <a className='hover:opacity-70 ease-in-out transition-all' href='https://www.instagram.com/goldenage_care'>
                    <Insta />
                    </a>
                    <a className='hover:opacity-70 ease-in-out transition-all' href='https://www.facebook.com/profile.php?id=100090326727464'>
                    <Facebook />
                    </a>
                    
                </div>
                </div>    
                <div className='row-start-3 py-24 lg:py-0 col-start-1 lg:row-start-1 lg:col-start-4 lg:col-span-full'>
                    
                <iframe className='rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.4286836248425!2d21.085773915291174!3d45.76259842150402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474542401de60f4d%3A0xbdee711aaec82e29!2sStr.%20Muzelor!5e0!3m2!1sen!2sro!4v1676542961808!5m2!1sen!2sro" width="280" height="280" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
           
        </footer>
    )
}

export default Footer;