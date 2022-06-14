import Link from "next/link";

interface IMenuItemProps {
    texto: string;
    icone: any;
    url?: string;
    className?: string;
    onClick?: (event: any) => void;
}

export function MenuItem({ url, icone, texto, onClick, className }: IMenuItemProps) {

    function renderContent() {
        return (
            <a className={`
                flex flex-col justify-center items-center
                w-20 h-20 text-gray-600 dark:text-gray-200 ${className}
            `}>
                {icone}
                <span className="text-xs font-light ">{texto}</span>
            </a>
        )
    }

    return <li onClick={onClick} className={`
        hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-pointer
    `}>
        {url ? (
            <Link href={url}>
                {renderContent()}
            </Link>
        ) : (
            renderContent()
        )}

    </li>
}