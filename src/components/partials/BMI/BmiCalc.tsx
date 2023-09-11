import React, { useState } from 'react';
import SmallButton from '../../globals/buttons/SmallButton';

function BmiCalc() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (
      isNaN(weightValue) ||
      isNaN(heightValue) ||
      weightValue <= 0 ||
      heightValue <= 0
    ) {
      alert('Please enter valid weight and height');
      return;
    }

    const bmiValue = weightValue / ((heightValue * heightValue) / 10000);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 20) {
      setMessage('Underweight');
    } else if (bmiValue < 27) {
      setMessage('Normal');
    } else {
      setMessage('Overweight');
    }
  };

  return (
    <section className="bmi-section py-[6rem] relative">
      <div className="container page-padding ">
        <span className="w-full h-full absolute bg-transparent min620:bg-[#00000063] top-0 left-0"></span>
        <div className="text-white w-[52rem] min620:w-[100%] relative">
          <h2 className="text-[4rem] font-bold leading-[1.1] mb-8">
            Let's Calculate Your <span className="text-[#FF0336]">BMI</span>
          </h2>
          <p className="text-[16px] text-[#a1a1a1] min620:text-white">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>
          <div className="flex flex-col">
            <form className="flex w-full gap-6 h-[50px] mt-10">
              <input
                onChange={(e) => setWeight(e.target.value)}
                value={weight}
                className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
                type="number"
                placeholder="Weight / kg"
              />
              <input
                onChange={(e) => setHeight(e.target.value)}
                value={height}
                className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
                type="number"
                placeholder="Height / cm"
              />
            </form>

            <p className="mt-10 gap-3 text-[16px] font-medium flex items-center w-full ">
              <span className="w-1/2">
                Your BMI is: <span className="text-[#ff0336]">{bmi}</span>
              </span>
              <span className="w-1/2">
                Your weight is:{' '}
                <span className="text-[#ff0336]">{message}</span>
              </span>
            </p>
            <SmallButton
              onClick={calcBmi}
              style={{ transition: 'all 0.3s' }}
              type="submit"
              className="text-[15px] uppercase font-bold mt-10 bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#FF0336]"
            >
              Calculate
            </SmallButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BmiCalc;
