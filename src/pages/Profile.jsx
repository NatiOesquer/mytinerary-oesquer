import { useRef, useState } from "react";
import User from "../components/User";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
const { update_user } = user_actions;

export default function Profile() {

  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const password = useRef("");
  const [show, setShow] = useState(false);
  const user = useSelector((store) => store.users.user);

  const dispatch = useDispatch();
  async function handleUpdate() {
    try {
      let data = {};
      if (name.current.value) {
        data.name = name.current.value;
      }
      if (lastName.current.value) {
        data.lastName = lastName.current.value;
      }
      if (country.current.value) {
        data.country = country.current.value;
      }
      if (photo.current.value) {
        data.photo = photo.current.value;
      }
      if (password.current.value) {
        data.password = password.current.value;
      }

      dispatch(update_user({ data }));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* <div className="w-[50%] flex items-center pl-20 pb-16 justify-center text-center">
          <h1 className="text-4xl flex items-center justify-center mx-3 font-bold " >My Tinerary</h1>

        </div> */}
      <div className="flex flex-col flex-grow items-center justify-center flex-wrap md:flex-row md:justify-evenly bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(./img/grass.webp)` }}>

        <User user={user} show={show} setShow={setShow} />
        {show && (
          <form className="flex flex-col items-center justify-center p-[20px] w-[360px] h-[500px] rounded-xl sm:mb-8 sm:bg-slate-300 bg-white my-[20px] md:my-0">
            <h1 className="text-[36px] font-bold text-center mb-[10px]">
              Update!
            </h1>
            <input
              ref={name}
              type="text"
              className="w-[346px] h-[40px] text-black text-[20px] bg-gray-200 hover:bg-white border-2 rounded-xl border-gray-400 text-center mb-[20px] py-2 px-4"
              name="name"
              id="name"
              defaultValue=""
              placeholder="Type Name"
            />
            <input
              ref={lastName}
              type="text"
              className="w-[346px] h-[40px] text-black text-[20px] bg-gray-200 hover:bg-white border-2 rounded-xl border-gray-400 text-center mb-[20px] py-2 px-4"
              name="lastName"
              id="lastName"
              defaultValue=""
              placeholder="Type Last Name"
            />
            <input
              ref={country}
              type="text"
              className="w-[346px] h-[40px] text-black text-[20px] bg-gray-200 hover:bg-white border-2 rounded-xl border-gray-400 text-center mb-[20px] py-2 px-4"
              name="country"
              id="country"
              defaultValue=""
              placeholder="Type Country"
            />
            <input
              ref={photo}
              type="text"
              className="w-[346px] h-[40px] text-black text-[20px] bg-gray-200 hover:bg-white border-2 rounded-xl border-gray-400 text-center mb-[20px] py-2 px-4"
              name="photo"
              id="photo"
              defaultValue=""
              placeholder="Type Photo"
            />
            <input
              ref={password}
              type="password"
              className="w-[346px] h-[40px] text-black text-[20px] bg-gray-200 hover:bg-white border-2 rounded-xl border-gray-400 text-center mb-[20px] py-2 px-4"
              name="password"
              id="password"
              defaultValue=""
              placeholder="Type Password"
            />
            <input
              type="button"
              className="rounded-md bg-[#4F46E5] mb-[10px] mt-[40px] p-2 hover:bg-gray-400 font-bold hover:text-black text-white text-[20px] text-center cursor-pointer w-[300px] h-13 p-1 mr-2 "
              value="Update!"
              onClick={handleUpdate}
            />
          </form>
        )}
      </div>
    </>
  );
}