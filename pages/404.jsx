import Layout from "../components/layout"
import Link from "next/link"
export default function Pagina404() {
  return (
    <Layout
      title="Pagina NO encontrada"
    >
    <div className="contenedor">

      <p className="error">Not Found</p>
      <Link
        legacyBehavior
        href={'/'}
      >
      <a className="error-enlace">Volver al Inicio</a>
      </Link>
    </div>
    </Layout>
  )
}
