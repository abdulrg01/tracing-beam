import Image from "next/image";
import React from "react";
import { BsCheck } from "react-icons/bs";

export default function Highlights() {
  return (
    <section className="main-section max-w-5xl mx-auto py-20 xl:px-0 px-5">
      <main className="flex md:flex-row max-lg:gap-10 items-center justify-between flex-col mb-20 max-md:p-5 mt-10">
        <div className="side">
          <Image
            src="/vision.webp"
            width={550}
            height={300}
            alt="group"
            className="rounded-2xl h-[500px]"
          />
        </div>
        <div className="side text-gray-800">
          <h1 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0 items">
            Grow together
          </h1>
          <h1 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0 mb-10 items">
            Beam together
          </h1>
          <div className="flex items-center gap-3 mb-5">
            <BsCheck className="w-7 h-7" />
            <p className="items leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <BsCheck className="w-7 h-7" />
            <p className="items leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <BsCheck className="w-7 h-7" />
            <p className="items leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
          <div className="flex items-center gap-3">
            <BsCheck className="w-7 h-7" />
            <p className="items leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
          </div>
        </div>
      </main>

      <main className="flex md:flex-row items-center justify-between flex-col gap-10 mb-20 max-md:p-5 mt-10 items text-gray-800">
        <div className="side">
          <h1 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0 items">
            Not your average
          </h1>
          <h1 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0 mb-5 items">
            tracing club
          </h1>
          <p className="max-w-md mt-5 leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure quam
            animi, dolor corrupti ullam quos aliquam eum optio. Sunt dicta autem
            ipsa dolor corrupti ullam quos
          </p>
        </div>
        <div className="side">
          <Image
            src="/week.png"
            width={550}
            height={300}
            alt="group"
            className="rounded-2xl h-[500px]"
          />
        </div>
      </main>

      <div className="rounded-t-3xl dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 max-w-5xl mx-auto gap-3">
          <div className="flex items-center justify-between flex-col gap-10 rounded-2xl mb-20 sm:p-5 mt-10 text-gray-400">
            <h1 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0 items">
              Your Tracing
            </h1>
            <h1 className="scroll-m-20 border-b pb-2 text-5xl -mt-10 font-semibold tracking-tight first:mt-0 items">
              Beam journey
            </h1>
            <div>
              <div className="mb-10 grid w-full lg:mb-0 lg:grid-cols-4 grid-cols-2 lg:text-left">
                <a
                  href="#"
                  target="_blank"
                  className="group flex items-start justify-start flex-col px-5 py-4 items"
                >
                  <Image src="/good.svg" width={15} height={10} alt="mark" />
                  <h2
                    className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
                  >
                    Email
                  </h2>
                  <p className={`m-0 max-w-sm mt-2 text-start opacity-50`}>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>

                <a
                  className="group flex items-start justify-start flex-col rounded-lg border border-transparent px-5 py-4 items"
                  href="#"
                  target="_blank"
                >
                  <Image src="/good.svg" width={15} height={10} alt="mark" />
                  <h2
                    className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
                  >
                    Linkedin
                  </h2>
                  <p className={`m-0 max-w-sm mt-2 text-start opacity-50`}>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="group flex items-start justify-start flex-col px-5 py-4 items"
                >
                  <Image src="/good.svg" width={15} height={10} alt="mark" />
                  <h2
                    className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
                  >
                    Twitter
                  </h2>
                  <p className={`m-0 max-w-sm mt-2 text-start opacity-50`}>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="group flex items-start justify-start flex-col px-5 py-4 items"
                >
                  <Image src="/good.svg" width={15} height={10} alt="mark" />
                  <h2
                    className={`mb-3 text-2xl font-semibold mt-3 whitespace-nowrap`}
                  >
                    Twitter
                  </h2>
                  <p className={`m-0 max-w-sm mt-2 text-start opacity-50`}>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
