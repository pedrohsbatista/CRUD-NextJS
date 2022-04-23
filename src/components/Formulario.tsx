import Entrada from "./Entrada"
import Botao from "./Botao"
import { useState } from 'react'
import Cliente from "../core/Cliente";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const[nome, setNome] = useState(props.cliente?.nome ?? "");
    const[idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            { id ? (<Entrada texto="Código" valor={props.cliente.id} somenteLeitura={true} className="mb-5" />) : false }            
            <Entrada texto="Nome"   valor={nome} valorMudou={setNome} className="mb-5" />
            <Entrada texto="Idade"  valor={idade} tipo="number" valorMudou={setIdade} />
            <div className={`
                  flex justify-end mt-7
                `}>
                <Botao cor="blue" className={`
                                            mr-2
                                            `}>
                    {id ? "Alterar" : "Salvar" }
                </Botao>
                <Botao>Cancelar</Botao>
            </div>
        </div>
    )
}