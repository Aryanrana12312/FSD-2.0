import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import MySelect from './components/MySelect';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Experiment 1</h2>

      <MyButton />
      <br /><br />

      <MyInput />
      <br /><br />

      <MySelect />
    </div>
  );
}

export default App;