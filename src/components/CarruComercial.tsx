import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

interface Video {
  id: string;
  url: string;
}

interface CarruselProps {
  videos: Video[];
}

const Carrusel: React.FC<CarruselProps> = ({ videos }) => {
  return (
    <Carousel className='embed-responsive embed-responsive-16by9' >
      {videos.map((video) => (
        <Carousel.Item key={video.id}>
          <ReactPlayer url={video.url} width="100%" height="100%" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;