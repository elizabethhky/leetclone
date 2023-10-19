import React from "react";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  return (
    <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb:8">
      <h3 className="text-x1 font-medium text-neutral-black">Reset Password</h3>
      <p className="text-sm text-neutral-black">
        Forgotten your password? Enter your e-mail address below and we&apos;ll
        send you an e-mail allowing you to reset it.
      </p>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-small block mb-2 text-neutral-black"
        >
          Your email
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

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
  text-sm px-5 py-2.5 text-center bg-brand-blue hover:bg-brand-blue-s"
      >
        Reset Password
      </button>
    </form>
  );
};
export default ResetPassword;
