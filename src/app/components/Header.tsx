import { useContext } from "react"
import { LoggedUserContext } from "../Contexts/LoggdeUser"

export const Header = () => {
    const LoggedUserCtx = useContext(LoggedUserContext);
    const handleLogout = () => {
        LoggedUserCtx?.setName('')
    }

    return(
        <header>
            <h1 className="text-3xl">Titulo da página</h1>
            {LoggedUserCtx?.name &&
                <>
                    <p>Usuário Logado: {LoggedUserCtx?.name}</p>
                    <button onClick={handleLogout}>Sair</button>
                </>
            }
            {(!LoggedUserCtx || LoggedUserCtx?.name === '') &&
                <p>Usuário DESLOGADO</p>
            }

            

        </header>
    )
}