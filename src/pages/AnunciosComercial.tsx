import { RootState } from '../redux/store';
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
  titulo: string;
  url: string;

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
          <Carousel className='d-block w-100'>
            {anuncios.map((anuncio) => (
              <Carousel.Item key={anuncio.id}>
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


