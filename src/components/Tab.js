import React from "react";
import img1 from "../images/interior.png";
import img2 from "../images/2.png";
import img3 from "../images/3.svg";
import img4 from "../images/4.svg";
import img5 from "../images/5.png";
import img6 from "../images/6.png";

import TelegramIcon from "@mui/icons-material/Telegram";
function Tab() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="">
      <div className="">
        <div className="mx-5 border-t border-slate-300 mt-20 lg:mx-48">
          <ul
            className="flex flex-row justify-center items-center"
            role="tablist"
          >
            <li className="text-white ">
              <a
                className={
                  "text-base font-normal px-2 py-2 flex flex-row items-center" +
                  (openTab === 1
                    ? "text-white font-semibold bg-grey lg:px-4 lg:py-4 lg:text-lg"
                    : "text-grey lg:px-4 lg:py-4 lg:text-base")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#projects"
              >
                <img
                  src="./assets/projects.svg"
                  alt="Projects icon"
                  className="mr-1"
                />
                Projects
              </a>
            </li>
            <li className="text-white">
              <a
                className={
                  "text-base font-normal px-2 py-2  flex flex-row items-center" +
                  (openTab === 2
                    ? "text-white font-semibold bg-grey lg:px-4 lg:py-4 lg:text-lg"
                    : "text-grey lg:px-4 lg:py-4 lg:text-base")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#contact"
                role="tablist"
              >
                <img
                  src="./assets/contact.svg"
                  alt="contact icon"
                  className="mr-1"
                />
                Conatct
              </a>
            </li>
          </ul>
          <div className="flex flex-col  w-full mb-6 shadow-lg rounded-xl mt-10 lg:mt-16 ">
            <div
              className={
                openTab === 1
                  ? "grid gap-4 items-center lg:grid-cols-2 lg:justify-center"
                  : "hidden"
              }
              id="projects"
            >
              <div className="lg:col-span-2 lg:w-full">
                <a href="/">
                  <img
                    src={img1}
                    alt="interior"
                    className="rounded-2xl object-cover"
                  />
                </a>
              </div>
              <img src={img2} alt="interior" className="rounded-2xl" />

              <img src={img3} alt="interior" className="rounded-2xl" />
              <img
                src={img4}
                alt="interior"
                className="rounded-2xl lg:col-span-2 "
              />
              <img src={img5} alt="interior" className="rounded-2xl" />
              <img src={img6} alt="interior" className="rounded-2xl" />
            </div>
            <div
              className={
                openTab === 2
                  ? "lg:flex lg:items-center lg:justify-center"
                  : "hidden"
              }
              id="contact"
            >
              <div className="bg-blackey justify-center rounded-lg lg:items-center lg:w-8/12">
                <form
                  action=""
                  className="flex flex-col justify-center items-center text-gray-500"
                >
                  <p className="mt-24 font-bold text-xl">
                    Feel Free to reach out via Email
                  </p>
                  <div className="flex flex-col mt-4 w-11/12 lg:w-8/12">
                    <label className="text-sm mt-3">Full Name</label>
                    <input
                      type="text"
                      placeholder="Elon Musk"
                      className="px-2 py-1 active:outline-none rounded bg-zinc-900 mt-1"
                    />
                  </div>
                  <div className="flex flex-col w-11/12 lg:w-8/12">
                    <label className="text-sm mt-3">Email</label>
                    <input
                      type="email"
                      placeholder="elon.musk@tesla.com"
                      className="px-2 py-1 active:outline-none rounded bg-zinc-900 mt-1"
                    />
                  </div>
                  <div className="flex flex-col w-11/12 lg:w-8/12">
                    <label className="text-sm mt-5">Message</label>
                    <textarea
                      rows="5"
                      cols="23"
                      placeholder="Message"
                      className="px-2 py-1 active:outline-none rounded bg-zinc-900 mt-1"
                    />
                  </div>
                  <div>
                    <button className="flex items-center my-5 text-white bg-blue-600 px-4 py-2 rounded-md hover:font-bold">
                      <TelegramIcon className="mr-2" />
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tab;
