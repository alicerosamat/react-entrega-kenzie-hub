import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from '../Schemas/loginSchema'
import style from '../styles/style.module.scss'
import { Input } from './Input'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(loginSchema),
    })
    
    const logIn = (formData)=> {
        console.log (formData)        
    }

    

    return (
        <>
            <div className={style.loginBox}>
                <h1>Kenzie Hub</h1>
                <div className={style.formBox}>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(logIn)} >
                        <Input label='Email' type='email' placeholder='Email' {...register('email')} error={errors.email} />
                        <Input label='Senha' type='password' placeholder='Senha' {...register('password')} error={errors.password} />
                        <button className={style.btnLogin} type='submit' >Entrar</button>
                    </form>                    
                    <p>Ainda não possui uma conta?</p>
                        <Link to='/register'>
                            <button className={style.btnRegister} type='button'>
                            Cadastre-se
                            </button>
                        </Link>                  
                </div>
            </div>
        </>
    )
}