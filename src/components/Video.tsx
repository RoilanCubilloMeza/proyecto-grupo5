import React from "react";
import { global } from "styled-jsx/css";

interface VideoProps {
  videoId: string;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
  return (

 
<div
  id="carouselVideoExample"
  className="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="ratio ratio-16x9">
  <iframe
    src="https://www.youtube.com/embed/Esv4AqWC72E"
    title="YouTube video"
    
  ></iframe>
</div>
      <div className="carousel-caption d-none d-md-block">
        <h5>Comercial 1 </h5>
        <p>
          empresa:
        </p>
      </div>
    </div>

    <div className="carousel-item">
    <div className="ratio ratio-16x9">
  <iframe
    src="https://www.youtube.com/embed/vlDzYIIOYmM"
    title="YouTube video"
    allowFullScreen
  ></iframe>
</div>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    <div className="carousel-item">
    <div className="ratio ratio-16x9">
  <iframe
    src="https://www.youtube.com/embed/vlDzYIIOYmM"
    title="YouTube video"
    allowFullScreen
  ></iframe>
</div>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </div>
    </div>
  </div>
  
  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselVideoExample"
    data-mdb-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
};

export default Video;
