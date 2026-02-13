import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ShaderBackground from "../styles/Gradientbackground";
import dark from "../assets/Flow_Dark.png";
import light from "../assets/Flow_Light.png";

interface LoginProps {
  email: string;
  password: string;
}
export const Login = () => {
  const { toggleTheme, theme } = useTheme();
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [loginFormData, setLoginFormData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onLogin = () => {
    console.log(loginFormData);
  };
  return (
    <div className="flex gap-4 items-center justify-center h-screen bg-background px-4">
      <div
        className="h-[95%] w-[90%] hidden lg:flex
    rounded-3xl  items-center justify-center relative overflow-visible
   "
      >
        <ShaderBackground />
        <div className="absolute top-0 left-0 w-32 h-12 inset-0 z-0">
          <img
            src={theme === "dark" ? dark : light}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="h-[95%] w-[90%]  flex justify-center items-center">
        <button
          onClick={toggleTheme}
          className="rounded-md absolute top-4 right-4 bg-primary px-3 py-2 text-text border"
        >
          Toggle theme
        </button>
        {/* {tab === "login" ? ( */}
        <div className=" w-1/2 ">
          <span className="flex flex-col items-center mb-15">
            <h2 className=" text-text text-2xl font-bold mb-4">
              {tab === "login" ? "Login" : "Sign Up"}
            </h2>
            <p className="text-text">
              {tab === "login"
                ? "Enter your Credentials to login into your account"
                : "Enter your details to create a new account"}
            </p>
          </span>

          <span className="text-text grid grid-cols-2 justify-center items-center gap-4 mb-4">
            <button className="flex items-center gap-2 px-2 py-2 border rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Google
            </button>
            <button className="flex items-center gap-2 px-2 py-2 border rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 25"
              >
                <title>github</title>
                <path
                  fill="currentColor"
                  d="M12 .568a12 12 0 1 0 0 24a12 12 0 0 0 0-24m3.163 21.783h-.093a.52.52 0 0 1-.382-.14a.52.52 0 0 1-.14-.372v-1.406q.01-.702.01-1.416a3.7 3.7 0 0 0-.151-1.029a1.83 1.83 0 0 0-.542-.874a8 8 0 0 0 2.038-.471a4.05 4.05 0 0 0 1.466-.964a3.84 3.84 0 0 0 .885-1.507a6.8 6.8 0 0 0 .3-2.129a4.1 4.1 0 0 0-.26-1.476a3.9 3.9 0 0 0-.795-1.284q.113-.283.162-.583a3.6 3.6 0 0 0-.04-1.376a5 5 0 0 0-.221-.763a.3.3 0 0 0-.111-.02h-.11a2.3 2.3 0 0 0-.674.11q-.36.106-.703.261a7 7 0 0 0-.661.343q-.322.192-.573.362a9.6 9.6 0 0 0-5.143 0a14 14 0 0 0-.572-.362a6 6 0 0 0-.672-.343a4.5 4.5 0 0 0-.705-.26a2.2 2.2 0 0 0-.662-.112h-.11a.3.3 0 0 0-.11.02a6 6 0 0 0-.23.764a3.8 3.8 0 0 0-.081.773q0 .304.051.603q.05.3.16.583a3.9 3.9 0 0 0-.792 1.284a4.1 4.1 0 0 0-.263 1.476a6.9 6.9 0 0 0 .292 2.119c.181.564.483 1.082.884 1.517c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633a3 3 0 0 0-.2.744a2.75 2.75 0 0 1-1.175.27a1.8 1.8 0 0 1-1.065-.301a2.9 2.9 0 0 1-.752-.823a3 3 0 0 0-.292-.382a2.7 2.7 0 0 0-.372-.343q-.2-.15-.432-.24a1.2 1.2 0 0 0-.481-.101q-.06 0-.12.01a.7.7 0 0 0-.162.02a.4.4 0 0 0-.13.06a.12.12 0 0 0-.06.1a.33.33 0 0 0 .14.242q.14.111.232.171l.03.02q.2.156.382.333q.169.148.3.331q.136.178.231.38q.11.202.231.464c.188.473.522.874.954 1.145c.453.243.961.364 1.476.351q.262 0 .522-.03q.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.285 10.285 0 1 1 6.324 0z"
                />
              </svg>
              Git Hub
            </button>
          </span>
          <span className="flex gap-4 justify-center items-center text-text">
            <hr className="w-full" />
            <p>Or</p>
            <hr className="w-full" />
          </span>
          {tab === "login" ? (
            <>
              <form onSubmit={(e) => {e.preventDefault(); onLogin();}} className="">
                <span>
                  <label htmlFor="email" className="text-text">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleLoginInputChange}
                    className="block w-full mt-2 dark:bg-transparent rounded-lg border-0 px-2 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6"
                  />
                </span>
                <span>
                  <label htmlFor="password" className="text-text">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleLoginInputChange}
                    className="block w-full mt-2 rounded-lg border-0 px-2 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6"
                  />
                </span>
                <button className="bg-primary w-full text-text-secondary rounded-lg mt-4 py-2">
                  Login
                </button>
              </form>
              <span className="text-text flex justify-center items-center gap-1 w-full mt-5">
                <p className="text-sm">Dont have an account? </p>
                <button
                  className="cursor-pointer"
                  onClick={() => setTab("signup")}
                >
                  Sign Up
                </button>
              </span>
            </>
          ) : (
            <>
              <form action="" className="">
                <span>
                  <label htmlFor="firstName" className="text-text">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="block w-full mt-2 rounded-lg border-0 px-2 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6"
                  />
                </span>
                <span>
                  <label htmlFor="lastName" className="text-text">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="block w-full mt-2 rounded-lg border-0 px-2 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6"
                  />
                </span>
                <span>
                  <label htmlFor="email" className="text-text">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full mt-2 rounded-lg border-0 px-2 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6"
                  />
                </span>
                <span className="">
                  <label htmlFor="password" className="text-text">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full mt-2 rounded-lg border-0 px-2 py-2 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:leading-6"
                  />
                </span>
                <button className="bg-accent-secondary text-text-secondary rounded-lg mt-4 py-2 w-full">
                  Sign Up
                </button>
              </form>
              <span className="text-text flex justify-center items-center gap-1 w-full mt-5">
                <p className="text-sm">Already have an account? </p>
                <button
                  className="cursor-pointer"
                  onClick={() => setTab("login")}
                >
                  Login
                </button>
              </span>
            </>
          )}
        </div>
        {/* ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          </div>
        )} */}
      </div>
    </div>
  );
};
