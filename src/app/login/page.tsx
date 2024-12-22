import Button from "@/components/Button";
import InputLabel from "@/components/InputLabel";
import Switch from "@/components/Switch";
import Link from "next/link";

export default function Login(){
    return (
        <main className="h-screen w-screen flex items-center justify-center">
            <section className="flex justify-center items-center flex-col px-[2vw] w-[30vw] py-[15vh] rounded-3xl gap-4 shadow-xl bg-slate-50">
                <h1 className="">Login</h1>
                <InputLabel type="text" textLabel="Nome de usuário" className='w-[20vw]'></InputLabel>
                <InputLabel type="password" textLabel="Senha" className='w-[20vw]'></InputLabel>
                <div className="flex justify-between w-[20vw] items-center">
                    <div className="flex flex-row gap-2 items-center">
                        <Switch/>
                        <span className="text-[15px]">Lembrar senha</span>
                    </div>
                    <Link href={'#'} className="text-[15px]">Esqueci minha senha</Link>    
                </div>
                <Button textButton="Entrar" className="w-[20vw] mt-8"></Button>
            </section>
        </main>
    )
}