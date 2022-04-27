import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Botao from '../components/Botao'
import Cliente from '../core/Cliente'
import Formulario from '../components/Formulario'
import { useState } from 'react'

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

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white  
    `}>      
       <Layout titulo="Cadastro Simples">           
              {visivel === 'tabela' ? ( 
                <>
                   <div className={`
                    flex justify-end
                  `}>            
                    <Botao cor="green" className={`
                                            mb-4
                    `} onClick={() => setVisivel('form')}>
                          Novo cliente
                    </Botao>
                  </div>          
                  <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>                
                </>                    
              ) : (
                <Formulario cliente={clientes[0]} clienteMudou={salvarCliente} cancelado={() => setVisivel('tabela')}></Formulario>
              )}                      
        </Layout>
    </div>
  )
}
