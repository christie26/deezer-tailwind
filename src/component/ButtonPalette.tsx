import React from "react";
import Button from "./Button";

type Variant = "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
type Size = "xs" | "sm" | "md" | "lg" | "xl";
type Color = "gray" | "red" | "green";

/*
Button Palette components to show various type of Button.

Props: none
States: none

Way to appoarch : Try to mimic chakra's palette to show various types of components.

Challenge

1. Deezer Design System
    Problem:  Started the test without understand of "Deezer design system" 
              and made full palette that doesn't fit to Deezer design system.
    Decision: Keep palettes I made
              and add deezer style components.
*/
const ButtonPalette: React.FC = () => {
  return (
    <div className="mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
        Button Palette
      </h2>

      {/* Button Deezer */}
      <div className="mb-6">
        <h3 className="text-xl mb-4 text-gray-900	font-semibold">
          Button Deezer
        </h3>
        <div className="flex flex-row justify-center items-center gap-4 p-4 bg-black">
          <Button colorPalette="deezer" variant="plain">{`Offres`}</Button>
          <Button
            colorPalette="deezer"
            variant="plain"
          >{`Découvrir Deezer`}</Button>
          <Button colorPalette="deezer" variant="plain">{`Musique`}</Button>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 p-4 bg-black">
          <Button
            colorPalette="deezer"
            variant="outline"
          >{`Ouvrir le player`}</Button>
          <Button
            colorPalette="deezer"
            variant="outline"
          >{`Découvrir Deezer`}</Button>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 p-4 bg-white">
          <Button
            colorPalette="deezer"
            variant="solid"
            size="xl"
          >{`S'inscrire gratuitement`}</Button>
          <Button
            colorPalette="deezer"
            variant="solid"
            size="xl"
          >{`Essayer gratuitement`}</Button>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="mb-6">
        <h3 className="text-xl mb-4 text-gray-900	font-semibold">
          Button Sizes
        </h3>
        <div className="flex flex-row justify-center items-center gap-4">
          {["xs", "sm", "md", "lg", "xl"].map((size) => (
            <Button size={size as Size}>{`Button (${size})`}</Button>
          ))}
        </div>
      </div>

      {/* Button Variants */}
      <div className="mb-6">
        <h3 className="text-xl mb-4 text-gray-900 font-semibold">
          Button Variants
        </h3>
        <div className="flex flex-row justify-center items-center gap-4">
          {["solid", "subtle", "surface", "outline", "ghost", "plain"].map(
            (variant) => (
              <Button variant={variant as Variant}>{`${variant}`}</Button>
            ),
          )}
        </div>
      </div>

      {/* Button Colors */}
      <div className="mb-6">
        <h3 className="text-xl mb-4 text-gray-900 font-semibold">
          Button Colors
        </h3>
        <div className="flex flex-col justify-center items-center gap-4">
          {[
            "gray",
            "red",
            "green",
            "blue",
            "teal",
            "pink",
            "purple",
            "cyan",
            "orange",
            "yellow",
          ].map((color) => (
            <div key={color} className="flex flex-row space-x-4">
              {["solid", "outline", "surface", "subtle"].map((variant) => (
                <Button
                  colorPalette={color as Color}
                  variant={variant as Variant}
                >
                  {`Button`}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Button Loading */}
      <div className="mb-6">
        <h3 className="text-xl mb-4 text-gray-900 font-semibold">
          Button Loading
        </h3>
        <div className="flex flex-col justify-center items-center gap-4">
          <Button colorPalette="green" loading>
            Click me
          </Button>
          <Button loading loadingText="Saving...">
            Click me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonPalette;
