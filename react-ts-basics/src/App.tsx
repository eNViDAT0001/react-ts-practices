import { useState } from "react";
import goalLogo from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  descriptions: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleDeleteGoal = (id: number) => {
    setGoals(goals.filter(item => item.id !== id));
  }

  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      descriptions: summary,
    };

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalLogo, alt: "logo" }}>
        <h1>Welcome to the course</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal}/>
    </main>
  );
}

export default App;
