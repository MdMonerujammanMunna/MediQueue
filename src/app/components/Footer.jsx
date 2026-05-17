import Link from 'next/link';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';

const Footersection = () => {
    const AfterLogin =
        <>
            <li><Link href="#" className="no-underline">Add Tutor</Link></li>
            <li><Link href="#" className="no-underline">My Tutors</Link></li>
            <li><Link href="#" className="no-underline">My Booked Sessions</Link></li>
        </>
    const Navigation =
        <>
            <li><Link href="#" className="no-underline">Home</Link></li>
            <li><Link href="#" className="no-underline"> Tutors </Link></li>

            {
                // <>  </>                         {/*before log in */}
                // :
                <>
                    {AfterLogin}                  {/* after log in */}
                </>
            }
        </>
    const Support =
        <>
            <li><Link href="/">Help Center</Link></li>
            <li><Link href="/All_tiles">FAQ</Link></li>
            <li><Link href="/Profile">Terms & Conditions</Link></li>
            <li><Link href="/Profile">Privacy Policy</Link></li>
        </>
    const Info =
        <>
            <p>01751626072</p>
            <p>mdmonerujammanmunna@gmail.com</p>
            <p>Rangpur,Bangladesh</p>
        </>
    const link =
        <>
            <Link href="https://www.facebook.com/Md.MonerujammanMunna0" target='#' className='bg-[var(--primary-color)] p-2 rounded-full'><FaFacebook /></Link>
            <Link href="https://www.instagram.com/md.monerujamman_munna/" target='#' className='bg-[var(--primary-color)] p-2 rounded-full'><RiInstagramFill /></Link>
            <Link href="https://github.com/MdMonerujammanMunna" target='#' className='bg-[var(--primary-color)] p-2 rounded-full'><FaGithub /></Link>
            <Link href="https://www.linkedin.com/in/mdmonerujammanmunna/" target='#' className='bg-[var(--primary-color)] p-2 rounded-full'><IoLogoLinkedin /></Link>
        </>
    return (
        <>
            <div className="px-10  pt-20 border-t-4 border-[var(--primary-color)]">
                <div className="flex flex-col gap-10 lg:gap-4 lg:text-left lg:flex-row items-center justify-between">

                    <div className="space-y-4 flex-1 flex flex-col items-center text-center lg:text-left lg:items-start">
                        <h1 className='text-4xl text-[var(--primary-color)] font-bold'>MediQueue</h1>
                        <p className='lg:max-w-90'>Helping students connect with expert tutors for better learning, skill growth, and academic success anytime, anywhere..</p>
                        <div className=" mt-4  flex items-center gap-10 ">
                            {link}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:text-left text-center items-center lg:items-start lg:gap-5 justify-between">
                        <div className="">
                            <p className='font-bold text-[var(--primary-color)] mb-2'>Quick Links</p>
                            <ul className=''>
                                {Navigation}
                            </ul>
                        </div>
                        <div className="">
                            <p className='font-bold text-[var(--primary-color)] mb-2'>Support</p>
                            <ul className=''>
                                {Support}
                            </ul>
                        </div>
                        <div className="">
                            <p className='font-bold text-[var(--primary-color)] mb-2'>Contact Us</p>
                            <ul className=''>
                                {Info}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center my-5">
                    <p>© {new Date().getFullYear()} MediQueue. All rights reserved <span className=' '>|</span> Mead with by ❤️<span className=''>  Md.Munna</span></p>
                </div>

            </div>
        </>
    );
};

export default Footersection;