import { Title } from "./Title";

interface ITopBarProps {
    title: string;
    subtitle: string;
}

export function TopBar({ title, subtitle }: ITopBarProps) {

    return (
        <div>
            <Title subtitle={subtitle} title={title} />
        </div>
    )
}