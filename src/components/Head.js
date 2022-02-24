import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";

function Head() {
  return (
    <div className="flex flex-col mt-28 items-center lg:flex-row lg:mx-10 lg:space-x-10 lg:justify-center">
      <img
        src="./assets/profile.png"
        alt="Profile"
        className="w-52 lg:w-96 lg:ml-8"
      />
      <div className="flex flex-col items-center lg:place-items-start">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-2">
          <h1 className="font-black text-white text-2xl mt-10 lg:text-4xl">
            Nooruddin Rahmani
          </h1>
          <span className="text-xs bg-pink-600 text-white px-1 py-1 rounded-full mt-3">
            Open_to_work
          </span>
        </div>
        <div className="flex text-white mt-5">
          <LocationOnIcon />
          <p>Kabul, Afghanistan</p>
        </div>
        <h3 className="text-white text-base text-center mx-1 my-5 lg:w-11/12 lg:text-left lg:text-lg">
          Hey, I'm Nooruddin Rahmani. I'm a self taught web designer.My passion
          is to help individuals and startups stand out by designing clean
          interfaces.
        </h3>
        <p className="text-gray-600 text-base text-center mx-2 lg:w-11/12 lg:text-left">
          I Design & prototype user interfaces using figma and bring them in
          life using HTML/CSS Javascript Tailwindcss. I also use a little bit of
          react to boost the performance of user interfaces
        </p>
        <div className="flex mt-5 text-white space-x-1 items-center">
          <a
            href="https://www.facebook.com"
            className="hover:bg-zinc-800 hover:rounded-full p-2"
          >
            <FacebookIcon fontSize="large" className="" />
          </a>
          <a
            href="https://www.twitter.com"
            className="hover:bg-zinc-800 hover:rounded-full p-2"
          >
            <TwitterIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com"
            className="hover:bg-zinc-800 hover:rounded-full p-2"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            href="https://www.instagram.com"
            className="hover:bg-zinc-800 hover:rounded-full p-2"
          >
            <InstagramIcon fontSize="large" />
          </a>
          <a
            className=" hover:bg-zinc-800 hover:rounded-full p-2.5 flex"
            href="https://www.figma.com"
          >
            <img src="./assets/figma.svg" alt="figma icon" className="w-7" />
          </a>
        </div>
        <div className="flex flex-col space-y-4 items-center mt-10 lg:flex-row lg:space-y-0 lg:space-x-5">
          <a
            className="px-2 py-2 rounded-md text-white bg-blue-700 gradient-to-tl flex items-center font-medium"
            href="./assets/noor's Resume.pdf"
            download
          >
            <DownloadIcon fontSize="small" />
            <span className="ml-1">Downoad My Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Head;
