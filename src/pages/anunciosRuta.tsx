import Carrusel from "@/components/CarruComercial";
import ScheduleCarousel from "@/components/CarruTiquetes";
import Marquee from "@/components/marque";


const Rutes: React.FC = () => {
  return (
    <div  ><Marquee text={"Proximas Salidas"}/>    
      
      <div>
        <ScheduleCarousel/>
      </div>
      </div>
        
      )}
    
export default Rutes;
