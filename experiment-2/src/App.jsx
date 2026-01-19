import ButtonBasic from './components/Button.jsx';
import TextFieldBasic from './components/TextField.jsx';
import SelectBasic from './components/Select.jsx';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Experiment 2</h2>

      <ButtonBasic />
      <br /><br />

      <TextFieldBasic />
      <br /><br />

      <SelectBasic />
    </div>
  );
}

export default App;