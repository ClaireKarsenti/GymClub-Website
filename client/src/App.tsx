import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'components/structure/Nav/Navbar';
import Day from 'components/partials/Schedule/Day';
import {
  About,
  Contact,
  Home,
  Login,
  SignUp,
  Classes,
  Price,
  Blog,
  Post,
  Schedule,
  GalleryPage,
  GalleryGrid,
} from 'pages/index';
import { days } from 'data/pages/ScheduleData';
import { AuthState } from 'state/authSlice';

function App() {
  const isAuth = useSelector((state: AuthState) => Boolean(state.token));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={isAuth ? <Home /> : <Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="classes" element={<Classes />} />
        <Route path="pricing" element={<Price />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:postId" element={<Post />} />

        <Route path="about" element={<About />} />

        <Route path="schedule" element={<Schedule />}>
          {days.map((day) => (
            <Route key={day.day} path={day.day} element={<Day day={day} />} />
          ))}
        </Route>

        <Route path="gallery" element={<GalleryPage />}>
          <Route path="page-1" element={<GalleryGrid />} />
          <Route path="page-2" element={<GalleryGrid />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
