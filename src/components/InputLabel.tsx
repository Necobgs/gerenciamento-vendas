interface Props{
    placeholder?:string;
    type:'text'|'password';
    textLabel?:string;
    className?: string;
}

export default function InputLabel(props:Props){
    return (
        <div className={`flex items-start flex-col justify-center gap-1 ${props.className?? ""}`}>
            { props.textLabel &&
                    <label>{props.textLabel}</label>
            }
            <input 
            className="rounded-md p-1 w-full bg-white border-slate-300 border-[1px] outline-none"
            type={props.type}
            placeholder={props.placeholder?? ''}
            />
        </div>
    )
}