import React from 'react'
import './Hobby.css'
import { GiMountainClimbing } from 'react-icons/gi'
import { GiGamepad } from 'react-icons/gi'
import {FaSnowboarding } from 'react-icons/fa'
import {FaCarSide} from 'react-icons/fa'
const Hobby = () => {
  return (
    <div className='hobbies'>
        <div className='container'>
          <div className='hobby-icon'>
            <div className='ic1'>
          <GiMountainClimbing className='icon1'></GiMountainClimbing>
          <GiGamepad className='icon2'></GiGamepad>
          </div>

          <div className='ic2'>
          <FaSnowboarding className='icon3'></FaSnowboarding>
          <FaCarSide className='icon4'></FaCarSide>
          </div>
</div>
   </div>
   </div>
  )
}

export default Hobby