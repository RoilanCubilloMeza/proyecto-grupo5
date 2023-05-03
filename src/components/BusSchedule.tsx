import { useCollection } from "react-firebase-hooks/firestore";
import moment from "moment";

const BusSchedule = () => {
    const [schedules] = useCollection();
  
    return (
      <table>
        <thead>
          <tr>
            <th>Origen</th>
            <th>Destino</th>
            <th>Salida</th>
            <th>Llegada</th>
          </tr>
        </thead>
        <tbody>
          {schedules?.docs.map((schedule) => {
            const data = schedule.data();
            const departureTime = moment(
              data.departureTime.toDate()
            ).format("HH:mm");
            const arrivalTime = moment(
              data.arrivalTime.toDate()
            ).format("HH:mm");
            return (
              <tr key={schedule.id}>
                <td>{data.origin}</td>
                <td>{data.destination}</td>
                <td>{departureTime}</td>
                <td>{arrivalTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  export default BusSchedule;