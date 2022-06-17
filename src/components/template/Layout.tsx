import useAppData from "../../data/hook/useAppData";
import { Conteudo } from "./Conteudo";
import { MenuLateral } from "./MenuLateral";
import { TopBar } from "./TopBar";

interface ILayoutProps {
    title: string;
    subtitle: string;
    children?: any;
}

export function Layout({ title, subtitle, children }: ILayoutProps) {

    const { theme } = useAppData();

    return (
        <div className={`
            ${theme} 
            flex h-screen w-screen
        `}>
            <MenuLateral />
            <div className={`
                flex flex-col w-screen p-7 
                bg-gray-300 dark:bg-gray-800
            `}>
                <TopBar title={title} subtitle={subtitle} />
                <Conteudo>
                    {children}
                </Conteudo>
            </div>
        </div>
    )
}