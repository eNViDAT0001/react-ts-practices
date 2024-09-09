import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

export type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList(props: CourseGoalListProps) {
  if (!props.goals.length) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (props.goals.length >= 4) {
    warningBox = <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
    </InfoBox>
  }

  return (
    <>
    {warningBox}
    <ul>
      {props.goals.map((item) => (
        <li key={item.id}>
          <CourseGoal id={item.id} title={item.title} onDelete={props.onDelete}>
            <p>{item.descriptions}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    </>
  );
}
