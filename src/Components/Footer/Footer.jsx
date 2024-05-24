import React, {useState} from 'react'
import Footer_Logo from '../Assets/Landing Page Assents/Risorsa+7gg 1.svg'
import { Link } from 'react-router-dom';
import './Footer.css'
import shopee_logo from '../Assets/Landing Page Assents/brand-shopee.svg'

const bodyEl = document.getElementsByTagName('body')[0];
const Footer = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
    setClick(!click);
    if (click) {
      bodyEl.classList.remove('overflow-hidden');
    } else {
      bodyEl.classList.add('overflow-hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the screen
    }
  };
  const closeMobileMenu = () => setClick(false);
  return (
    <section className="footer-container">
        <div className='Footer-flex'>
            <div className='Footer-Logo-Wrapper'>
                <img src={Footer_Logo} alt="" />
                <div className='social-icons'>
                    <div><Link to='https://www.facebook.com/GarudaGearPH/' target='_Blank'><i class="fa-brands fa-facebook-f"></i></Link></div>
                    <div><Link to='https://www.instagram.com/garudagearph/' target='_Blank'><i class="fa-brands fa-instagram"></i></Link></div>
                    <div><Link to='https://www.tiktok.com/@garudagear' target='_Blank'><i class="fa-brands fa-tiktok"></i></Link></div>
                    <div><Link to='https://shopee.ph/garudagearph' target='_Blank'><img src={shopee_logo} alt="" /></Link></div>
                    <div><Link to='https://www.lazada.com.ph/shop/garuda-gear/?path=promotion-41019-0.htm&tab=promotion' target='_Blank'><p>Laz</p></Link></div>
                </div>
            </div>

            <div className='quick-links'>
                <h1>Quick Links</h1>
                <ul>
                <Link onClick={() => {handleClick(); closeMobileMenu()}} style={{color: '#E9EAEA' }} to='/'><li>Home</li></Link>
                <Link onClick={() => {handleClick(); closeMobileMenu()}} style={{color: '#E9EAEA' }} to='/Shop'><li>Products</li></Link>
                <Link onClick={() => {handleClick(); closeMobileMenu()}} style={{color: '#E9EAEA' }} to='/driverspage'><li>Drivers</li></Link>
                <Link onClick={() => {handleClick(); closeMobileMenu()}} style={{color: '#E9EAEA' }} to='/faqspage'><li>FAQs</li></Link>
                </ul>
            </div>

            <div className="partner">
                <h1>BE A PARTNER TODAY</h1>
                <Link target='blank' to='https://docs.google.com/forms/d/e/1FAIpQLSdXU_uzaHb8FOYI0Jx2bXBaaYTvLFGw1e_JnQVKOJyeyBn0YQ/viewform?usp=sf_link'><button type="button">Apply Now!</button></Link>
            </div>
        </div>
        <div className='copy-rights'>
            <p>©2023Garudagear. All Rights Reserved</p>
            <p>Contact us at team@garudagear.com</p>
        </div>
    </section>
  )
}

export default Footer