import React from 'react'
import '../../style/Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home-content'>
        <section className="home section ">
            <div className="container">
                <div className="row">
                    <div className="home-info">
                        <h3 className='hello'>Hey, je m'appelle <span className='name'> Bah Elhadj Mamadou</span></h3>
                        <h3 className="my-profession">Je suis <span className='typing'> developpeur Frontend</span></h3>
                        <p>Prêt à plonger dans un monde où l'innovation rencontre l'esthétique? Découvrez mon portfolio et laissez-vous inspirer par mes créations.</p>
                        <Link to='/contact' className='btn here-me'>En savoir +</Link>
                    </div>
                    <div className="home-img">
                        <img src="/images/imaghero.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
