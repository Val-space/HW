import "./App.css";
import Registration from './components/Registraton';
import CustomTable from "./components/customTable";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/container';

function App() {

  return (
    <Container className='mt-5'>
      <Registration/>
      <CustomTable />
    </Container>
  );
}

export default App;
