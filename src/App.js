import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CreateGroup } from './components/CreateGroup';
import { AddMembers } from './components/AddMembers';
import { ExpenseMain } from './components/ExpenseMain';
import { RecoilRoot } from 'recoil';

const App = () => (
  <BrowserRouter>
  <RecoilRoot>
    <Routes>
      <Route path="/" element={<CreateGroup />} />
      <Route path="/members" element={<AddMembers />} />
      <Route path="/expense" element={<ExpenseMain />} />
    </Routes>
  </RecoilRoot>
  </BrowserRouter>
)

export default App;
