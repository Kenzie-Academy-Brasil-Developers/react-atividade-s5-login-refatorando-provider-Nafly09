import { Container } from "./styles";
import Button from "../../components/Button";
import { useAuth } from "../../Providers/Auth";
import logo from "../../assets/images/logoblue.svg";

export const Dashboard = () => {
  const { Logout, data } = useAuth();
  console.log(data);

  return (
    <Container>
      <h3>Bem-vindo {data.name}</h3>
      <img src={logo} alt="profile" />
      <div>
        <Button onClick={() => Logout()}>Logout</Button>
      </div>
    </Container>
  );
};
