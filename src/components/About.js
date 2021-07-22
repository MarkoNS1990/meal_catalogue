import React from 'react'
import '../styles/About.css'
//import pic1 from '../assets/1.jpg'

function About() {
    return (
        <>
        <h1 className='about-heading'>Who we are...</h1>
        <div className='about-container'>
            
            <section className="about-section">
            <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur voluptatem aspernatur itaque praesentium recusandae nisi unde deserunt ducimus, harum sint vel consequuntur dicta autem eveniet hic quod iste. Sapiente tempore nulla officiis! Esse consequatur corrupti culpa tempora qui earum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur voluptatem aspernatur itaque praesentium recusandae nisi unde deserunt ducimus, harum sint vel consequuntur dicta autem eveniet hic quod iste. Sapiente tempore nulla officiis! Esse consequatur corrupti culpa tempora qui earum!<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur voluptatem aspernatur itaque praesentium recusandae nisi unde deserunt ducimus, harum sint vel consequuntur dicta autem eveniet hic quod iste. Sapiente tempore nulla officiis! Esse consequatur corrupti culpa tempora qui earum!</p>
            <img src='./assets/1.jpg' alt="" className='about-pic'/>
            </section>
            <section className="about-section">
            <img src='./assets/2.jpg' alt="" className='about-pic'/>
            <p className='about-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam maxime aspernatur dolorem possimus magni recusandae harum debitis aperiam aliquid enim voluptas, fuga dolor sed autem impedit, tempore beatae vel deserunt! Praesentium id, nostrum, perferendis error accusamus omnis facere in laudantium deserunt adipisci, doloremque assumenda libero atque alias cum sint aliquid? <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam maxime aspernatur dolorem possimus magni recusandae harum debitis aperiam aliquid enim voluptas, fuga dolor sed autem impedit, tempore beatae vel deserunt! Praesentium id, nostrum, perferendis error accusamus omnis facere in laudantium deserunt adipisci, doloremque assumenda libero atque alias cum sint aliquid?
            </p>
            </section>
        </div>
        </>
    )
}

export default About
