import Image from "next/image";

function Footer() {
  return (
    <div className="bg-blue-cyan-169 text-s grid grid-cols-5 gap-y-4 p-8 text-white text-opacity-80">
      <div className="col-span-2">
        <Image src="/logo-white_150x@2x.webp" alt="" width={180} height={72} />
        <p className="mt-8">
          Our aim is to provide high quality, easy to use, <br />
          fastest and affordable shopify themes.
        </p>
        <p className="mt-4">
          <b>Phone</b> : (440) 000 000 0000
        </p>
        <p className="mt-4">
          <b>Email</b> : sales@yousite.com
        </p>
      </div>
      <div className="">
        <h3 className="font-bold uppercase text-white">infomation</h3>
        <div className="mt-4 list-none flex-col">
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Latest News</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Career</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">My Account</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">My Cart</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Orders and Returns</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Contact Us</a>
          </li>
        </div>
      </div>
      <div className="">
        <h3 className="font-bold uppercase text-white">popular collections</h3>
        <div className="mt-4 list-none flex-col">
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Laptop & Computer</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Audio Accessories</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Smartphones & Tablets</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Video Games</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Sound Bars</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">LED TVs</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Weekly Special</a>
          </li>
        </div>
      </div>
      <div className="">
        <h3 className="font-bold uppercase text-white text-opacity-100">
          customer service
        </h3>
        <div className="mt-4 list-none flex-col">
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Privacy Policy</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Terms & Conditions</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Shipping & Returns</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Help & FAQs</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Refund Policy</a>
          </li>
          <li className="mt-2 hover:underline hover:text-mint">
            <a href="">Customer Service</a>
          </li>
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="font-bold uppercase text-white">
          subscribe to our newsletter
        </h3>
        <p className="mt-4">
          Get notified about product launches, special offers and news.
        </p>
        <div className="mt-6 w-full rounded-md">
          <input
            className="min-w-72 rounded-l-md py-3 pl-4 text-black outline-none"
            type="email"
            placeholder="Email address"
          />
          <button className="bg-mint -ml-2 rounded-r-md px-6 py-3 uppercase text-white">
            subscribe
          </button>
        </div>
      </div>
      <div className="col-span-2">
        <h3 className="font-bold uppercase text-white">download app</h3>
        <p className="mt-4">
          Vogal App is now available on App Store & Google Play. Get it now.
        </p>
        <div className="mt-4 flex">
          <div className="mr-4">
            <Image
              className="max-w-44"
              src="/apple_180x@2x.webp"
              alt=""
              width={360}
              height={102}
            />
          </div>
          <div className="mr-4">
            <Image
              className="max-w-44"
              src="/google-pay_180x@2x.webp"
              alt=""
              width={360}
              height={102}
            />
          </div>
        </div>
      </div>
      <div className="">
        <Image src="/payments_200x@2x.webp" alt="" width={400} height={32} />
        <p className="mt-4">© 2023 Vogal. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
