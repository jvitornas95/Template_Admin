interface IConteudo {
    children?: any
}

export function Conteudo({ children }: IConteudo) {

    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-200
        `}>
            {children}
        </div>
    )
}