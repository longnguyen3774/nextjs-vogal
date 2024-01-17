function Shipping() {
  return (
    <div className="text-sm">
      <h3 className="mt-4 text-base font-semibold uppercase">delivery</h3>
      <ul className="mt-4 list-disc">
        <li className="list-inside">Dispatch: Within 24 Hours</li>
        <li className="list-inside">
          Free shipping across all products on a minimum purchase of $50.
        </li>
        <li className="list-inside">
          International delivery time - 7-10 business days
        </li>
        <li className="list-inside">Cash on delivery might be available</li>
        <li className="list-inside">Easy 30 days returns and exchanges</li>
      </ul>
      <h3 className="mt-4 text-base font-semibold uppercase">returns</h3>
      <p className="mt-4">
        If you do not like the product you can return it within 15 days - no
        questions asked. This excludes bodysuits, swimwear and clearance sale
        items. We have an easy and hassle free return policy. Please look at our
        Delivery & Returns section for further information.
      </p>
    </div>
  );
}

export default Shipping;
