import React from "react";
import "../style/alert.css";
import { ReactComponent as Info } from "../icon/info.svg";
import { ReactComponent as Warning } from "../icon/warning.svg";
import { ReactComponent as Success } from "../icon/success.svg";

/*
Alert components to show various type of Alert.

Props:  title, childre, colorPalette, status, variant, size
States: none


Way to appoarch : Use tailwind's Reusing Style https://tailwindcss.com/docs/reusing-styles 

Challenges
  1. Efficient combination - harder
    Problem:  Here, there are three props that can effect to each other. colorPalette, variant and status.
    Solve:    Only implement variant and status.
*/

export interface AlertProps {
  title: string;
  children?: React.ReactNode;
  colorPalette?: string;
  status?: "info" | "warning" | "success" | "error" | "neutral";
  variant?: "subtle" | "surface" | "outline" | "solid";
  size?: "sm" | "md" | "lg";
}

const Alert: React.FC<AlertProps> = ({
  title,
  children,
  colorPalette,
  size = "md",
  variant = "subtle",
  status = "info",
}) => {
  const className = `
    base
    alert-${status}-${variant}${colorPalette ? `-${colorPalette}` : ""}
    size-${size}
  `.trim();

  const iconSrc = {
    info: <Info className="icon" />,
    warning: <Warning className="icon" />,
    success: <Success className="icon" />,
    error: <Warning className="icon" />,
    neutral: <Success className="icon" />,
  };

  return (
    <div className={className}>
      <div className="root">
        <span className="indicator">{iconSrc[status]}</span>
        <div className="content">
          <div className="title">{title}</div>
          <div className="desciprtion">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
