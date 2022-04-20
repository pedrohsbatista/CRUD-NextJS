import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Cliente A', 10, '1'),
    new Cliente('Cliente B', 20, '2'),
    new Cliente('Cliente C', 30, '3')
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white  
    `}>      
       <Layout titulo="Cadastro Simples">
            <Tabela clientes={clientes}></Tabela>
        </Layout>
    </div>
  )
}
