import { fooItems } from "../constants/constants"
import FooterItems from "../components/FooterItems"
import { SlArrowDown } from "react-icons/sl";
const Footer = () => {
  return (
    <div>
        <div className="flex flex-wrap gap-10 bg-[#212731] pt-10 pb-24 mt-10 lg:px-36 justify-around">
            <FooterItems heading="Categories" arr={fooItems.arr1} />
            <FooterItems heading="Contact" arr={fooItems.arr1} />
            <div className="flex text-[#B6BDC4] gap-5 items-center">
                <p >United States</p>
                <SlArrowDown />
            </div>
        </div>
    </div>
  )
}

export default Footer