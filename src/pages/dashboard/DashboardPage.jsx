import style from '../../styles/style.module.scss'

export const DashboardPage = () => {
    const logOut = () => {
        
    }
    return (
        <>
        <header>
            <h1>Kenzie Hub</h1>
            <button onClick={()=>logOut()}>Sair</button>
        </header>
        <body>
            <div>
                <h2>Olá, nome do usuário</h2>
            </div>
            <div>
                <h3>Que pena! Estamos em desenvolvimento</h3>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </div>            
        </body>
        </>
    )
}