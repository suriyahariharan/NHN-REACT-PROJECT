import React from 'react'
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
             If you want to live a happy life, tie it to a goal, not to people or things.
          </p>
          <p className='footer-subscription-text'>
        
          </p>
          <div className='input-areas'>
            <form> 
              <input
                 className='footer-input'
                 name='email'
                type='email'
                placeholder='Your Email'
              />
              {<Button buttonStyle='btn--outline'>Enter</Button> }
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
               <h2> About Us </h2> 
               
               <a href='http://localhost:3000/'>
                   Home
               </a>
              <a href='https://www.who.int/about/policies/publishing/data-policy/terms-and-conditions#:~:text=Subject%20to%20these%20Terms%20and%20Conditions%2C%20WHO%20grants%20to%20you,products%20for%20public%20health%20purposes.'>Terms and conditions</a>
            </div>
           
          </div>
        
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                {/* Survivalkit
                <img src="https://funmauj.b-cdn.net/test/375157.jpg" className="navbar_logo1" /> */}
              </Link>
            </div>
           
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link> 
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;