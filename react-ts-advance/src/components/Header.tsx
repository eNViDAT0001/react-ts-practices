import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Header() {
  const timerCtx = useTimersContext();

  const onClickHandle = timerCtx.isRunning ? timerCtx.stopTimers : timerCtx.startTimers;

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={onClickHandle}>{timerCtx.isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
