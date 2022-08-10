import Projects from "../components/Project";
import Navbar from "../components/navbar";
import { Container} from "@mui/material";

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth={"lg"} sx={{ my: 2 }}>
        <Projects />
      </Container>
    </div>
  );
}

export default App;
