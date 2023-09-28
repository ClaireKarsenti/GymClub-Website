import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from 'utils/context/AuthContext';
import { scrollTop } from 'utils/helpers/scrollTopHelper';
import Footer from 'components/structure/Footer/Footer';
import SmallButton from 'components/globals/buttons/SmallButton';
import Input from 'components/globals/Input';
import { login } from 'data/pages/LogData';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();
  const authContext = UserAuth();

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const { logIn } = authContext;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate('/#home');
      scrollTop();
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
            Sign In
          </h1>
        </div>

        <div className="page-padding py-[10rem] flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-40 px-20 bg-black w-[55rem] min450:w-full  shadow-xl"
          >
            {error ? (
              <p className="text-white bg-[#ff0336] font-bold text-[1.6rem] px-10 py-5 text-center mb-10">
                Wrong email or password
              </p>
            ) : null}
            {login.map((loginItem, index) => (
              <Input
                key={index}
                {...loginItem}
                onChange={(e) => {
                  if (loginItem.label === 'Email') {
                    setEmail(e.target.value);
                  } else if (loginItem.label === 'Password') {
                    setPassword(e.target.value);
                  }
                }}
              />
            ))}
            <SmallButton
              type="submit"
              className="bg-[#ff0336] text-white py-4 font-medium text-[2rem] w-full mt-10"
            >
              Sign In
            </SmallButton>
            <div className="flex gap-4 items-center mt-16 min450:flex-col">
              <p className="text-white text-[1.5rem]">New to Gymate?</p>
              <Link
                to="/signup"
                className="text-[#ff0336] font-bold text-[1.5rem]"
                onClick={scrollTop}
              >
                Sign Up
              </Link>
            </div>
            <p className="text-[#ffffffbc] text-[1.4rem] mt-3">
              <span className="text-[#ff0336]">Test Account</span> -
              gymateuser@gmail.com <span className="text-[#ff0336]"> / </span>
              testpassword123
            </p>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Login;
