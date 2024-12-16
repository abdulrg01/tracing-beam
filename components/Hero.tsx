"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RiStarSFill } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa6";
import { FcCamera } from "react-icons/fc";

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".items",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.2,
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".side",
      {
        opacity: 0,
        x: 30,
      },
      {
        opacity: 1,
        x: 0,
        delay: 2,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section>
      <div className="hero">
        <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 max-w-5xl mx-auto gap-3 pt-5 pb-20 dark:text-gray-300 xl:px-0 px-5">
            <nav className="flex items-center justify-start gap-2 mb-20">
              <FcCamera className="w-7 h-7" />
              <p className="scroll-m-20 text-xl font-semibold tracking-tight">
                Tracing Beam
              </p>
            </nav>

            <main className="flex md:flex-row items-center justify-between flex-col gap-20">
              <div>
                <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-6xl items">
                  You can
                </h1>
                <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-6xl items">
                  do it
                </h1>
                <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-6xl items">
                  with Ai
                </h1>
                <p className="max-w-md leading-7 [&:not(:first-child)]:mt-6 items mb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                  quam animi, dolor corrupti ullam quos aliquam eum optio. Sunt
                  dicta autem ipsa dolor corrupti ullam quos
                </p>

                <button
                  type="button"
                  className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
                >
                  REVIEW MEMBERSHIP OPTION
                  <FaArrowDown className="w-4 h-3 me-2 ms-1" />
                </button>
                <div className="flex items-center gap-1 -space-x-4 rtl:space-x-reverse mt-3 items">
                  <div className="flex -space-x-4 rtl:space-x-reverse">
                    <Image
                      src="/profile1.jpg"
                      alt="home"
                      width={25}
                      height={25}
                      className="border-2 border-white rounded-full dark:border-gray-800"
                    />
                    <Image
                      src="/profile2.jpg"
                      alt="home"
                      width={25}
                      height={25}
                      className="border-2 border-white rounded-full dark:border-gray-800"
                    />
                    <Image
                      src="/profile3.jpg"
                      alt="home"
                      width={25}
                      height={25}
                      className="border-2 border-white rounded-full dark:border-gray-800"
                    />
                    <Image
                      src="/profile5.jpg"
                      alt="home"
                      width={25}
                      height={25}
                      className="border-2 border-white rounded-full dark:border-gray-800"
                    />
                  </div>
                  <div className="pl-5 mt-2 text-sm flex flex-col items-start gap-1">
                    <div className="flex items-start justify-between gap-1">
                      <RiStarSFill className="text-[#E1B037] rounded-full" />
                      <RiStarSFill className="text-[#E1B037] rounded-full" />
                      <RiStarSFill className="text-[#E1B037] rounded-full" />
                      <RiStarSFill className="text-[#E1B037] rounded-full" />
                      <RiStarSFill className="text-[#E1B037] rounded-full" />
                    </div>
                    <p className="text-sm">5000k+ People already trusted us</p>
                  </div>
                </div>
              </div>
              <div className="side">
                <Image
                  src="/ai.webp"
                  width={500}
                  height={500}
                  alt="group"
                  className="rounded-2xl"
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
