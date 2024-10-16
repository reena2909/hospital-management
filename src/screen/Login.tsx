import React from "react";
import { FaArrowRight, FaCheck, FaGoogle } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import Button from "@/componets/common/button";
import Title from "@/componets/common/title";
import BreadCrumbItem from "@/componets/common/breadcrumbitem";

const Login = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Electronics", link: "/products/electronics" },
    { label: "Laptops" },
  ];

  return (
    // <>
    //   <div className="mt-40">
    //     <BreadCrumbItem items={breadcrumbItems} className="mb-4" />

    //     <Title className="text-[green]" size="small">
    //       sffdsfdsg
    //     </Title>
    //     <Title className="text-[green]" size="medium">
    //       jfdjf
    //     </Title>
    //     <Title className="text-[green]" size="large">
    //       sdf11sfdsg
    //     </Title>
    //   </div>
    // </>
    <div className="grid xl:grid-cols-2 h-screen overflow-hidden items-center">
      {/* <Button
        onClick={() => alert('Primary Button Clicked')}
        bgColor="bg-green-500"
        className="hover:bg-green-600"
      >
        Primary Button
      </Button>

      <Button
        variant="outline"
        borderColor="border-blue-500"
        suffixIcon={<FaArrowRight />}
        onClick={() => alert('Outline Button Clicked')}
        className="hover:border-blue-600"
      >
        Outline Button
      </Button>

      <Button
        variant="secondary"
        prefixIcon={<FaCheck />}
        onClick={() => alert('Secondary Button Clicked')}
      >
        With Prefix Icon
      </Button> */}

      <section className="flex justify-center items-center h-full bg-gray-50">
        <img src="/medicine.svg" alt="" width={600} />
      </section>
      <section className="flex justify-center flex-col items-center w-full max-w-sm mx-auto">
        <div className="w-full">
          <div className="flex justify-start flex-col">
            <h1 className="text-[24px] font-bold text-start">
              Welcome to Cliniva
            </h1>
            <p className="text-gray-400 text-[15px] font-semibold">
              Need an account?{" "}
              <span className="text-[blue] cursor-pointer">Sign Up</span>
            </p>
          </div>
          <div className="my-4 flex justify-between w-full">
            <button className="text-[blue] border-[blue] rounded-[19px] border-[1px] text-[14px] px-[15px] py-[6px]">
              Admin
            </button>
            <button className="text-[#d42929] border-[#d42929] rounded-[19px] border-[1px] text-[14px] px-[15px] py-[6px]">
              Doctor
            </button>
            <button className="text-[blue] border-[blue] rounded-[19px] border-[1px] text-[14px] px-[15px] py-[6px]">
              patient
            </button>
          </div>
          <div className="flex justify-start text-left">
            <h2 className="text-[22px] font-bold">Sign in</h2>
          </div>
          <input
            type="text"
            className="border-gray-200 rounded-[8px] px-4 w-full py-3 border mt-4 text-[14px]"
            placeholder="Enter your Username"
          />
          <input
            type="text"
            className="border-gray-200 rounded-[8px] px-4 w-full py-3 border mt-4 text-[14px]"
            placeholder="Enter your Password"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="w-5 h-5 cursor-pointer" />
              <p className="text-[14px] font-medium text-gray-500">
                Remember me
              </p>
            </div>
            <div className="text-[14px] text-blue-600">Forgot Password?</div>
          </div>
        </div>
        <button className="bg-[blue] text-white w-full rounded-[40px] py-3 mt-10">
          Login
        </button>
        <div className="flex items-center w-full mb-5 mt-1">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex gap-3 cursor-pointer">
          <div className="border-[1px] border-gray-200 rounded-[8px] p-2">
            <FaGoogle />
          </div>
          <div className="border-[1px] border-gray-200 rounded-[8px] p-2">
            <BiLogoFacebook />
          </div>
          <div className="border-[1px] border-gray-200 rounded-[8px] p-2">
            <IoLogoTwitter />
          </div>
          <div className="border-[1px] border-gray-200 rounded-[8px] p-2">
            <FaLinkedinIn />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
