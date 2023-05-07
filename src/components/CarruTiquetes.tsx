/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const schedules = [
    {
      id: 1,
      time: '10:00 AM',
      place: 'San isidro-Dominical',
      conductor: 'Isac Newtom',
      image: 'https://semanariouniversidad.com/wp-content/uploads/2021/09/20210901_150423_HDR-scaled.jpg'
    },
    {
      id: 2,
      time: '11:00 AM',
      place: 'Quepos-San Isidro-Parrita',
      conductor: 'Jane Doe',
      image: 'https://motor.elpais.com/wp-content/uploads/2016/10/bus.jpg'
    },
    {
        id: 3,
        time: '1:00 PM',
        place: 'Quepos-Parrita',
        conductor: 'Roilan Cubillo' ,
        image: 'https://thumbs.dreamstime.com/z/coche-bus-waits-del-azul-real-para-los-pasajeros-54407302.jpg'
      },
      {
        id: 4,
        time: '1:00 PM',
        place: 'Quepos-Parrita',
        conductor: 'Roilan ' ,
        image: 'https://www.latercera.com/resizer/lFqCNwTBF35rGfJiskhL3KxrdZE=/1200x630/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/2PLW6MROHNE3ZI5LWFVBDALMKY.jpg'
      },
    // Agrega más horarios aquí
  ];
  
  const ScheduleCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {schedules.map((schedule) => (
          <Carousel.Item key={schedule.id}>
            <img
              className="d-block w-100"
              src={schedule.image}
              alt={`${schedule.place} with ${schedule.conductor}`}
            />
            <Carousel.Caption>
                <h3>Ruta</h3>
              <h3>{schedule.place}</h3>
              <h4>Conductor</h4>
              <p>{schedule.conductor}</p>
              <h4> Hora Salida</h4>
              <p>{schedule.time}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
  export default ScheduleCarousel;
  