import React from "react";
import "../style/button.css";
import { TailSpin } from "react-loader-spinner";

/*
Button components to show various type of Button.

Props:  onClick, childre, colorPalette, size, variant, loading, loadingText
        colorPalette, size, variant have default value.
        onClick   - to pass event handler
        children  - to pass children
        colorPalette - to pass color palette to use. default as "gray"
        size - to pass size of button. default as "md"
        variant - to pass variant of button. default as "solid"
        loading - to pass if button is loading. If it is true, button is disable.
        loadingText - to add loading message in case button is loading
States: none


Way to appoarch : Use tailwind's Reusing Style https://tailwindcss.com/docs/reusing-styles 

Challenges

  1. Find css detail of chakra components
    Problem:  It was impossible to check css detail from web. (Too many)
    Solve:    Checked chakra github https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/theme/recipes/button.ts
              and implemented css in 'src/style/button.css'

  2. Dynamic Class Generation
    Problem:  When I tried to make dynamic class in Button or Alert component, it doesn't know which specific classes to keep.
    Solve:    Used safelist of tailwind.config to ensure these classes are preserved.

  3. Implement combination efficiently
    Problem:  For example with colorPalette & variant, each combination needs different color palette.
    Decision: I couldn't find a good way do it efficiently, just implemented each cases manually. 


*/

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  colorPalette?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  loading?: boolean;
  loadingText?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  colorPalette = "gray",
  size = "md",
  variant = "solid",
  loading = false,
  loadingText,
}) => {
  const className = `
    btn 
    btn-${size}
    btn-${variant}-${colorPalette}
  `.trim();

  return (
    <button className={className} disabled={loading}>
      {loading ? (
        <span className="flex flex-row gap-3">
          <TailSpin width="15px" height="15px" color="white" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
