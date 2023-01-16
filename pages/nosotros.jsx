import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'GuitarLA - Sobre GuitarLA, tienda de música'}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image 
            src='/img/nosotros.jpg'
            width={1000}
            height={800}
            alt={'imagen de nosotros'}
          />

          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam porro doloribus voluptates reiciendis. Necessitatibus facere saepe ullam fugit repellat, illum autem optio enim, molestiae facilis earum blanditiis quod id suscipit impedit? Officia, obcaecati tenetur amet dolor molestiae qui itaque optio! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error fugit illum possimus ducimus ea dolor soluta reprehenderit nihil provident voluptatibus?</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quas provident libero ea fuga assumenda optio soluta sunt velit minus, laboriosam corrupti ab odio. Quam et sequi incidunt, culpa voluptate adipisci consequatur perspiciatis! Obcaecati ullam omnis dicta adipisci. Quos voluptate adipisci natus maiores odio nisi aliquid sunt ipsam magnam corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor libero eligendi velit alias cum quas minus quibusdam dolores quod?</p>
          </div>
        </div>
      </main>

    </Layout>
  )
}
