import AddProjectForm from "../components/AddProject";
import Projects from "../components/Project";
import Navbar from "../components/navbar";
import { Container} from "@mui/material";
import ModalInput from "../components/AddProject/modal";
import AddUser from "../components/AddUser";

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth={"lg"} sx={{ my: 2 }}>
        <AddUser />
        <AddProjectForm />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
