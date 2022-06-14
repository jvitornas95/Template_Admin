import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem";


export function MenuLateral() {

    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Home" icone={HomeIcon} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={SettingsIcon} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={BellIcon} />
            </ul>
            <ul>
                <MenuItem
                    onClick={() => console.log("Sair funcionando")}
                    texto="Sair" icone={LogoutIcon}
                    className={`
                        text-red-600 dark:text-red-400 dark:hover:text-white
                        hover:bg-red-400 hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}