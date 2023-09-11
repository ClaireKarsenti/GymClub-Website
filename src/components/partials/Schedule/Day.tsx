import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import RoundedButton from '../../globals/buttons/RoundedButton';
import { days, classesByDay, Days } from '../../../data/pages/ScheduleData';
import ClassCard from './ClassCard';

type DayProps = {
  day: Days;
};

function Day({ day }: DayProps) {
  const classes = classesByDay[day.day];
  const [activeDay, setActiveDay] = useState(days[0].day);

  const location = useLocation();
  const currentPathDay = location.pathname.split('/schedule/')[1];

  if (currentPathDay && currentPathDay !== activeDay) {
    setActiveDay(currentPathDay);
  }

  const handleDayClick = (selectedDay: string) => {
    setActiveDay(selectedDay);
  };

  const colorOnClick = (selectedDay: string) =>
    activeDay === selectedDay
      ? 'bg-[#ff0336] text-white'
      : 'bg-white text-[#ff0336]';

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {days.map((dayData) => (
          <RoundedButton
            key={dayData.day}
            to={`/schedule/${dayData.day}`}
            className={`text-[15px] flex justify-center font-bold border-solid border ${colorOnClick(
              dayData.day
            )} w-[15rem] py-[9px] px-[32px] rounded-[23px] ease-in duration-200 hover:shadow-2xl`}
            label={dayData.label}
            onClick={() => handleDayClick(dayData.day)}
          />
        ))}
      </div>

      <div className="mt-[5rem]">
        <div className="flex flex-col gap-3">
          {classes.map((cls, index) => (
            <ClassCard
              key={index}
              className={cls.className}
              time={cls.time}
              trainer={cls.trainer}
            />
          ))}
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Day;
