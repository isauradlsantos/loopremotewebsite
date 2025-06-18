"use client";
import React, { useState, useRef } from "react";

const WORK_TIME_25 = 25 * 60; // 25 minutes
const WORK_TIME_50 = 50 * 60; // 50 minutes
const BREAK_TIME = 5 * 60; // 5 minutes

export default function PomodoroTimer() {
  const [workDuration, setWorkDuration] = useState(WORK_TIME_25);
  const [secondsLeft, setSecondsLeft] = useState(WORK_TIME_25);
  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        setIsWork((w) => !w);
        setSecondsLeft(isWork ? BREAK_TIME : workDuration);
        setIsRunning(false);
        return prev;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setSecondsLeft(isWork ? workDuration : BREAK_TIME);
  };

  const handleDurationChange = (duration: number) => {
    setWorkDuration(duration);
    setSecondsLeft(duration);
    setIsWork(true);
    stopTimer();
  };

  const minutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-sand-100 overflow-hidden">
      {/* Decorative Orange Circles */}
      <div className="pointer-events-none select-none">
        <div className="absolute bottom-[-80px] right-[-80px] w-64 h-64 bg-orange-500 opacity-20 rounded-full z-0" />
        <div className="absolute top-1/2 left-[-40px] w-24 h-24 bg-orange-300 opacity-40 rounded-full z-0" style={{ transform: 'translateY(-50%)' }} />
        <div className="absolute bottom-24 right-1/3 w-16 h-16 bg-orange-200 opacity-30 rounded-full z-0" />
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Pomodoro Timer</h1>
        <div className="mb-6 flex gap-4">
          <button
            className={`px-4 py-2 rounded border ${workDuration === WORK_TIME_25 ? 'bg-primary text-white' : 'bg-white text-primary border-primary'}`}
            onClick={() => handleDurationChange(WORK_TIME_25)}
            disabled={isRunning}
          >
            25 min
          </button>
          <button
            className={`px-4 py-2 rounded border ${workDuration === WORK_TIME_50 ? 'bg-primary text-white' : 'bg-white text-primary border-primary'}`}
            onClick={() => handleDurationChange(WORK_TIME_50)}
            disabled={isRunning}
          >
            50 min
          </button>
        </div>
        <div className="text-6xl font-mono mb-4">
          {minutes}:{seconds}
        </div>
        <div className="mb-4">
          <span className="text-lg">
            {isWork ? "Work Session" : "Break Time"}
          </span>
        </div>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-primary text-white rounded"
            onClick={startTimer}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded"
            onClick={stopTimer}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            className="px-4 py-2 bg-muted text-black rounded"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
} 