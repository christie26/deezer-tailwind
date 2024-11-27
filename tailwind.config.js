/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx,ts,tsx}"],
  safelist: [
    'btn-solid-deezer',
    'btn-plain-deezer',
    'btn-outline-deezer',
    'alert-info-subtle-deezer',
    'alert-error-subtle-deezer',

    // Button Sizes
    'btn-xs',
    'btn-sm',
    'btn-md',
    'btn-lg',
    'btn-xl',

    // Button Color Palette Variants
    'btn-solid-gray',
    'btn-solid-red',
    'btn-solid-green',
    'btn-solid-blue',
    'btn-solid-teal',
    'btn-solid-pink',
    'btn-solid-purple',
    'btn-solid-cyan',
    'btn-solid-orange',
    'btn-solid-yellow',

    // Outline Color Palette
    'btn-outline-gray',
    'btn-outline-red',
    'btn-outline-green',
    'btn-outline-blue',
    'btn-outline-teal',
    'btn-outline-pink',
    'btn-outline-purple',
    'btn-outline-cyan',
    'btn-outline-orange',
    'btn-outline-yellow',

    // Ghost Color Palette
    'btn-ghost-gray',
    'btn-ghost-red',
    'btn-ghost-green',
    'btn-ghost-blue',
    'btn-ghost-teal',
    'btn-ghost-pink',
    'btn-ghost-purple',
    'btn-ghost-cyan',
    'btn-ghost-orange',
    'btn-ghost-yellow',
    
    // Subtle Color Palette
    'btn-subtle-gray',
    'btn-subtle-red',
    'btn-subtle-green',
    'btn-subtle-blue',
    'btn-subtle-teal',
    'btn-subtle-pink',
    'btn-subtle-purple',
    'btn-subtle-cyan',
    'btn-subtle-orange',
    'btn-subtle-yellow',
    
    // Surface Color Palette
    'btn-surface-gray',
    'btn-surface-red',
    'btn-surface-green',
    'btn-surface-blue',
    'btn-surface-teal',
    'btn-surface-pink',
    'btn-surface-purple',
    'btn-surface-cyan',
    'btn-surface-orange',
    'btn-surface-yellow',

    // Plain Color Palette
    'btn-plain-gray',
    'btn-plain-red',
    'btn-plain-green',
    'btn-plain-blue',
    'btn-plain-teal',
    'btn-plain-pink',
    'btn-plain-purple',
    'btn-plain-cyan',
    'btn-plain-orange',
    'btn-plain-yellow',

    // Disabled State
    'btn-disabled',

    // Alert
    'alert-info-subtle',
    'alert-warning-subtle',
    'alert-success-subtle',
    'alert-error-subtle',
    'alert-neutral-subtle',

    'alert-info-solid',
    'alert-warning-solid',
    'alert-success-solid',
    'alert-error-solid',
    'alert-neutral-solid',

  ],
  theme: {
    extend: {
      colors: {
        deezer: {
          primary:"#A238FF",
          warning: "#FEB2B2",
        },
        gray: {
          solid: "#18181b",
          contrast: "#FFFFFF",
          fg: "#27272a",
          muted: "#d4d4d8",
          subtle: "#f4f4f5",
        },
        red: {
          solid: "#ef4444",
          contrast: "#FFFFFF",
          fg: "#991919",
          muted: "#fca5a5",
          subtle: "#fef2f2",
        },
        orange: {
          solid: "#f97316",
          contrast: "#FFFFFF",
          fg: "#92310a",
          muted: "#fdba74",
          subtle: "#fff7ed",
        },
        yellow: {
          solid: "#eab308",
          contrast: "#1A202C",
          fg: "#845209",
          muted: "#fde047",
          subtle: "#fefce8",
        },
        green: {
          solid: "#22c55e",
          contrast: "#FFFFFF",
          fg: "#116932",
          muted: "#86efac",
          subtle: "#f0fdf4",
        },
        teal: {
          solid: "#14b8a6",
          contrast: "#FFFFFF",
          fg: "#0c5d56",
          muted: "#5eead4",
          subtle: "#f0fdfa",
        },
        blue: {
          solid: "#3b82f6",
          contrast: "#FFFFFF",
          fg: "#173da6",
          muted: "#60a5fa",
          subtle: "#eff6ff",
        },
        cyan: {
          solid: "#06b6d4",
          contrast: "#FFFFFF",
          fg: "#0c5c72",
          muted: "#67e8f9",
          subtle: "#ecfeff",
        },
        purple: {
          solid: "#a855f7",
          contrast: "#FFFFFF",
          fg: "#641ba3",
          muted: "#d8b4fe",
          subtle: "#faf5ff",
        },
        pink: {
          solid: "#ec4899",
          contrast: "#FFFFFF",
          fg: "#a41752",
          muted: "#f9a8d4",
          subtle: "#fdf2f8",
        },
      }
    },
  },
  plugins: [],
}

// NOTE: found color palette from Styles of Chakra webs