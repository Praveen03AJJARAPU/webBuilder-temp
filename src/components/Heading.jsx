import { SlArrowDown } from "react-icons/sl";
import { GreaterSymbol, Info, RoundedVerified, flexBet, flexItems, headerItems, headerPages } from "../constants/constants"


const Heading = () => {
  return (
    <div>
      <h1 className="lg:text-5xl text-3xl">Best Website builders in the US</h1>
      <section
        className={`${flexBet} py-2 md:text-sm text-xs border-y-[1px] border-[#E1E4E6] mt-4`}
      >
        <div className={`${flexItems} flex-wrap justify-start text-subPara gap-4`}>
          <div className={flexItems}>
            <RoundedVerified />
            <p>Last Updated - February 22, 2020</p>
          </div>
          <div className={flexItems}>
            <Info />
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div className={`${flexItems} text-[#727D87]`}>
          <p>Top Relevant</p>
          <SlArrowDown />
        </div>
      </section>
      <section className={`${flexBet} lg:w-[80%] my-5 gap-2 text-[10px] md:text-sm text-subPara`}>
        {headerItems.map((item, id) => (
          <p key={id}>{item}</p>
        ))}
      </section>
      <section className={`${flexItems} text-[10px] md:text-sm`}>
        {headerPages.map((page, id) => (
          <div className={`${flexItems} text-subParaLight`}>
            <p key={id}>{page}</p>
            {id !== headerPages.length - 1 && (
              <span className="mt-[4.5px] mx-1">
                <GreaterSymbol />
              </span>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Heading