import { button } from "@/elements";

export interface ButtonProps {
  variant: "primary" | "secondary" | "text";
}

const Button: OrbComponent<ButtonProps> = (children, { variant = "text" }) => {
  return button(children, {
    style: {
      padding: "0.75rem 1.5rem",
      backgroundColor:
        variant === "primary"
          ? "blue"
          : variant === "text"
          ? "#efefef"
          : "transparent",
      border: variant === "secondary" ? "4px solid blue" : "none",
      borderRadius: "5px",
    },
  });
};

export default Button;
