import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleOnClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };
  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    password: "",
  });
  const router = useRouter();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName)
      return alert("Please fill in all fields.");
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={handleRegister}>
      <h3 className="text-x1 font-medium text-neutral-black">
        Register for LeetClone
      </h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-small block mb-2 text-neutral-black"
        >
          Email
        </label>
        <input
          onChange={handleChangeInput}
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
          htmlFor="displayName"
          className="text-sm font-small block mb-2 text-neutral-black"
        >
          Display Name
        </label>
        <input
          onChange={handleChangeInput}
          type="displayName"
          name="displayName"
          id="displayName"
          className="
        border-2 outline-none sm:text-sm rounded-lg focus:brand-blue-s focus:border-brand-blue-s block w-full p-2.5
        bg-gray-100 border-gray-300 placeholder-gray-400 text-neutral-black"
          placeholder="John Doe"
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
          onChange={handleChangeInput}
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
        {loading ? "Registering..." : "Register"}
      </button>
      <div className="text-sm font-medium text-gray-500">
        Already have an account?&nbsp;
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={handleOnClick}
        >
          Log In
        </a>
      </div>
    </form>
  );
};
export default Signup;
