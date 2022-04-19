import Titulo from '../components/Titulo'

interface LayoutProps {
    //titulo?: string, ? torna a propriedade opcional de ser passada pelo componente
    titulo: string,
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
          flex flex-col w-2/3
          bg-white text-gray-800 round-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className={`
                p-6            
            `}>
                {props.children}
            </div>
        </div>
    )
}