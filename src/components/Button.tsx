interface Props{
    textButton:string;
    className?: string;

}

export default function Button(props:Props){
    return (
        <div className={`flex items-start flex-col justify-center gap-1 ${props.className?? ""}`}>
            <button
            className="border-slate-300 border-[1px] rounded-md p-1 w-full h-full bg-white"
            >{props.textButton}</button>
        </div>
    )
}