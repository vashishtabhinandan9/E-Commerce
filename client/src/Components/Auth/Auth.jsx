import { useState, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../Redux/User/User_Atom";
export function SignIn() {
  const [AlreadyUser, setAlreadyUser] = useState(false);
  const [User, setUserState] = useRecoilState(userState);
  const SignInEmailRef = useRef();
  const SignInPasswordRef = useRef();
  const SignUpEmailRef = useRef();
  const SignUpPasswordRef = useRef();
  const FirstNameRef = useRef();
  const LastNameRef = useRef();
  const PhoneRef = useRef();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("signin", {
        Email: SignInEmailRef.current.value,
        Password: SignInPasswordRef.current.value,
      });
      const { token } = res.data.token;
      // Save token to local storage
      localStorage.setItem("jwtToken", token);
      setUserState(res.data.User);
    } catch (error) {}
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("signup", {
        FirstName: FirstNameRef.current.value,
        LastName: LastNameRef.current.value,
        Email: SignUpEmailRef.current.value,
        Password: SignUpPasswordRef.current.value,
        Phone: PhoneRef.current.value,
      });
      if (res.success) {
        //prrint a message that say now do the login

        setAlreadyUser(true); //redirect to the login screen
      }
    } catch (err) {
      console.log(err);
    }
  };

  function GoogleAuth() {
    window.location.href = "http://localhost:3000/auth/google";
  }

  return (
    <>
      <h1 className="absolute top-2 left-10 font-medium font-sans text-lg antialiased text-gray-700">
        {" "}
        {AlreadyUser ? "LOGIN" : "REGISTER"}{" "}
      </h1>
      {AlreadyUser && (
        <>
          <form
            className="  mx-auto  py-2 px-8 w-full  flex flex-col "
            onSubmit={handleSignIn}
          >
            <div className="flex flex-col relative my-4">
              <input
                required
                ref={SignInEmailRef}
                id="Email"
                type="text"
                className="w-11/12 h-8 peer  p-2.5 rounded-sm outline-none border  border-gray-300 focus:border-black text-sm "
              ></input>
              <label
                for="Email"
                className="px-2 font-light absolute justify-self-center text-gray-500 h-6 text-sm tansition-transform ease-out duration-300 peer-focus:-translate-y-4  peer-focus:scale-75 peer-valid:-translate-y-4  peer-valid:scale-75 peer-focus:bg-white peer-focus:border-x peer-focus:border-black   peer-valid:bg-white peer-valid:border-x peer-valid:border-black"
              >
                Email{" "}
                <span className="text-red-500 text-lg font-bold"> * </span>
              </label>
            </div>

            <div className="flex flex-col relative my-4 ">
              <input
                required
                ref={SignInPasswordRef}
                id="Password"
                type="password"
                className="w-11/12 h-8 peer  p-2.5 rounded-sm outline-none border  border-gray-300 focus:border-black text-base "
              ></input>
              <label
                for="Password"
                className="px-2 font-light absolute text-gray-500 h-6 text-sm tansition-transform ease-out duration-300 peer-focus:-translate-y-4  peer-focus:scale-75 peer-valid:-translate-y-4  peer-valid:scale-75 peer-focus:bg-white peer-focus:border-x peer-focus:border-black   peer-valid:bg-white peer-valid:border-x peer-valid:border-black"
              >
                Password{" "}
                <span className="text-red-500 text-lg font-bold"> * </span>
              </label>
            </div>

            <p className="underline w-max text-teal-500 antialiased">
              Forgot your Password
            </p>

            <button
              type="submit"
              className="text-white font-serif bg-gray-950 hover:bg-neutral-900 outline-none font-medium rounded-lg text-base w-2/5  py-2.5 my-4  text-center "
            >
              SIGN IN
            </button>

            <p
              onClick={() => setAlreadyUser(false)}
              className="underline w-max text-teal-500 my-4 antialiased hover:cursor-pointer"
            >
              New customer? Create your account
            </p>
          </form>
          <button
            onClick={GoogleAuth}
            className="flex p-2 items-center gap-4 mx-auto  rounded-lg  w-10/11 border border-gray-400 bg-white text-black text-lg hover:bg-gray-100 hover:border-black"
          >
            Signin With Google <FcGoogle />
          </button>
        </>
      )}

      {!AlreadyUser && (
        <>
          <form
            className="  mx-auto  py-2 px-8 w-full  flex flex-col "
            onSubmit={handleSignUp}
          >
            <div className="flex flex-col relative my-4">
              <input
                required
                ref={FirstNameRef}
                id="FirstName"
                aria-label="txtFirstName"
                type="text"
                className="w-11/12 h-8 peer  p-2.5 rounded-sm outline-none border  border-gray-300 focus:border-black text-sm "
              ></input>
              <label
                for="FirstName"
                className="px-2 font-light absolute justify-self-center text-gray-500 h-6 text-sm tansition-transform ease-out duration-300 peer-focus:-translate-y-4  peer-focus:scale-75 peer-valid:-translate-y-4  peer-valid:scale-75 peer-focus:bg-white peer-focus:border-x peer-focus:border-black   peer-valid:bg-white peer-valid:border-x peer-valid:border-black"
              >
                First Name{" "}
                <span className="text-red-500 text-lg font-bold"> * </span>
              </label>
            </div>

            <div className="flex flex-col relative my-4 ">
              <input
                required
                ref={LastNameRef}
                id="LastName"
                aria-label="txtLastName"
                type="text"
                className="w-11/12 h-8 peer  p-2.5 rounded-sm outline-none border  border-gray-300 focus:border-black text-base "
              ></input>
              <label
                for="LastName"
                className="px-2 font-light absolute text-gray-500 h-6 text-sm tansition-transform ease-out duration-300 peer-focus:-translate-y-4  peer-focus:scale-75 peer-valid:-translate-y-4  peer-valid:scale-75 peer-focus:bg-white peer-focus:border-x peer-focus:border-black   peer-valid:bg-white peer-valid:border-x peer-valid:border-black"
              >
                Last Name{" "}
                <span className="text-red-500 text-lg font-bold"> * </span>
              </label>
            </div>

            <div className="flex flex-col relative my-4">
              <input
                required
                ref={SignUpEmailRef}
                id="Email"
                type="text"
                className="w-11/12 h-8 peer  p-2.5 rounded-sm outline-none border  border-gray-300 focus:border-black text-sm "
              ></input>
              <label
                for="Email"
                className="px-2 font-light absolute justify-self-center text-gray-500 h-6 text-sm tansition-transform ease-out duration-300 peer-focus:-translate-y-4  peer-focus:scale-75 peer-valid:-translate-y-4  peer-valid:scale-75 peer-focus:bg-white peer-focus:border-x peer-focus:border-black   peer-valid:bg-white peer-valid:border-x peer-valid:border-black"
              >
                Email{" "}
                <span className="text-red-500 text-lg font-bold"> * </span>
              </label>
            </div>

            <div className="flex flex-col relative my-4 ">
              <input
                required
                ref={SignUpPasswordRef}
                id="Password"
                type="password"
                className="w-11/12 h-8 peer  p-2.5 rounded-sm outline-none border  border-gray-300 focus:border-black text-base "
              ></input>
              <label
                for="Password"
                className="px-2 font-light absolute text-gray-500 h-6 text-sm tansition-transform ease-out duration-300 peer-focus:-translate-y-4  peer-focus:scale-75 peer-valid:-translate-y-4  peer-valid:scale-75 peer-focus:bg-white peer-focus:border-x peer-focus:border-black   peer-valid:bg-white peer-valid:border-x peer-valid:border-black"
              >
                Password{" "}
                <span className="text-red-500 text-lg font-bold"> * </span>
              </label>
            </div>

            <div className="flex flex-col relative my-4 ">
              <input
                required
                ref={PhoneRef}
                type="number"
                id="Phoneno"
                className="w-11/12 h-8 peer  p-2.5 rounded-sm outline-none border  border-gray-300 focus:border-black text-base "
              ></input>
              <label
                for="Phoneno"
                className="px-2 font-light absolute text-gray-500 h-6 text-sm tansition-transform ease-out duration-300 peer-focus:-translate-y-4  peer-focus:scale-75 peer-valid:-translate-y-4  peer-valid:scale-75 peer-focus:bg-white peer-focus:border-x peer-focus:border-black   peer-valid:bg-white peer-valid:border-x peer-valid:border-black"
              >
                Phone{" "}
                <span className="text-red-500 text-lg font-bold"> * </span>
              </label>
            </div>

            <p className="text-wrap text-slate-500 text-xs antialiasedm ">
              Your personal data will be used to support your experience
              throughout this website,to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>

            <button
              type="submit"
              className="text-white font-serif bg-gray-950 hover:bg-neutral-900 outline-none font-medium rounded-lg text-base w-2/5  py-2.5 my-4  text-center "
            >
              REGISTER
            </button>

            <p
              onClick={() => setAlreadyUser(true)}
              className="underline w-max  text-sky-400 my-4 antialiased hover:cursor-pointer"
            >
              Already have an account? Login here
            </p>
          </form>

          <button
            onClick={GoogleAuth}
            className="flex p-2 items-center gap-4 mx-auto  rounded-lg  w-10/11 border border-gray-400 bg-white text-black text-lg hover:bg-gray-100 hover:border-black"
          >
            Signin With Google <FcGoogle />
          </button>
        </>
      )}

      {User && <></>}
    </>
  );
}
