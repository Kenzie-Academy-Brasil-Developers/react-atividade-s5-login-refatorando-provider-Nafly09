import { ReactNode } from "react";
import { Container } from "./styles";
interface ButtonProps {
  children: ReactNode;
  type?: string;
  whiteSchema?: Boolean;
}

const Button = ({
  children,
  whiteSchema = false,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <Container whiteSchema={whiteSchema} type="submit" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
