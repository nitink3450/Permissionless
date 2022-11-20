import React from 'react'
import Achieve from '../Components/Body/Achieve/Achieve';
import ChooseUs from '../Components/Body/CarouselChooseUs/ChooseUs';
import Client from '../Components/Body/Client/Client';
import Contact from '../Components/Body/Contact/Contact';
import FAQ from '../Components/Body/FAQ/FAQ';
import Form from '../Components/Body/Form/Form';
import Practices from '../Components/Body/Practices/Practices';
import TopAd from '../Components/Body/TopAd/TopAd';
import Team from '../Components/Common/OurTeam/Team';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <TopAd />
      <ChooseUs />
      <Practices />
      <Client />
      <Achieve />
      <Team />
      <FAQ />
      <Form />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;