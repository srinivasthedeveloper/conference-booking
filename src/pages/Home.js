import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Hero>
        <Banner title="Join Now" subtitle="The Most Popular Conferences">
        <Link to="/rooms" className="btn-primary">
          Our Conferences
        </Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
    </div>
  )
}