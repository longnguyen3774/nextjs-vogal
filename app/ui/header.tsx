import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUserLarge,
  faHeart,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="divide-y divide-opacity-15 bg-yankees-blue divide-gray-200">
      <div className="flex p-3 px-6 justify-between text-xs text-white">
        <div className="flex divide-x">
          <p className="uppercase">free shipping on orders over $80</p>
          <div className="ml-3 pl-3 flex">
            <FontAwesomeIcon icon={faPhone} className="h-3" />
            <p className="ml-1">: +001 123 456 789</p>
          </div>
        </div>
        <div className="flex divide-x">
          <div className="flex pr-2">
            <a className="px-2" href="#"><FontAwesomeIcon icon={faFacebookF} className="h-3" /></a>
            <a className="px-2" href="#"><FontAwesomeIcon icon={faInstagram} className="h-3" /></a>
            <a className="px-2" href="#"><FontAwesomeIcon icon={faYoutube} className="h-3" /></a>
            <a className="px-2" href="#"><FontAwesomeIcon icon={faWhatsapp} className="h-3" /></a>
          </div>
          <div className="flex pl-2">
            <p className="uppercase">english</p>
            <p className="uppercase ml-3">usd $</p>
          </div>
        </div>
      </div>

      <div className="text-sm px-6 py-2 flex items-center">
        <Image
          className="h-9 min-w-18 p-1"
          src="/logo-white.webp"
          width={180}
          height={72}
          alt="vogal-logo"
        ></Image>
        <div className="flex min-w-52 text-xs font-medium ml-10 items-center text-white">
          <div className="mr-4">
            <FontAwesomeIcon icon={faMessage} className="h-8" />
          </div>
          <div className="flex-col flex-nowrap">
            <p className="uppercase font-semibold text-sm p-1">
              expert supportt
            </p>
            <p className="p-1 tracking-wider">Available 24/7 via chat</p>
          </div>
        </div>
        <div className="mx-10 my-4 w-full rounded-md flex">
          <input
            className="w-full pl-5 py-1 rounded-l-md outline-none"
            type="text"
            placeholder="Search products"
          ></input>
          <button className="bg-mint p-3 outline-0 rounded-r-md text-white" title="Search Products">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5" />
          </button>
        </div>
        <div className="text-white flex min-w-52 text-xs font-medium justify-around">
          <div className="flex-col text-center hover:text-mint hover:cursor-pointer">
            <div className="flex justify-center my-1">
              <FontAwesomeIcon icon={faUserLarge} className="h-5" />
            </div>
            <p className="uppercase">account</p>
          </div>
          <div className="flex-col text-center hover:text-mint hover:cursor-pointer">
            <div className="flex justify-center my-1">
              <FontAwesomeIcon icon={faHeart} className="h-5" />
            </div>
            <p className="uppercase">wishlist</p>
          </div>
          <div className="flex-col text-center hover:text-mint hover:cursor-pointer">
            <div className="flex justify-center my-1">
              <FontAwesomeIcon icon={faCartShopping} className="h-5" />
            </div>
            <p className="uppercase">cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
