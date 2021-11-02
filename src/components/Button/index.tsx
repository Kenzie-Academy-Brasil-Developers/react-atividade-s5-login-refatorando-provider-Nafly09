import { ReactNode } from "react";
import { Container } from "./styles";
interface ButtonProps {
  children: ReactNode;
  type?: string;
  whiteSchema?: Boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  whiteSchema = false,
  type,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <Container
      whiteSchema={whiteSchema}
      type="submit"
      onClick={onClick}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
