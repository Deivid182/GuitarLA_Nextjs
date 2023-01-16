import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'

export default function Guitarra({guitarra}) {

  const { nombre, descripcion, precio, url, imagen } = guitarra

  return (
    <div className={styles.guitarra}>
      <Image 
        src={imagen.data.attributes.url}
        width={300}
        height={200}
        alt={`imagen de guitarra ${nombre}`}
      />

      <div className={styles.contenido}>
        <h3>{nombre} </h3>
        <p className={styles.descripcion}>{descripcion} </p>
        <p className={styles.precio}>${precio} </p>

        <Link href={`/guitarras/${url}`} legacyBehavior>
          <a className={styles.enlace}>
            Ver Producto
          </a>          
        </Link>
      </div>
    </div>

  )
}
