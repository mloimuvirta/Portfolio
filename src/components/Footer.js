import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <p>milla.loimuvirta@gmail.com</p>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                    <Link
                        class='social-icon-link instagram'
                        to={{ pathname: "https://instagram.com/milffi" }}
                        target='_blank'
                        aria-label='Instagram'>
                        <i class='fab fa-instagram' />
                    </Link>
                    <Link
                        class='social-icon-link facebook'
                        to={{ pathname: "https://facebook.com/milla.loimuvirta" }}
                        target='_blank'
                        aria-label='Facebook'>
                        <i class='fab fa-facebook-f' />
                     </Link>
                     <Link
                        class='social-icon-link github'
                        to={{ pathname: "https://github.com/mloimuvirta" }}
                        target='_blank'
                        aria-label='github'>
                        <i class='fab fa-github' />
                     </Link>
                     <Link
                        class='social-icon-link linkedin'
                        to={{ pathname: "https://linkedin.com/in/milla-loimuvirta/" }}
                        target='_blank'
                        aria-label='linkedin'>
                        <i class='fab fa-linkedin' />
                     </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
