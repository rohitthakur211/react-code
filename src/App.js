import "./App.css";
import DynamicForm from "./component/DynamicForm";


const data = [
  // { id: 'name', label: 'Name', value: '' },
  // { id: 'email', label: 'Email', value: '' },
  // { id: 'password', label: 'Password', value: '' },
  // { id: 'phoneno', label: 'Phoneno', value: '' },
  // { id: 'adress', label: 'adress', value: '' },
  // { id: 'fathername', label: 'fathername', value: '' },
  {
    fieldName: "textfield",
  },
  {
    fieldName: "checkbox",
  },
  {
    fieldName: "select",
  },
];

const App = (props) => {
  return (
    <div className="App">
      <DynamicForm data={data} />
    </div>
  );
};

export default App;
