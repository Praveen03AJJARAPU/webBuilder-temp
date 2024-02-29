import { ComputerImg, Verified, offerItems } from "../constants/constants";
import OfferDetails from "./OfferDetails";
import Reviews from "./Reviews";

const Offers = () => {
  return (
    <section>
      {offerItems.map((offer) => (
        <section
          className="flex flex-col lg:flex-row lg:items-stretch items-center gap-5 px-5 xl:gap-16 justify-center my-10"
          key={offer.id}
        >
          <p
            className={`${
              offer.id !== 1
                ? "border-[1px]  border-grayBorder rounded-full"
                : ""
            } px-[15px] py-2 h-max `}
          >
            {offer.id}
          </p>
          <div className="flex flex-col items-center lg:mt-10 gap-5">
            <div className="w-[120px] h-[105px]">
              <img
                className="w-full h-full object-contain"
                src={ComputerImg}
                alt="computer"
              />
            </div>
            <p className="text-sm text-subParaLight">{offer.imgDesc}</p>
          </div>
          <OfferDetails offer={offer} />
          <Reviews offer={offer} />
        </section>
      ))}
    </section>
  );
};

export default Offers;
