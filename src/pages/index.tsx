import { getRutas, selectError, selectLoading, selectRuta } from "@/redux/slice/routeSlice";
import Marquee from "@/components/marque";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const rutas = useSelector(selectRuta);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCarouselStopped, setIsCarouselStopped] = useState(false);

  useEffect(() => {
    dispatch(getRutas());
  }, [dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCarouselStopped(true);
    }, 20000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isCarouselStopped) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex === rutas.length - 1 ? 0 : prevIndex + 1));
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [isCarouselStopped, rutas.length]);

  if (loading) {
    return <div className="text-center h2 p-3">Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className="carousel">
      {rutas.map((ruta, index) => (
        <div key={ruta.id} className={index === activeIndex ? 'carousel-item active' : 'carousel-item'}>
          <Marquee text="Ruta" />
          <Marquee text={ruta.router} />
          <Marquee text="Hora salida" />
          <Marquee text={ruta.departureTime} />
          <Marquee text="Precio" />
          <Marquee text={ruta.price} />
        </div>
      ))}
    </div>
  );
}

export default Home;

