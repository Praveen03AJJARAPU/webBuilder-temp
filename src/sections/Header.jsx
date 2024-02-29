import Heading from "../components/Heading"
import Offers from "../components/Offers"
import Related from "../components/Related"
import SignUp from "../components/SignUp"

const Header = () => {
  return (
    <div className="lg:px-36 md:px-16 flex flex-col gap-10 xl:w-[85%] mx-auto mt-16">
      <Heading />
      <Offers />
      <Related />
      <SignUp />
    </div>
  )
}

export default Header