import { Container, Content, AnimationContainer } from "./styles";
import { useForm } from "react-hook-form";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import Input from "../../components/Input";
import Button from "../../components/Button";

interface User {
  email: string;
  password: string;
}

interface UserData {
  email: string;
  password: string;
  data: User[];
}

export const Login = () => {
  const { signIn } = useAuth();
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: UserData) => {
    signIn(data);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              name="password"
              error={errors.password?.message}
            />
            <Button>Login</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
