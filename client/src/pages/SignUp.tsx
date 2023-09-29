import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from 'utils/context/AuthContext';
import { scrollTop } from 'utils/helpers/scrollTopHelper';
import Footer from 'components/structure/Footer/Footer';
import SmallButton from 'components/globals/buttons/SmallButton';
import Input from 'components/globals/Input';
import { signup } from 'data/pages/LogData';

function Signup() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const inputHandlers: { [key: string]: (value: string) => void } = {
    'First Name': setFirstName,
    'Last Name': setLastName,
    Email: setEmail,
    Password: setPassword,
  };

  const navigate = useNavigate();
  const authContext = UserAuth();

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (response.ok) {
        navigate('/#home');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setError(error.message);
      }
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Sign Up
          </h1>
        </div>

        <div className="py-[10rem] flex justify-center page-padding">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            {error ? (
              <p className="text-white bg-[#ff0336] font-bold text-[1.6rem] px-10 py-5 text-center mb-10">
                {error}
              </p>
            ) : null}
            {signup.map((signUpItem, index) => (
              <Input
                key={index}
                {...signUpItem}
                value={
                  signUpItem.label === 'First Name'
                    ? firstName
                    : signUpItem.label === 'Last Name'
                    ? lastName
                    : signUpItem.label === 'Email'
                    ? email
                    : password
                }
                onChange={(e) => {
                  const handler = inputHandlers[signUpItem.label];
                  if (handler) {
                    handler(e.target.value);
                  }
                }}
              />
            ))}
            <SmallButton
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign Up
            </SmallButton>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">Already have account?</p>
              <Link
                to="/login"
                className="text-[#ff0336] font-bold text-[1.5rem]"
                onClick={scrollTop}
              >
                Sign In
              </Link>
            </div>
            <p className="text-[#ffffffbc] text-[1.3rem] mt-5">
              (Make <span className="text-[#ff0336]">new Account</span> or go to
              <span className="text-[#ff0336]"> Sign In</span> Page for Test
              Account)
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Signup;
