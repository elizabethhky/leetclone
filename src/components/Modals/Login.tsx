import { authModalState } from "@/atoms/authModalAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleOnClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };

  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-x1 font-medium text-neutral-black">
        Sign in to LeetClone
      </h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-small block mb-2 text-neutral-black"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:brand-blue-s focus:border-brand-blue-s block w-full p-2.5
        bg-gray-100 border-gray-300 placeholder-gray-400 text-neutral-black"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-small block mb-2 text-neutral-black"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:brand-blue-s focus:border-brand-blue-s block w-full p-2.5
        bg-gray-100 border-gray-300 placeholder-gray-400 text-neutral-black"
          placeholder="********"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
      text-sm px-5 py-2.5 text-center bg-brand-blue hover:bg-brand-blue-s"
      >
        Login
      </button>
      <button
        className="flex w-full justify-end"
        onClick={() => handleOnClick("forgotPassword")}
      >
        <a
          href="#"
          className="text-sm block text-brand-blue hover:underline w-full text-right"
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-500">
        Not Registered?&nbsp;
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={() => handleOnClick("register")}
        >
          Create account
        </a>
      </div>
    </form>
  );
};
export default Login;
