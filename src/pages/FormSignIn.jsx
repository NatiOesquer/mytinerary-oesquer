import { useRef } from "react"
import { Link as Anchor } from "react-router-dom"
//import axios from "axios"
//import apiUrl from "../apiUrl"

export default function FormSignIn() {

    const mail_signin = useRef()
    const password_signin = useRef()

    async function handleSignIn(){
        let data = {
            mail: mail_signin.current.value,
            password: password_signin.current.value,
        };
        console.log(data);
    }

  return (
    <form className="flex flex-col grow justify-center items-center w-4/5 ">

      <input 
      ref={mail_signin}
      type="text"
      className="m-5 py-4 w-[40%] text-center "
      name="mail_signin"
      id="mail_signin"
      defaultValue=""
      placeholder="Type Mail" />
      <input 
      ref={password_signin}
      type="text"
      className="m-5 py-4 w-[40%] text-center "
      name="password_signin"
      id="password_signin"
      defaultValue=""
      placeholder="Type Password" />
      <input
        type="button"
        className="text-white w-[40%] text-center bg-[#4F46E5] cursor-pointer"
        value="Sign In!"
        onClick={handleSignIn}
      />
        <p className="text-center">
        Don't you have an account?
        <Anchor
          className="text-[20px] font-bold  cursor-pointer"
          to='/auth/signup'
        >
          Sign up
        </Anchor>
      </p>
    </form>
  )
}
