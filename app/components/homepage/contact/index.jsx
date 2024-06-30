// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from "./contact-with-captcha";
import ContactWithoutCaptcha from "./contact-without-captcha";
import { SiCodechef } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import Image from "next/image";

function ContactSection() {
  return (
    <div
      id="contact"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact with me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
        <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
          <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
            CONTACT
          </span>
          <span className="h-36 w-[2px] bg-[#1a1443]"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY &&
          process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY ? (
            <ContactWithCaptcha />
          ) : (
            <ContactWithoutCaptcha />
          )}

          <div className="lg:w-3/4 ">
            <div className="flex flex-col gap-5 lg:gap-9">
              <p className="text-sm md:text-xl flex items-center gap-3">
                <MdAlternateEmail
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>{personalData.email}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <IoMdCall
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>{personalData.phone}</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <CiLocationOn
                  className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  size={36}
                />
                <span>{personalData.address}</span>
              </p>
            </div>
            <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
              {/* Adjust links to open in a new tab */}
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              >
                <IoLogoGithub size={48} />
              </a>
              <a
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              >
                <BiLogoLinkedin size={48} />
              </a>
              <a
                href={personalData.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              >
                <SiCodechef size={48} />
              </a>
              <a
                href={personalData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              >
                <TbBrandLeetcode size={48} />
              </a>
              <a
                href={personalData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              >
                <FaFacebook size={48} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
