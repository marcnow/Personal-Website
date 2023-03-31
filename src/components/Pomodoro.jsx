/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import NavBar from './NavBar';
import Footer from './footer/Footer';

export default function Pomodoro() {
  const sections = [
    { id: 'pomodoro', label: 'Pomodoro', time: 1500 },
    { id: 'shortBreak', label: 'Short Break', time: 300 },
    { id: 'longBreak', label: 'Long Break', time: 900 }];

  const [timer, setTimer] = useState(1500);
  const [start, setStart] = useState(false);
  const [currSection, setCurrSection] = useState(sections.at(0));
  const tick = useRef();

  useEffect(() => {
    if (start) {
      tick.current = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);
    } else {
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [start]);

  const onStartStop = () => {
    setStart(!start);
  };

  const handleEdit = (section) => {
    if (section.id === 'pomodoro') setTimer(section.time);
    if (section.id === 'shortBreak') setTimer(section.time);
    if (section.id === 'longBreak') setTimer(section.time);
    setStart(false);
    setCurrSection(section);
  };

  const displaySecondsAsMins = (currSeconds) => {
    if (currSeconds === 0) {
      const currSectionIndex = sections.findIndex((x) => x.id === currSection.id);
      const nextSection = sections.at((currSectionIndex + 1) % sections.length);
      handleEdit(nextSection);
      return;
    }

    const minutes = Math.floor(currSeconds / 60);
    const seconds = currSeconds % 60;
    return `${(minutes < 10) ? `0${minutes.toString()}` : minutes.toString()}:`
    + `${(seconds < 10) ? `0${seconds.toString()}` : seconds.toString()}`;
  };

  return (
    <div>
      <div className="h-screen primaryColor">
        <header className="header-container">
          <NavBar />
        </header>
        <main className="pt-24 main-container">
          <div className="flex justify-center content-center">
            <div className="w-[55%] h-[55%] secondaryColor rounded-lg grid">
              <div className="flex justify-evenly pt-4 pb-4">
                {sections.map((item) => (
                  <button
                    id={item.id}
                    type="button"
                    style={{ background: item.id === currSection.id ? '#4A2328' : '' }}
                    className="w-28 h-8 rounded-lg roboto font-bold text-xl text-thirdColor"
                    onClick={() => handleEdit(item)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <h1 className="roboto ml-auto mr-auto font-bold text-8xl pb-6">{displaySecondsAsMins(timer)}</h1>
              <button className="w-36 h-12 ml-auto mr-auto text-lg rounded-lg bg-white text-secondary tracking-wide roboto font-bold mb-4" type="button" onClick={onStartStop}>{!start ? 'START' : 'STOP'}</button>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
