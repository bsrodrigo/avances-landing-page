import { ReactNode } from "react";

interface ICard {
  children: ReactNode;
}

export const Card: React.FC<ICard> = ({ children }) => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 32,
        padding: "16px 14px",
        boxShadow: "rgb(0 0 0 / 78%) 0px 3px 12px -6px",
      }}
    >
      {children}
    </div>
  );
};
