import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAnuncios,
  selectLoading,
  selectError,
  selectAnuncio,
} from '../redux/slice/AdvertisementSlice';
import ReactPlayer from 'react-player';
import Marquee from '@/components/marque';

export default function CarruselAnuncios() {
  const dispatch = useDispatch();
  const anuncios = useSelector(selectAnuncio);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarouselStopped, setIsCarouselStopped] = useState(false);

  useEffect(() => {
    dispatch(getAnuncios());
  }, [dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCarouselStopped(true);
    }, 60000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isCarouselStopped) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === anuncios.length - 1 ? 0 : prevIndex + 1));
      }, 60000);
  
      return () => clearInterval(interval);
    }
  }, [isCarouselStopped, anuncios.length]);

  const handleVideoEnded = () => {
    setActiveIndex((prevIndex) => (prevIndex === anuncios.length - 1 ? 0 : prevIndex + 1));
  };

  if (loading) {
    return <div className="text-center h2 p-3">Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="carousel">
      {anuncios.map((anuncio, index) => (
        <div key={anuncio.id} className={index === activeIndex ? 'carousel-item active' : 'carousel-item'}>
          <Marquee text={anuncio.tittle} />
          <ReactPlayer
            url={anuncio.url}
            playing={index === activeIndex}
            width={1366}
            height={650}
            onEnded={handleVideoEnded}
          />
        </div>
      ))}
    </div>
  );
}
