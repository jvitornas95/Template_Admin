import useAppData from "../../data/hook/useAppData";
import { ButtonAlterTheme } from "./ButtonAlterTheme";
import { Title } from "./Title";

interface ITopBarProps {
    title: string;
    subtitle: string;
}

export function TopBar({ title, subtitle }: ITopBarProps) {

    const { theme, alterTheme } = useAppData()

    return (
        <div className={`flex `}>
            <Title subtitle={subtitle} title={title} />
            <div className={`flex flex-grow justify-end`}>
                <ButtonAlterTheme theme={theme} alterTheme={alterTheme} />
            </div>
        </div>
    )
}