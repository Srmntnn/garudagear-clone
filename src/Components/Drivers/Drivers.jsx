import React from 'react'
import './Drivers.css';
import { Link } from 'react-router-dom'
import CONDOR1 from '../Assets/Landing Page Assents/Condorb&W.svg'
import GG100B from '../Assets/Landing Page Assents/COVER+PHOTO 1.svg'
import HAWK1 from '../Assets/Landing Page Assents/1+TOP+COMPLETE+VIEW+2 1.svg'
import GG68B from '../Assets/Landing Page Assents/gg68b-colors 3.png'
import FALCON1 from '../Assets/Landing Page Assents/Falcon1.svg'
import OSPREY1 from '../Assets/Landing Page Assents/OSPREY1.png'

const Drivers = () => {
  return (
    <>
      <div className="drivers-container">
        <h1 className='section-title'>DRIVERS & DOWNLOADS</h1>
          <div className='driver-wrapper'>
            <div className='product-grid'> 
                <img loading='lazy' src={CONDOR1} alt="" />
                <div className='download-links'>
                  <h1>CONDOR1</h1>
                  <div className='suite-btn'>
                    <p>CONDOR 1 SOFTWARE SUITE</p>
                    <Link target='blank' data-initialize="true" to='https://garudagear.ph/s/GARUDAGEAR-CONDOR1-Software.zip'><button>DOWNLOAD SOFTWARE SUITE</button></Link>
                  </div>
                  <div className='manual-btn'>
                    <p>PRODUCT MANUAL (PDF)</p>
                    <button>DOWNLOAD MANUAL</button>
                  </div>
                </div>
            </div>
            <div className="seperator"></div>
          </div>

          <div className='driver-wrapper'>
            <div className='product-grid'> 
                <img loading='lazy' src={HAWK1} alt="" />
                <div className='download-links'>
                  <h1>HAWK1</h1>
                  <div className='suite-btn'>
                    <p>HAWK 1 SOFTWARE SUITE</p>
                    <Link target='blank' data-initialize="true" to='https://garudagear.ph/s/GARUDAGEAR-CONDOR1-Software.zip'><button>DOWNLOAD SOFTWARE SUITE</button></Link>
                  </div>
                  <div className='manual-btn'>
                    <p>PRODUCT MANUAL (PDF)</p>
                    <button>DOWNLOAD MANUAL</button>
                  </div>
                </div>
            </div>
            <div className="seperator"></div>
          </div>

          <div className='driver-wrapper'>
            <div className='product-grid'> 
                <img loading='lazy' src={GG100B} alt="" />
                <div className='download-links'>
                  <h1>GG100B</h1>
                  <div className='suite-btn'>
                    <p>GG100B SOFTWARE SUITE</p>
                    <Link target='blank' data-initialize="true" to='https://garudagear.ph/s/GARUDAGEAR-CONDOR1-Software.zip'><button>DOWNLOAD SOFTWARE SUITE</button></Link>
                  </div>
                  <div className='manual-btn'>
                    <p>PRODUCT MANUAL (PDF)</p>
                    <button>DOWNLOAD MANUAL</button>
                  </div>
                </div>
            </div>
            <div className="seperator"></div>
          </div>

          <div className='driver-wrapper'>
            <div className='product-grid'> 
                <img loading='lazy' src={GG68B} alt="" />
                <div className='download-links'>
                  <h1>GG68B</h1>
                  <div className='suite-btn'>
                    <p>GG68B SOFTWARE SUITE</p>
                    <Link target='blank' data-initialize="true" to='https://garudagear.ph/s/GARUDAGEAR-CONDOR1-Software.zip'><button>DOWNLOAD SOFTWARE SUITE</button></Link>
                  </div>
                  <div className='manual-btn'>
                    <p>PRODUCT MANUAL (PDF)</p>
                    <button>DOWNLOAD MANUAL</button>
                  </div>
                </div>
            </div>
            <div className="seperator"></div>
          </div>

          <div className='driver-wrapper'>
            <div className='product-grid'> 
                <img loading='lazy' src={FALCON1} alt="" />
                <div className='download-links'>
                  <h1>FALCON1</h1>
                  <div className='suite-btn'>
                    <p>FALCON 1 SOFTWARE SUITE</p>
                    <Link target='blank' data-initialize="true" to='https://garudagear.ph/s/GARUDAGEAR-CONDOR1-Software.zip'><button>DOWNLOAD SOFTWARE SUITE</button></Link>
                  </div>
                  <div className='manual-btn'>
                    <p>PRODUCT MANUAL (PDF)</p>
                    <button>DOWNLOAD MANUAL</button>
                  </div>
                </div>
            </div>
            <div className="seperator"></div>
          </div>

          <div className='driver-wrapper'>
            <div className='product-grid'> 
                <img loading='lazy' src={OSPREY1} alt="" />
                <div className='download-links'>
                  <h1>OSPREY1</h1>
                  <div className='suite-btn'>
                    <p>OSPREY 1 SOFTWARE SUITE</p>
                    <Link target='blank' data-initialize="true" to='https://garudagear.ph/s/GARUDAGEAR-CONDOR1-Software.zip'><button>DOWNLOAD SOFTWARE SUITE</button></Link>
                  </div>
                  <div className='manual-btn'>
                    <p>PRODUCT MANUAL (PDF)</p>
                    <button>DOWNLOAD MANUAL</button>
                  </div>
                </div>
            </div>
            <div className="last-seperator"></div>
          </div>
      </div>
    </>
  )
}

export default Drivers