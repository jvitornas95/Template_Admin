import { Layout } from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";


export default function Notificacoes() {

  const context = useAppData()

  return (
    <>
      <Layout title="Notificações" subtitle="Aqui voce ira gerenciar as suas notificações">
        <h3>{context.nome}</h3>
      </Layout>
    </>
  )
}
