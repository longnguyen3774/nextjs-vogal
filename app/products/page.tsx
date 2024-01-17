export default function Products() {
  return (
    <>
      <div className="px-8 py-16">
        <h2 className="text-center text-2xl font-bold">All Collections</h2>
        <div className="mt-8 grid grid-cols-3 gap-3">
          <a className="relative overflow-hidden" href="#">
            <img
              className="transition duration-500 hover:scale-110"
              src="https://vogal-demo.myshopify.com/cdn/shop/files/women.jpg?v=1676293287"
              alt=""
            />
            <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white bg-opacity-65 px-6 py-3 text-xs font-semibold uppercase">
              women
            </button>
          </a>
          <a className="relative overflow-hidden" href="#">
            <img
              className="transition duration-500 hover:scale-110"
              src="https://vogal-demo.myshopify.com/cdn/shop/files/men2.jpg?v=1676293652"
              alt=""
            />
            <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white bg-opacity-65 px-6 py-3 text-xs font-semibold uppercase">
              men
            </button>
          </a>
          <a className="relative overflow-hidden" href="#">
            <img
              className="transition duration-500 hover:scale-110"
              src="https://vogal-demo.myshopify.com/cdn/shop/files/bag.jpg?v=1676294026"
              alt=""
            />
            <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white bg-opacity-65 px-6 py-3 text-xs font-semibold uppercase">
              shoes and bags
            </button>
          </a>
          <a className="relative overflow-hidden" href="#">
            <img
              className="transition duration-500 hover:scale-110"
              src="https://vogal-demo.myshopify.com/cdn/shop/files/accessroes.jpg?v=1676294961"
              alt=""
            />
            <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white bg-opacity-65 px-6 py-3 text-xs font-semibold uppercase">
              accessories
            </button>
          </a>
          <a className="relative overflow-hidden" href="#">
            <img
              className="transition duration-500 hover:scale-110"
              src="https://vogal-demo.myshopify.com/cdn/shop/files/kids.jpg?v=1676293850"
              alt=""
            />
            <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white bg-opacity-65 px-6 py-3 text-xs font-semibold uppercase">
              kids
            </button>
          </a>
          <a className="relative overflow-hidden" href="#">
            <img
              className="transition duration-500 hover:scale-110"
              src="https://vogal-demo.myshopify.com/cdn/shop/files/shoes2.jpg?v=1676349095"
              alt=""
            />
            <button className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white bg-opacity-65 px-6 py-3 text-xs font-semibold uppercase">
              weakly deals
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
