import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((item, index) => (
        <li key={`${item.name}-${index}`}>
          <Timer {...item} />
        </li>
      ))}
    </ul>
  );
}
