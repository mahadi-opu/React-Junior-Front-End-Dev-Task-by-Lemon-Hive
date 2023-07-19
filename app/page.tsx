'use client'
import Conferences from '@/components/conferences/Conferences';
import Hero from '@/components/hero/Hero';
import OurSponsor from '@/components/oursponsor/OurSponsor';
import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';




export default function Home() {
  return (
    <main>  
      <Hero/>
      <Conferences/>
      <OurSponsor/>
    </main>
   
  )
}

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;