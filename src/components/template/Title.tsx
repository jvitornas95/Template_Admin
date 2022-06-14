interface ITitleProps {
    title: string;
    subtitle: string;
}

export function Title({ title, subtitle }: ITitleProps) {

    return (
        <div>
            <h1 className={`
                font-black text-3xl 
                text-gray-900 dark:text-gray-100
            `}>
                {title}
            </h1>
            <h3 className={`
                font-light text-sm 
                text-gray-600 dark:text-gray-300
            `}>
                {subtitle}
            </h3>
        </div>
    )
}