import { Button } from "./components/button/Button";
import { Container } from "./components/container/Container.styled";
import { Header } from "./components/header/Header.styled";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./components/profile/Profile.styled";

function App() {
  const Items = ["Profile", "Messages", "Music", "News", "Settings"];
  return (
    <div>
      <Container>
        <Header />
        <Navbar menuItems={Items} />
        <Profile />
      </Container>
    </div>
  );
}

export default App;
