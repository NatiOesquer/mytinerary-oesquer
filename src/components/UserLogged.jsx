
import { useSelector } from "react-redux"

import user_actions from "../store/actions/users"
const { signin,signout,user,user_google } = user_actions




export default function UserLogged(data) {
    
    let mail = useSelector((store) => store.users.user?.mail);
    let name = useSelector((store) => store.users.user?.name);
    let photo = useSelector((store) => store.users.user?.photo);
    console.log (data)

 

    return (
        <div>
            {mail && ( // Verifica si el usuario está autenticado

                <div className="flex flex-raw items-center drop-shadow-xl justify-center mb-10">
                    <img className="w-[200px] drop-shadow-xl rounded-full" src={photo} alt="photo user" />
                    <p className="p-5 font-bold drop-shadow-xl text-[24px]">Hola, {name}!</p>
                </div>
            )}
        </div>
    )
}
