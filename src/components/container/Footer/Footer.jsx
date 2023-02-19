import React from 'react';
import "./Footer.scss"
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
        <p>Copyright&copy;2023 All rights reserved.Made by <span>Muhamed</span></p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
            {/* {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })} */}

            <a href='https://github.com/MohamedElshahat55'>{socialIcons[0]}</a>
            <a href='https://www.instagram.com/muhamedelshahat_55'>{socialIcons[1]}</a>
            <a href='https://twitter.com/Muhmedelshahat'>{socialIcons[2]}</a>
          </div>
      </div>
    </motion.div>
  )
}

export default Footer