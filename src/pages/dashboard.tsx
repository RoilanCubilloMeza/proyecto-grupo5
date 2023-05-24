import Link from "next/link"

const dashboard=()=>{









    return (
        <div>
<Link  className="text-black text-decoration-none p-3 " href={'/anunciosRuta'} passHref>Rutas</Link>

<Link  className="text-black text-decoration-none p-3 " href={'/prueba'} passHref>prueba</Link>   
</div>)
}
export default dashboard