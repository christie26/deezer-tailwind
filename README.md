# deezer-tailwind
Frontend Internship Technical Test: Migration of Chakra UI Components to Tailwind CSS

## Skill
React with typescript
Tailwind CSS

## How to run
You can run this project locally with,
```
npm run start
```
## Chakra UI components
I chose `Button` and `Alert` to migrate.

## Preview
![Screenshot 2024-11-27 at 7 47 25 PM](https://github.com/user-attachments/assets/f15534c5-efe6-4eb1-8601-cff8e9070c48)

### Button
- Implemented `colorPalette`, `size`, `variant`, `loading` and `loadingText` props from **Chakra**.
- Implemented `children` and `onClick` to make this component more compatible for `<button>`.
- Used **Reuse Styles** feature of **Tailwindcss** by writing `button.css` file.
- Defined color palette in `tailwind.config.js` file not to repeat each time.
#### Challenge
- Biggest challenge was to implement combination of two or more props that are related to each other. In the end, I decided to make each combination manually.
- After creating various palettes, I realized that the test is to make **"Deezer design system"**. So I decided to keep what I've done and add more "Deezer" buttons.
- For more desciption, please check `*.tsx` files in `src/components`.
----
### Alert
- Implemented `title`, `status`, `variant`, `size` props from **Chakra**.
- Used **Reuse Styles** feature of **Tailwindcss** by writing `alert.css` file.
- Defined color palette in `tailwind.config.js` file not to repeat each time.
#### Challenge
- With `status`, `variant`, `colorPalette`, there are too many combinations to implement. I decided not to do all for this test. I used `colorPalette` only for **Deezer** design.
- For more desciption, please check `*.tsx` files in `src/components`.

## Reference
- https://www.chakra-ui.com/docs/components/button
- https://www.chakra-ui.com/docs/components/alert
- https://tailwindcss.com/docs/reusing-styles
- https://www.deezer.com/fr/
- https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/theme/recipes/button.ts
- https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/theme/recipes/alert.ts

Done by Yoonseo 27/11/2024

