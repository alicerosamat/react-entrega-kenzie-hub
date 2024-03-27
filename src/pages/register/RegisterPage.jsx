import style from '../../styles/style.module.scss'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '../../Schemas/formSchema'
import { Input } from '../Input/index'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

export const RegisterPage = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formSchema)
    })

    const userRegister = async (formData)=>{
        try{
            const {data} = await api.post('/users', formData)
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    
    
    return (
        <>
            <div>
                <span className={style.headerRegister}>
                    <h1>Kenzie Hub</h1>
                    <Link to='/'>
                        <button className={style.buttonBack}>Voltar</button>
                    </Link>
                </span>
                <div className={style.formBox}>
                    <h2>Crie sua conta</h2>
                    <h3>Rápido e grátis, vamos nessa</h3>
                    <form onSubmit={handleSubmit(userRegister)}>
                        <Input label='Nome' type='text' placeholder='Nome' {...register('name')} error={errors.name} />
                        <Input label='Email' type='email' placeholder='E-mail' {...register('email')} error={errors.email}/>
                        <Input label='Senha' type='password' placeholder='Senha' {...register('password')} error={errors.password}/>
                        <Input label='Confirmar senha' type='password' placeholder='Confirmar senha' {...register('confirmPassword')} error={errors.confirmPassword} />
                        <Input label='Bio' type='text' placeholder='Escreva sua bio' {...register('bio')} error={errors.bio}/>
                        <Input label='Contato' type='text' placeholder='Contato' {...register('contact')} error={errors.contact}/>
                        <div className={style.formItem}>
                            <label>Módulo</label>
                            <p>
                                <select {...register('module')} error={errors.module}>
                                    <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo</option>
                                    <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo</option>
                                    <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro Módulo</option>
                                    <option value='Quarto módulo (Backend Avançado)'>Quarto Módulo</option>
                                </select>
                            </p>
                        </div>
                        <button className={style.btnLogin} type='submit'>Cadastre-se</button>
                    </form>                    
                </div>
            </div>
        </>
    )
}