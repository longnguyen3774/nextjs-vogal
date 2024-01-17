import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import Header from "./ui/header";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex text-sm font-semibold uppercase divide-x">
        <div className="hover:text-mint hover:text-mint flex min-w-60 cursor-pointer items-center justify-center p-4 text-center">
          <FontAwesomeIcon icon={faBars} className="mr-4 h-4" />
          browse categories
          <FontAwesomeIcon icon={faChevronDown} className="ml-4 h-2" />
        </div>
        <div className="flex">
          <div className="hover:text-mint flex cursor-pointer items-center justify-center px-5 py-2">
            <p>home</p>
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-2" />
          </div>
          <div className="hover:text-mint flex cursor-pointer items-center justify-center px-5 py-2">
            <p>shop</p>
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-2" />
          </div>
          <div className="hover:text-mint flex cursor-pointer items-center justify-center px-5 py-2">
            <p>products</p>
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-2" />
          </div>
          <div className="hover:text-mint flex cursor-pointer items-center justify-center px-5 py-2">
            <p>features</p>
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-2" />
          </div>
          <div className="hover:text-mint flex cursor-pointer items-center justify-center px-5 py-2">
            <p>portfolio</p>
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-2" />
          </div>
          <div className="hover:text-mint flex cursor-pointer items-center justify-center px-5 py-2">
            <p>pages</p>
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-2" />
          </div>
          <div className="hover:text-mint flex cursor-pointer items-center justify-center px-5 py-2">
            <p>blog</p>
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-2" />
          </div>
          <div className="hover:text-mint flex cursor-pointer items-center justify-center px-5 py-2">
            <p>buy now</p>
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-2" />
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          className="relative h-120 lg:h-176"
          src="/banner1_2000x.webp"
          alt="banner1"
          width={2000}
          height={801}
        />
        <div className="absolute top-32 lg:top-64 left-20  flex flex-col text-center items-center">
          <p className="uppercase text-lg text-crayola font-medium">
            starting from $50
          </p>
          <h3 className="text-7xl text-white font-bold my-3">Headphones</h3>
          <p className="text-xl text-white font-semibold">
            Feel The Bass in Your Bones
          </p>
          <div className="uppercase bg-mint w-40 text-white mt-5 py-3 rounded hover:cursor-pointer">
            shop now
          </div>
        </div>
      </div>
      <div className="m-8 grid grid-cols-4 gap-5">
        <div className="relative col-span-2 row-span-2 rounded">
          <Image
            className="h-full rounded"
            src="/mobile-bnr.webp"
            alt=""
            width={785}
            height={562}
          />
          <div className="absolute left-10 top-40">
            <h3 className="text-4xl font-bold">Galaxy S22 Ultra</h3>
            <p className="mt-5">Make nights epic with Nightography</p>
            <button className="border border-black mt-8 text-xs px-8 py-3 rounded">
              GET 10% OFF
            </button>
          </div>
        </div>
        <div className="relative rounded">
          <Image
            className="h-full rounded"
            src="/projectore.webp"
            alt=""
            width={428}
            height={301}
          />
          <div className="absolute left-6 top-6">
            <h3 className="text-2xl font-semibold">Projectors</h3>
            <p className="mt-3 max-w-48">4K Ultra HD with 8 milion pixels</p>
          </div>
        </div>
        <div className="relative rounded">
          <Image
            className="h-full rounded"
            src="/soundbar.webp"
            alt=""
            width={427}
            height={300}
          />
          <div className="absolute left-6 top-6">
            <h3 className="text-2xl font-semibold">Soundbars</h3>
            <p className="mt-3 max-w-64">
              With Wireless Subwoofer for Extra Deep Bass
            </p>
          </div>
        </div>
        <div className="relative rounded">
          <Image
            className="h-full rounded"
            src="/game.webp"
            alt=""
            width={428}
            height={300}
          />
          <div className="absolute left-6 top-6">
            <h3 className="text-2xl font-semibold">Video Game</h3>
            <p className="mt-3 max-w-48">Flat 25% Off On Children Day</p>
          </div>
        </div>
        <div className="relative rounded">
          <Image
            className="h-full rounded"
            src="/speecker.webp"
            alt=""
            width={428}
            height={300}
          />
          <div className="absolute left-6 top-6">
            <h3 className="max-w-24 text-2xl font-semibold">
              Bluetooth Speaker
            </h3>
            <p className="mt-3 max-w-48">
              Feather light, ultra- portable grab-and-go design
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 px-8 pb-32 pt-16">
        <h2 className="text-center text-xl font-semibold">New Products</h2>
        <div className="relative">
          <div className="mt-8 grid grid-cols-5 gap-5 text-sm">
            <div className="bg-white p-4">
              <Image
                src="/products/xbox-series-wireless-controller_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>Xbox Series Wireless Controller</p>
                <p className="my-2 font-medium text-carmine-pink">
                  <span className="text-gray-500 line-through">$600.00</span>{" "}
                  $300.00
                </p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/10-2-inch-ipad-9th-gen-black_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>10.2-inch iPad 9th Gen Black</p>
                <p className="my-2 font-medium text-carmine-pink">
                  <span className="text-gray-500 line-through">$900.00</span>{" "}
                  $600.00
                </p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/mini-drone-flycam-quadcopter_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>Mini Drone FlyCam Quadcopter</p>
                <p className="my-2 font-medium text-carmine-pink">
                  <span className="text-gray-500 line-through">$1,500.00</span>{" "}
                  $1,000.00
                </p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/32-inch-hd-smart-led-tv_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>32 inch HD Smart LED TV</p>
                <p className="my-2 font-medium">$500.00</p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/samsung-s201fe-white_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>Samsung S201FE White</p>
                <p className="my-2 font-medium">$900.00</p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/msi-modern-15-laptop_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>MSI Modern 15 Laptop</p>
                <p className="my-2 font-medium">$1,200.00</p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/wireless-extra-bass-speaker_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>Wireless Extra Bass Speaker</p>
                <p className="my-2 font-medium">$100.00</p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/aue65-crystal-4k-uhd-smart-tv_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>AUE65 Crystal 4K UHD Smart TV</p>
                <p className="my-2 font-medium">$400.00</p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/10-watt-wired-computer-speakers_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>10 Watt Wired Computer Speakers</p>
                <p className="my-2 font-medium">$100.00</p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                  <FontAwesomeIcon icon={faStarRegular} className="h-3" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/reflex-play-amoled-display_1800x1800.webp"
                alt=""
                width={1800}
                height={1800}
              />
              <div className="text-center">
                <p>Reflex Play AMOLED Display</p>
                <p className="my-2 font-medium">$50.00</p>
                <div className="flex justify-center">
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                  <FontAwesomeIcon icon={faStarSolid} className="h-3" />
                </div>
              </div>
            </div>
          </div>
          <button className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex rounded border border-yankees-blue bg-yankees-blue px-6 py-3 text-xs uppercase text-white hover:bg-white hover:text-yankees-blue">
            view all
          </button>
        </div>
      </div>
      <div className="px-8 py-16">
        <h2 className="text-center text-xl font-semibold">
          Shop by Categories
        </h2>
        <div className="mt-16 grid grid-cols-6 gap-8">
          <div className="">
            <Image
              className="rounded-full"
              src="/laptop-computer.jpg"
              alt=""
              width={300}
              height={300}
            />
            <p className="mt-4 text-center font-medium">Laptop & Computer</p>
          </div>
          <div className="">
            <Image
              className="rounded-full"
              src="/soundbar.jpg"
              alt=""
              width={300}
              height={300}
            />
            <p className="mt-4 text-center font-medium">Audio & Video</p>
          </div>
          <div className="">
            <Image
              className="rounded-full"
              src="/mobile.jpg"
              alt=""
              width={300}
              height={300}
            />
            <p className="mt-4 text-center font-medium">Mobile Phones</p>
          </div>
          <div className="">
            <Image
              className="rounded-full"
              src="/tv.jpg"
              alt=""
              width={300}
              height={300}
            />
            <p className="mt-4 text-center font-medium">Televisons</p>
          </div>
          <div className="">
            <Image
              className="rounded-full"
              src="/video-game.jpg"
              alt=""
              width={300}
              height={300}
            />
            <p className="mt-4 text-center font-medium">Video Game</p>
          </div>
          <div className="">
            <Image
              className="rounded-full"
              src="/headphone.jpg"
              alt=""
              width={300}
              height={300}
            />
            <p className="mt-4 text-center font-medium">Headphones</p>
          </div>
        </div>
        <div className="mt-16 flex gap-5">
          <div className="relative rounded">
            <Image
              className="rounded"
              src="/headphone5.webp"
              alt=""
              width={800}
              height={250}
            />
            <div className="absolute left-10 top-10 text-white">
              <p className="font-semibold uppercase">up to - 30% off</p>
              <p className="mt-4 text-2xl font-bold">Wireless Headphones</p>
              <p className="mt-4 text-sm underline">Shop Now</p>
            </div>
          </div>
          <div className="relative rounded">
            <Image
              className="rounded"
              src="/soundphone.webp"
              alt=""
              width={800}
              height={250}
            />
            <div className="absolute left-10 top-10 text-white">
              <p className="text-2xl font-bold">Professional Audio</p>
              <p className="mt-4 text-xl font-semibold">Get the Bess Deal</p>
              <p className="mt-4 text-sm underline">Shop Now</p>
            </div>
          </div>
        </div>
        <h2 className="mt-8 text-center text-xl font-semibold">
          Brands We Distribute
        </h2>
        <div className="mt-8 grid grid-cols-7 gap-7">
          <div className="border">
            <Image src="/brands/logo1.jpg" alt="" width={273} height={110} />
          </div>
          <div className="border">
            <Image src="/brands/logo2.jpg" alt="" width={273} height={110} />
          </div>
          <div className="border">
            <Image src="/brands/logo3.jpg" alt="" width={273} height={110} />
          </div>
          <div className="border">
            <Image src="/brands/logo4.jpg" alt="" width={273} height={110} />
          </div>
          <div className="border">
            <Image src="/brands/logo5.jpg" alt="" width={273} height={110} />
          </div>
          <div className="border">
            <Image src="/brands/logo6.jpg" alt="" width={273} height={110} />
          </div>
          <div className="border">
            <Image src="/brands/logo7.jpg" alt="" width={273} height={110} />
          </div>
        </div>
      </div>
      <div className="bg-slate-100 py-16">
        <div className="flex px-8">
          <div className="relative mr-8 min-w-136 rounded">
            <Image
              className="rounded"
              src="/laptop-accesories.webp"
              alt=""
              width={700}
              height={861}
            />
            <div className="absolute left-44 top-10 text-center text-white">
              <h3 className="max-w-40 text-3xl font-bold uppercase">
                Laptop & Accesories
              </h3>
              <p className="mt-8 uppercase">flash sale.flat 30% off!!</p>
              <p className="uppercase">this weekend only</p>
              <button className="mt-6 rounded border border-white px-8 py-3 text-sm uppercase hover:bg-white hover:text-black">
                shop now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div className="bg-white p-4">
              <Image
                src="/products/xbox-series-wireless-controller_1800x1800.webp"
                alt=""
                width={1200}
                height={1200}
              />
              <div className="text-center">
                <p>Xbox Series Wireless Controller</p>
                <p className="my-2 font-medium text-carmine-pink">
                  <span className="text-gray-500 line-through">$600.00</span>{" "}
                  $300.00
                </p>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/10-2-inch-ipad-9th-gen-black_1800x1800.webp"
                alt=""
                width={1200}
                height={1200}
              />
              <div className="text-center">
                <p>10.2-inch iPad 9th Gen Black</p>
                <p className="my-2 font-medium text-carmine-pink">
                  <span className="text-gray-500 line-through">$900.00</span>{" "}
                  $600.00
                </p>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/mini-drone-flycam-quadcopter_1800x1800.webp"
                alt=""
                width={1200}
                height={1200}
              />
              <div className="text-center">
                <p>Mini Drone FlyCam Quadcopter</p>
                <p className="my-2 font-medium text-carmine-pink">
                  <span className="text-gray-500 line-through">$1,500.00</span>{" "}
                  $1,000.00
                </p>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/samsung-s201fe-pink_1800x1800.webp"
                alt=""
                width={1200}
                height={1200}
              />
              <div className="text-center">
                <p>Samsung S201FE Pink</p>
                <p className="my-2 font-medium text-carmine-pink">
                  <span className="text-gray-500 line-through">$1,400.00</span>{" "}
                  $900.00
                </p>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/airdopes-125-pro.webp"
                alt=""
                width={1200}
                height={1200}
              />
              <div className="text-center">
                <p>Airdopes 125 PRO</p>
                <p className="my-2 font-medium">$50.00</p>
              </div>
            </div>
            <div className="bg-white p-4">
              <Image
                src="/products/smart-outdoor-camera.webp"
                alt=""
                width={1200}
                height={1200}
              />
              <div className="text-center">
                <p>Smart Outdoor Camera</p>
                <p className="my-2 font-medium">$200.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-16">
          <Image
            className="min-h-88"
            src="/ghero-smartwatch_2000x.webp"
            alt=""
            width={2000}
            height={400}
          />
          <div className="absolute left-20 top-20 uppercase">
            <p className="text-lg font-bold text-amber-300">
              time to be smarter
            </p>
            <h3 className="mt-1 text-4xl font-bold normal-case text-white">
              Exclusive Smart Watch
            </h3>
            <p className="mt-1 text-lg font-semibold text-white">
              bigger. bolder. better.
            </p>
            <button className="mt-4 rounded bg-white px-4 py-2 text-xs uppercase">
              get 20% off now
            </button>
          </div>
        </div>
        <h2 className="my-8 text-center text-2xl font-semibold">
          Lastest Blogs
        </h2>
        <div className="mx-7 grid grid-cols-3 gap-7">
          <div className="rounded-lg bg-white">
            <div className="m-2">
              <Image
                className="rounded-lg"
                src="/blogs/tv.webp"
                alt=""
                width={1000}
                height={450}
              />
            </div>
            <div className="m-8">
              <h3 className="text-lg font-semibold tracking-wide">
                Understanding the Lastest TV Technology
              </h3>
              <div className="mt-2 flex text-xs text-gray-500">
                <p>January 09, 2023</p>
                <p className="ml-4">by Adorn Themes</p>
              </div>
              <div className="mt-5">
                <a
                  className="rounded border border-zinc-500 px-3 py-1 text-sm hover:border-teal-500"
                  href=""
                >
                  Digital
                </a>
                <a
                  className="ml-2 rounded border border-zinc-500 px-3 py-1 text-sm hover:border-teal-500"
                  href=""
                >
                  TV
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white">
            <div className="m-2">
              <Image
                className="rounded-lg"
                src="/blogs/better.webp"
                alt=""
                width={1000}
                height={450}
              />
            </div>
            <div className="m-8">
              <h3 className="text-lg font-semibold tracking-wide">
                Keep Gadge&apos;s Battery Last Longer
              </h3>
              <div className="mt-2 flex text-xs text-gray-500">
                <p>January 09, 2023</p>
                <p className="ml-4">by Adorn Themes</p>
              </div>
              <div className="mt-5">
                <a
                  className="rounded border border-zinc-500 px-3 py-1 text-sm hover:border-teal-500"
                  href=""
                >
                  Battery
                </a>
                <a
                  className="ml-2 rounded border border-zinc-500 px-3 py-1 text-sm hover:border-teal-500"
                  href=""
                >
                  Digital
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white">
            <div className="m-2">
              <Image
                className="rounded-lg"
                src="/blogs/phonr.webp"
                alt=""
                width={1000}
                height={450}
              />
            </div>
            <div className="m-8">
              <h3 className="text-lg font-semibold tracking-wide">
                Best Android Phones For 2023
              </h3>
              <div className="mt-2 flex text-xs text-gray-500">
                <p>January 09, 2023</p>
                <p className="ml-4">by Adorn Themes</p>
              </div>
              <div className="mt-5">
                <a
                  className="rounded border border-zinc-500 px-3 py-1 text-sm hover:border-teal-500"
                  href=""
                >
                  Android
                </a>
                <a
                  className="ml-2 rounded border border-zinc-500 px-3 py-1 text-sm hover:border-teal-500"
                  href=""
                >
                  Digital
                </a>
                <a
                  className="ml-2 rounded border border-zinc-500 px-3 py-1 text-sm hover:border-teal-500"
                  href=""
                >
                  Phones
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-8 mt-16 grid grid-cols-4 gap-2">
          <div className="flex">
            <Image
              className="max-w-10"
              src="/icons/free-ship_80x.svg"
              alt=""
              width={80}
              height={80}
            />
            <div className="ml-4 text-sm">
              <p className="font-bold uppercase">free delivery</p>
              <p>For all orders over $120</p>
            </div>
          </div>
          <div className="flex">
            <Image
              className="max-w-10"
              src="/icons/support_80x.svg"
              alt=""
              width={80}
              height={80}
            />
            <div className="ml-4 text-sm">
              <p className="font-bold uppercase">24/7 help center</p>
              <p>Dedicated 24/7 support</p>
            </div>
          </div>
          <div className="flex">
            <Image
              className="max-w-10"
              src="/icons/returns_80x.svg"
              alt=""
              width={80}
              height={80}
            />
            <div className="ml-4 text-sm">
              <p className="font-bold uppercase">satisfied or refunded</p>
              <p>Free returns within 14 days</p>
            </div>
          </div>
          <div className="flex">
            <Image
              className="max-w-10"
              src="/icons/secure_80x.svg"
              alt=""
              width={80}
              height={80}
            />
            <div className="ml-4 text-sm">
              <p className="font-bold uppercase">100% secure payments</p>
              <p>Accept all payment methods</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
