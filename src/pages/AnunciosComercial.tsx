import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAnuncios,
  selectLoading,
  selectError,
  selectAnuncio,
} from '../redux/slice/AdvertisementSlice';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

interface Anuncio {
  id: number;
  descripcion: string;
  tittle: string;
  url: string;
  images:string

}

export default function CarruselAnuncios() {
  const dispatch = useDispatch();
  const anuncios = useSelector(selectAnuncio);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAnuncios());
  }, [dispatch]);


  if (loading) {
    return <div className='text-center h2 p-3'>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide " data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Carousel className='d-block'>
            {anuncios.map((anuncio) => (
              <Carousel.Item className='bg-success h3' key={anuncio.id}>
                {anuncio.tittle}
                <img src={anuncio.images} width={100} height={100}/>
                <ReactPlayer url={anuncio.url} 
                playing={true}  width={1270}
              height={900}/>

              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>

  )
}


