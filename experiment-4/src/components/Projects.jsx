import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counterSlice";

function Projects() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Projects</h2>
      <p>Likes: {count}</p>
      <button onClick={() => dispatch(increment())}>
        Like Project
      </button>
    </div>
  );
}

export default Projects;
