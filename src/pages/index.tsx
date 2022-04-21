import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Cliente A', 10, '1'),
    new Cliente('Cliente B', 20, '2'),
    new Cliente('Cliente C', 30, '3')
  ]

  function clienteSelecionado(cliente: Cliente){
  }

  function clienteExcluido(cliente: Cliente){    
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white  
    `}>      
       <Layout titulo="Cadastro Simples">
            <div className={`
              flex justify-end
            `}>
              <Botao cor="green" className={`
                    mb-4
                `}>
                  Novo cliente
              </Botao>
            </div>          
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        </Layout>
    </div>
  )
}
