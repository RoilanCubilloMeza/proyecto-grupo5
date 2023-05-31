import Carrusel from "@/pages/AnunciosComercial";
import ScheduleCarousel from "@/components/CarruTiquetes";
import Marquee from "@/components/marque";

//TODO: Check the names in the file and functional component
const Rutes: React.FC = () => {
  return (
    <div  ><Marquee text={"Proximas Salidas"}/>    
      
      <div>
        <ScheduleCarousel/>
      </div>
      </div>
        
      )}
    
export default Rutes;
