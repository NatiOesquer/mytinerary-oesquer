import { useRef } from "react"
import axios from "axios"
import apiUrl from '../apiUrl'
import { Link as Anchor } from "react-router-dom"

export default function FormSingUp() {

  const name = useRef()
  const lastName = useRef()
  const country = useRef()
  const photo = useRef()
  const mail = useRef()
  const password = useRef()

  async function handleSignUp(){
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,

      } ;
      await axios.post(
        apiUrl + 'users/signup',
        data
      );
      console.log(data);

    } catch (error) {
        console.log(error);
    }
  }
  return (
    <form className="flex flex-col grow items-center justify-center">
      <input 
      ref={name}
      type="text"
      className="m-5 w-4/5 text-center underline"
      name="name"
      id="name"
      defaultValue=""
      placeholder="Type Name" />
      <input
        ref={lastName}
        type="text"
        className="m-5 w-4/5 text-center underline"
        name="lastName"
        id="lastName"
        defaultValue=""
        placeholder="Type Last Name"
      />
      <input
        ref={country}
        type="text"
        className="m-5 w-4/5 text-center underline"
        name="country"
        id="country"
        defaultValue=""
        placeholder="Type country"
      />
      <input
        ref={photo}
        type="text"
        className="m-5 w-4/5 text-center underline"
        name="photo"
        id="photo"
        defaultValue=""
        placeholder="Type Photo"
      />
      <input
        ref={mail}
        type="text"
        className="m-5 w-4/5 text-center underline"
        name="mail"
        id="mail"
        defaultValue=""
        placeholder="Type Mail"
      />
      <input
        ref={password}
        type="password"
        className="m-5 w-4/5 text-center underline"
        name="password"
        id="password"
        defaultValue=""
        placeholder="Type Password"
      />
      <input
        type="button"
        className="text-center cursor-pointer"
        value="Sign Up!"
        onClick={handleSignUp}
      />
      <p>
        Already have an account?
        <Anchor
          className="text-[20px] font-bold cursor-pointer"
          to='/auth/signin'
        >
          Sign in
        </Anchor>
      </p>
    </form>
  )
}
