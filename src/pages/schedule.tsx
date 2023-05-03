import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

interface BusScheduleProps {
  
 
buses: Bus[];
}

interface Bus {
  
 
id: number;
  
 
departureTime: string;
  
 
destination: string;
}
