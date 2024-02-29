import React from 'react'
import { ComputerImg, flexItems, off } from '../constants/constants'

const Related = () => {
  return (
    <section>
      <p className='text-4xl text-subPara mb-10'>Related deals you might like for</p>
      <section className="flex md:flex-row flex-col items-center gap-10 ">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index}>
            <div className="w-[140px] mb-10 mx-auto h-[100px] ">
              <img
                className="w-full h-full object-cover"
                src={ComputerImg}
                alt=""
              />
            </div>
            <div className={flexItems}>
              {off.map((offer) => (
                <p className="bg-gray text-xs p-2 rounded-lg text-blue">
                  {offer}
                </p>
              ))}
            </div>
            <p className="text-center mb-2">Webbuilder 1</p>
            <p className="text-subParaLight">
              Computer Modern classic with wix support
            </p>
            <div className={flexItems}>
              <p>$39.96</p>
              <p className='text-xs text-subParaLight'>$49.96</p>
              <p className='text-xs text-red'>(20% off)</p>
            </div>
            <button className='w-full bg-blue py-1 rounded-lg text-[#fff] mt-2'>View</button>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Related