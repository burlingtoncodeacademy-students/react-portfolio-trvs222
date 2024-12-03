import React from 'react'
import './AboutStyles.css'
import img1 from '../../assets/IMG-9240.jpg'
const AboutPage = () => {
  return (
    <div className='about'>
        <div className='container'>
            <h1 className='text'> About Me</h1>

            <div className='image-one'>
         <img src={img1} id ="img1" alt="picture" />
         </div>
         <div className='text-box'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum erat aliquam velit varius condimentum. Etiam facilisis mauris ut erat condimentum, vel placerat nibh volutpat. Praesent a nibh porta, lobortis est ac, tincidunt elit. Vivamus quis lorem hendrerit, blandit sem eget, egestas justo. Integer in vestibulum ipsum. Fusce in diam efficitur, mollis libero eget, tempus elit. Aliquam rhoncus cursus augue. Quisque interdum justo et dapibus feugiat. Ut iaculis lacus in quam eleifend sodales.

Suspendisse elementum eget quam non ullamcorper. Nulla dignissim dolor ut lacus vulputate, at efficitur justo gravida. In tempor in eros vel rhoncus. Maecenas tincidunt dui eu leo pharetra hendrerit. Praesent ligula ipsum, dapibus et semper a, accumsan vel arcu. Vestibulum eget libero quis mauris varius lacinia nec vel libero. Donec lectus mauris, tincidunt sed aliquet sit amet, facilisis molestie sem. Donec egestas lectus sed dui porttitor, et lacinia urna blandit. Nulla sit amet justo non tortor fringilla porttitor non vel sapien.

Suspendisse vel metus ut lacus molestie rutrum non in elit. Vestibulum dignissim non elit ut aliquet. Proin ultrices, quam sed pellentesque viverra, eros lorem porta lorem, id malesuada enim nibh nec dolor. Mauris dapibus felis eget euismod facilisis. Aliquam convallis tortor quis finibus posuere. Etiam sed dui auctor, fringilla elit id, cursus dui. Praesent tincidunt venenatis diam vitae sagittis.</p>
        </div>
        </div>
        
    </div>


  )
}

export default AboutPage