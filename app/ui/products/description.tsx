import { Fragment } from "react";

interface ProductTechnical {
  [key: string]: string | Array<string>;
}

interface ProductData {
  product_id: string;
  product_brand: string;
  product_name: string;
  product_price: number;
  product_info: string;
  product_images: Array<string>;
  product_description: string;
  product_technical: ProductTechnical;
}

function ProductDescription({ product_data }: { product_data: ProductData }) {
  const product_id = product_data.product_id || "";
  const product_brand = product_data.product_brand || "";
  const product_name = product_data.product_name || "";
  const product_price = product_data.product_price || 0;
  const product_info = product_data.product_info || "";
  const product_images = product_data.product_images || [];
  const product_description = product_data.product_description || "";
  const product_technical = product_data.product_technical || {};
  return (
    <div className="text-sm">
      <p className="mt-4">{product_description}</p>
      {Object.keys(product_technical).map((key, index) => {
        const technical = product_technical[key];
        if (typeof product_technical[key] === "string") {
          return (
            <Fragment key={index}>
              <h3 className="mt-4 text-lg font-semibold">{key}</h3>
              <p className="mt-4">{product_technical[key]}</p>
            </Fragment>
          );
        } else if (Array.isArray(technical)) {
          return (
            <Fragment key={index}>
              <h3 className="mt-4 text-lg font-semibold">{key}</h3>
              <ul className="mt-4 list-disc">
                {technical.map((technical, index) => (
                  <li key={index} className="list-inside">
                    {technical}
                  </li>
                ))}
              </ul>
            </Fragment>
          );
        }
      })}

      <h3 className="mt-4 text-lg font-semibold">Specifications</h3>
      <div className="grid grid-cols-3 gap-7">
        <div>
          <h4 className="mt-4 text-base font-semibold">General</h4>
          <p className="mt-4">
            A+ Grade Zero Dot Panel, Wide Viewing Angle 178 Degree, Cinema Zoom,
            Surround Sound, E Share, Ipq Engine, Chrome Cast Built-in, Micro
            Dimming. 1 TV Unit, User Manual, Warranty Card, Wall Mount, Standard
            Remote Controller, Table Stands
          </p>
        </div>
        <div>
          <h4 className="mt-4 text-base font-semibold">Warranty</h4>
          <p className="mt-4">
            Warranty Does Not Cover Any External device(Such as Battery, Cable,
            Carrying Bag), Damage Caused to the Product Due to Improper
            Installation by Customer, Normal Wear and Tear and Damages Caused to
            the Product by Accident, Lightening, Ingress of Water, Fire,
            Dropping or Excessive Shock, Any Damage Caused Due to Tampering of
            the Product by an Unauthorized Agent.
          </p>
        </div>
        <div>
          <h4 className="mt-4 text-base font-semibold">
            Seamless Connectivity
          </h4>
          <p className="mt-4">
            This TV features two HDMI ports to connect a set-up box, a Blu-ray
            player, or a gaming console. It also has two USB ports to connect
            hard drives and other USB devices, a headphone jack, and two AV
            input slots for hassle-free connectivity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
