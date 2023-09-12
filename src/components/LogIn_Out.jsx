
import { Link as Anchor, useNavigate } from "react-router-dom"
import IconLogin from "./IconLogin"
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users"
import Swal from "sweetalert2";
import UserLogged from "./UserLogged";
const { signout } = user_actions





export default function LogIn_Out() {
    const navigate = useNavigate();
    // Función para manejar la acción de logout
    const handleLogout = () => {
        // Realiza la acción de logout aquí

        Swal.fire({
            title: 'Do you want to exit?',
            color: '#4F46E5',

            showCancelButton: true,
            confirmButtonText: 'Ok!',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(signout());
                navigate("/");
            } else if (result.isDenied) {
                Swal.fire('Continue', '', 'info')
            }
        })

    };

    let photo = useSelector((store) => store.users.user?.photo);
    let mail = useSelector((store) => store.users.user?.mail);
    let dispatch = useDispatch();
    return (
        <div>

            {mail ? ( // Verifica si el usuario está autenticado
                <div className=" flex items-center justify-center">
                    <Anchor to='/profile' className=" text-center md:font-bold font-size: 16px p-4 hover:bg-blue-300 rounded-lg">Profile
                    </Anchor>
                    <button
                        className="flex items-center justify-center font-bold gap-2 bg-[#4F46E5] py-2 w-[150px] text-white rounded-lg hover:bg-blue-300 hover:text-slate-900"
                        onClick={handleLogout}
                    >
                        <img className=" w-[40px] rounded-full" src={photo} alt="Photo User" /> Log Out
                    </button>
                </div>

            ) : (
                // Si el usuario no está autenticado, muestra el botón de Log In
                <Anchor
                    to="/auth/signin"
                    className="flex items-center font-bold gap-2 bg-white  px-3 py-2 w-[100px] text-slate-700 rounded-lg hover:bg-blue-300 hover:text-slate-900"
                    style={{ backgroundColor: "#4F46E5", color: "white" }}
                >

                    <IconLogin />
                    Login
                </Anchor>
            )}
        </div>
    )
}



