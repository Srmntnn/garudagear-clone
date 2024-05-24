import React from 'react'
import './Faqs.css'
import { Link } from 'react-router-dom'

const Faqs = () => {
  return (
    <section className="Faqs-contents">
        <div className='faqs-wrapper'>
            <div className='page-title'>Frequetly Asked Questions</div>
        </div>
        <div className='faqs-container'>
          <div className='question-answer'>
            <h1>DO YOUR PRODUCTS HAVE A WARRANTY PERIOD?</h1>
            <p>
            All Garuda Gear products come with a 7-Day replacement, 3-Month Warranty subject at our discretion. 
            To avail of the warranty, customers must send the purchased unit to our service locations with the included warranty card. 
            For a list on what constitutes a valid return, click here.
            </p>
          </div>

          <div className='question-answer'>
            <h1>WHERE CAN I FIND/BUY YOUR PRODUCTS? HOW CAN I PAY?</h1>
            <div className='separete-answer'>
            <p>
            Purchase Garuda Gear products from our official Lazada Store Here: <Link target='blank' to='https://lazada.com.ph/shop/garuda-gear'>Click Here</Link>.
            </p>
            <p>
            You can also check our official shopee store here: <Link target='blank' to='https://shopee.ph/garudagearph'>Click Here</Link>.
            </p>
            </div>
          </div>

          <div className='question-answer'>
            <h1>WHERE IS MY ORDER?</h1>
            <div className='separete-answer'>
            <p>
            Our shipping and logistics are handled by the platform at which you bought our product. Order updates can be seen in those platforms.
            You can also message our social media and online shop accounts and we will do our best to answer order inquiries as fast as we can.
            </p>
              <div className='bullets'>
              <li>
                You can also check our official shopee store here: <Link target='blank' to='https://shopee.ph/garudagearph'>Click Here</Link>.
              </li>
              <li>
                For Lazada order tracking and updates refer to this link: <Link target='blank' to='https://www.lazada.com.ph/helpcenter/how-do-i-track-my-order-11642.html'>Click Here</Link>
              </li>
              <li>
                For International Customers/Special Customers, reach out to our Facebook/Instagram page or email us at garudagearph@gmail.com
              </li>
              </div>
            </div>
          </div>

          <div className='question-answer'>
            <h1>HOW/WHERE CAN WE CONTACT YOU?</h1>
            <p>
              For general inquiries, feel free to message any of our social media pages or online shops (Facebook, Instagram, Shopee). 
              For more specific inquiries you can email us at team@garudagear.com. 
            </p>
          </div>

          <div className='question-answer'>
            <h1>DO YOUR PRODUCTS COME WITH SOFTWARE?</h1>
            <p>
              Certain Garuda Gear products such as the Falcon Gaming Mouse line 
              come with software that enables you to program and customize our products.
              Learn more about the Falcon 1 here.
            </p>
          </div>

          <div className='question-answer'>
            <h1>DO YOU SHIP INTERNATIONALLY?</h1>
            <p>
              For special international orders please contact our Facebook or Instagram page to coordinate the ship-out and purchase of your desired product.
            </p>
          </div>

          <div className='question-answer'>
            <h1>DARE YOU LOOKING FOR PARTNERS?</h1>
            <p>
              Yes we are! Garuda Gear is currently looking for Brand Ambassadors, 
              Retail Partners, and International Distributors. Applicants can apply here..
            </p>
          </div>

        </div>

    </section>
  )
}

export default Faqs;