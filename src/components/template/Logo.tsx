export function Logo() {

    return (
        <div className={`
        flex flex-col justify-center items-center
        h-10 w-10
            bg-white rounded-full
        `}>
            <div className={`h-3 w-3 rounded-full bg-red-600 mb-0.5`} />
            <div className={`flex`}>
                <div className={`h-3 w-3 rounded-full bg-yellow-500 mr-0.5`} />
                <div className={`h-3 w-3 rounded-full bg-green-600 ml-0.5`} />
            </div>
        </div>
    )
}