import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { flexCol, flexItems } from "../constants/constants";

const Reviews = ({offer}) => {
    const {rating, stars, halfStars, noStars, review} = offer;

  return (
    <section className="flex flex-col gap-10 lg:gap-0 justify-between">
      <div className="bg-[#F3F9FF] text-darkBlue py-2  lg:rounded-xl flex flex-col items-center">
        <p className="text-2xl mb-3">{rating}</p>
        <div className={flexCol}>
          <p className="text-sm">{review}</p>
          <div className={`${flexItems} gap-0 text-yellow`}>
            {Array.from({ length: stars }, (_, index) => (
              <IoMdStar key={index} />
            ))}
            {Array.from({ length: noStars }, (_, index) => (
              <IoMdStarOutline key={index} />
            ))}
            {Array.from({ length: halfStars }, (_, index) => (
              <IoMdStarHalf key={index} />
            ))}
          </div>
        </div>
      </div>

      <button className="bg-[#1B88F4] px-16 py-2 rounded-md text-[#fff]">
        View
      </button>
    </section>
  );
}

export default Reviews