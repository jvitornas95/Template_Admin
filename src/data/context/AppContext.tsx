import { createContext, useState } from "react";

type Theme = 'dark' | ``
interface IAppContextProps {
    theme?: Theme;
    alterTheme?: () => void;
    children?: any;
}

const AppContext = createContext<IAppContextProps>({});

export function AppProvider(props: IAppContextProps) {

    const [theme, setTheme] = useState<Theme>('dark');

    function alterTheme() {
        setTheme(theme === '' ? 'dark' : '')
    }

    return (
        <AppContext.Provider value={{
            theme,
            alterTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;