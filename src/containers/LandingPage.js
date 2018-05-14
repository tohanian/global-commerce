import React, { Component } from 'react';

// Components
import About from './About';
import HomeSearch from '../components/HomeSearch';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToActionForm from '../components/CallToActionForm';
import Header from './Header';
// import ContactUs from "../components/ContactUs";
// import Footer from "../components/Footer";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeSearch />
        <HowItWorks />
        <WhyChooseUs />
        <CallToActionForm />
        {/* <About />
				<ContactUs />
				<Footer /> */}
      </div>
    );
  }
}

export default LandingPage;
