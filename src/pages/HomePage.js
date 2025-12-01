import React from 'react'
import Topbar from '../components/Topbar'
import About from '@/components/About'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LatestNews from '@/components/LatestNews'
import Celebrities from '@/components/Celebrities'
import Mentorship from '@/components/Mentorship'
import Corporate from '@/components/Corporate'
import Alumni from '@/components/Alumni'
import Life from '@/components/Life'
import Youtube from '@/components/Youtube'
import Footer from '@/components/Footer'



const HomePage = () => {
  return (
    <div>
    <Topbar />
    <Navbar />
    <Hero/>
    <About/>
    <LatestNews/>
    <Celebrities />
    <Mentorship/>
    <Corporate/>
    <Alumni/>
    <Life/>
    <Youtube />
    <Footer/>

    </div>
  )
}

export default HomePage
