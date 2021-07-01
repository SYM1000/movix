import React from 'react'
import './Contact.css'
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {SiTwitter} from 'react-icons/si';
import {SiAppstore} from 'react-icons/si';
import {CgWebsite} from 'react-icons/cg';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact movix 🎉</h1>

            <p>Feel free to contact me anytime regarding website feedback, feature requests or just to chat!</p>
            
            <h2>Links</h2>
            
            <div className="contact__row">
                <a target='_blank' rel="noreferrer" href={'https://github.com/SYM1000'} className='link'>
                <AiFillGithub className="contact__icon github"/>
                <p>Github</p>
                </a>
            </div>
            
            <div className="contact__row">
                <a target='_blank' rel="noreferrer" href={'https://www.linkedin.com/in/santiago-yeomans/'} className='link'>
                <AiOutlineLinkedin className="contact__icon linkedin"/>
                <p>LinkedIn</p>
                </a>
            </div>
            
            <div className="contact__row">
                <a target='_blank' rel="noreferrer" href={'https://twitter.com/SYM1001'} className='link'>
                <SiTwitter className="contact__icon twitter"/>
                <p>Twitter</p>
                </a>
            </div>
            
            <div className="contact__row">
                <a target='_blank' rel="noreferrer" href={'https://apps.apple.com/us/developer/santiago-yeomans/id1519365510'} className='link'>
                <SiAppstore className="contact__icon appstore"/>
                <p>AppStore</p>
                </a>
            </div>
            
            <div className="contact__row">
                <a target='_blank' rel="noreferrer" href={'http://www.santiagoyeomans.com/'} className='link'>
                <CgWebsite className="contact__icon portfolio"/>
                <p>Portfolio</p>
                </a>
            </div>
            

        </div>
    )
}

export default Contact
