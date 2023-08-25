import { useRef } from "react"
import { Link as Anchor } from "react-router-dom"
import axios from "axios"
import apiUrl from "../apiUrl"

export default function FormSignIn() {

    const mail_sigin = useRef("")
    const password_signin = useRef("")

    async function handleSignIn(){
        let data = {
            mail: mail_sigin.current.value,
            password: password_signin.current.value,
        };
        console.log(data);
    }

  return (
    <form >

    </form>
  )
}
