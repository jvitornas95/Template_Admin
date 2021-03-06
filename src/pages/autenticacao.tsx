import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { WarningIcon } from "../components/icons";

export default function Autenticacao() {

    const [mode, setMode] = useState<'login' | 'cadastro'>('login');
    const [error, setError] = useState(null);
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function submmit() {
        if (mode === 'login') {
            console.log('login')
        } else {
            console.log('Cadastrar')
        }
    }

    function renderError(text, time = 5) {
        setError(text)
        setTimeout(() => setError(null), time * 1000)
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                <div className="hidden md:block md:w-1/2 lg:w-2/3">
                    <img
                        className="h-screen w-full object-cover"
                        src="https://source.unsplash.com/random"
                        alt="Imagem da tela de autenticação"
                    />
                </div>
                <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                    <h1 className={`
                        text-3xl font-bold mb-5
                    `}>
                        {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
                    </h1>

                    {error && (
                        <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                            {WarningIcon}
                            <span className="ml-3">{error}</span>
                        </div>
                    )}


                    <AuthInput
                        value={email}
                        tipo="email"
                        handleValue={setEmail}
                        label={"Email"}
                        required
                    />

                    <AuthInput
                        value={senha}
                        tipo="password"
                        handleValue={setSenha}
                        label={"Senha"}
                        required
                    />

                    <button onClick={submmit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                        {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                    </button>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button onClick={submmit} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>
                        Entrar com Google
                    </button>

                    {mode === 'login' ? (
                        <p className="mt-8">
                            Novo por aqui?
                            <a onClick={() => setMode('cadastro')} className={`
                                text-blue-500 hover:text-blue-700 font-semibold 
                                cursor-pointer
                            `}> Crie uma conta gratuitamente
                            </a>
                        </p>
                    ) : (
                        <p className="mt-8">
                            Ja faz parte da nossa comunidade?
                            <a onClick={() => setMode('cadastro')} className={`
                                text-blue-500 hover:text-blue-700 font-semibold 
                                cursor-pointer
                            `}> Entre com as suas credenciais
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}