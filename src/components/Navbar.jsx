import logo from '../assets/Logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
export default function Navbar() {
    return (
        <nav className=" mb-20 flex item-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-2 w-10' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/deepu-dagar-664023307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'><FaLinkedin className='cursor-pointer' /></a>
                <a href="https://github.com/Deepanshu7517" target='blank'><FaGithub className='cursor-pointer' /></a>
                <a href="https://x.com/deepudagar3?s=" target='blank'><FaTwitter className='cursor-pointer' /></a>
                <a href=" https://www.instagram.com/deepanshurinki_dagar99?igsh=MTRqY3B3cjJyY2lpcg==" target='blank'><FaInstagram className='cursor-pointer' /></a>
            </div>
        </nav>
    )
}