import BigButton from '../../globals/buttons/BigButton';

function CtaBanner() {
  return (
    <>
      <section className="cta-section w-full h-auto">
        <div className="container page-padding py-[7rem] text-white">
          <h2 className="text-[36px] font-bold">Need a Fitness Trainer?</h2>
          <h3 className="text-[28px] font-bold mb-20">
            <span className="text-[#FF0336]">Call us:</span> +123-456789
          </h3>
          <BigButton
            color={`text-white`}
            bg={`bg-[#ff0336]`}
            text="purchase now"
            cN="pricing-cta cta-banner-btn"
            goTo="/contact"
          />
        </div>
      </section>
    </>
  );
}

export default CtaBanner;
