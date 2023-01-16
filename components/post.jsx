import Link from "next/link"
import Image from "next/image"
import styles from '../styles/blog.module.css'
import { formatoFecha } from "../utils/helpers"
export default function Post({post}) {

  const { contenido, imagen, titulo, url, publishedAt } = post

  return (
    <article className={styles.post}>
      <Image 
        src={`${imagen.data.attributes.url}`}
        width={600}
        height={400}
        alt={`imagen de post ${titulo}`}
      />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatoFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido} </p>

        <Link
          legacyBehavior
          href={`/blog/${url}`}
        >
          <a className={styles.enlace}>Leer Post</a>
        </Link>
      </div>
    </article>
  )
}
