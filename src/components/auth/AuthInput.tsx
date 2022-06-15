interface IAuthInputProps {
    label: string;
    value: any;
    required?: boolean;
    tipo?: 'text' | 'email' | 'password';
    notRenderIf?: boolean;
    handleValue: (newValue: any) => void;
}

export default function AuthInput({ label, value, tipo, required, notRenderIf, handleValue }: IAuthInputProps) {

    return notRenderIf ? null : (
        <div className={`flex flex-col mt-4`}>
            <label>{label}</label>
            <input
                type={tipo ?? 'text'}
                value={value}
                onChange={e => handleValue?.(e.target.value)}
                required={required}
                className={`
                    px-4 py-3 rounded-lg outline-none
                    bg-gray-200 mt-2 focus:bg-white
                    border focus:border-blue-500
                `}
            />
        </div>
    )
}
