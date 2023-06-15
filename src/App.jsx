import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TaskDetail from "./components/TaskDetails/TaskDetail";
import NewTask from './components/NewTask/NewTask';
import EditTask from './components/EditTask/EditTask';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/task'>
        <Route path=':id' element={<TaskDetail />} />
        <Route path='new' element={<NewTask />} />
        <Route path=':id/edit' element={<EditTask />} />
      </Route>
    </Routes>
  );
};

export default App; 