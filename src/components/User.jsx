export default function Users({ user, show, setShow }) {
    return (
      <div className="w-[360px] h-[500px] rounded-xl flex flex-col justify-center items-center sm:bg-slate-300 bg-white p-[20px] mt-[20px] md:mt-0">
        <p className="my-2 text-center font-bold text-[20px]">{user.name}</p>
        <p className="my-2 text-center font-bold text-[20px]">{user.lastName}</p>
        <p className="my-2 text-center font-bold text-[20px]">{user.country}</p>
        <img className="my-2 h-full object-cover rounded-full" src={user.photo} />
        {show ? (
          <input
            type="button"
            className="w-full shadow bg-[#4F46E5] hover:bg-gray-300 hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            value="Hide!"
            onClick={() => setShow(!show)}
          />
        ) : (
          <input
            type="button"
            className="w-full shadow bg-[#4F46E5] hover:bg-gray-300 hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
            value="Update!"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
    );
  }