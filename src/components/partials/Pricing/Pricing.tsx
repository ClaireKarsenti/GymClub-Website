import TitleRed from 'assets/images/who-we-are/title-bg.svg';
import BgText from 'assets/images/pricing/bg-text.png';
import BgDumbell from 'assets/images/pricing/bg-dumbell.png';
import PricingCard from './PricingCard';
import { plans } from 'data/pages/Home/PricingData';

function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              PRICING CHART
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Exclusive Pricing Plan
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Gymat an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                img={plan.img}
                type={plan.type}
                price={plan.price}
                pack={plan.pack}
              />
            ))}
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
