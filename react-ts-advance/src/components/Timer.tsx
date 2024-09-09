import Container from './UI/Container.tsx';
import {useTimersContext, type Timer as TimerType} from '../store/timers-context.tsx';
import { useEffect, useRef, useState } from 'react';

type TimerProps = TimerType

export default function Timer({name, duration}: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 0) {
            return 0;
          }

          return prevTime - 50;
        })
      }, 50);

      interval.current = timer;
    } else if (!isRunning && interval.current) {
      clearInterval(interval.current);
    }


    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTimer = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime}/></p>
      <p>{formattedRemainingTimer}</p>
    </Container>
  );
}
