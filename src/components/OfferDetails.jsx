import { Verified, flex, flexItems } from "../constants/constants";
import { SlArrowDown } from "react-icons/sl";

const OfferDetails = ({offer}) => {
    const {heading, para, highlights, highlightPara, show} = offer
  return (
    <div>
      <div>
        <p className="font-bold text-subPara mb-3">
          {heading}{" "}
          <span className="font-normal text-subParaLight">{para}</span>
        </p>
        {Object.keys(highlights).length == 0 ? (
          <div>
            <h3 className="font-bold">Main highlights</h3>
            <p className="text-subParaLight">{highlightPara}</p>
          </div>
        ) : (
          <div>
            <p className="text-darkBlue bg-gray px-2 py-1 rounded-lg w-max">26% Off</p>
            <h3 className="font-bold">Main highlights</h3>
            <div className="bg-orange rounded-xl px-2 my-2 lg:ml-4 py-2">
              {highlights.highlight.map((high, id) => (
                <div key={id} className={`${flexItems} mb-2 gap-2`}>
                  <p className="bg-gray  text-blue p-1 rounded-sm">
                    {high.rating}
                  </p>
                  <p className="text-subParaLight">{high.para}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-subPara">Why we love it?</p>
              {highlights.reviews.map((rev, id) => (
                <div className={`${flexItems} gap-2`} key={id}>
                  <div className="">
                    <Verified />
                  </div>
                  <p>{rev}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={`mt-10 text-blue ${flexItems} gap-2`}>
        <p>Show more</p>
        {show && (
          <div className="mt-1">
            <SlArrowDown size={12} />
          </div>
        )}
      </div>
    </div>
  );
}

export default OfferDetails