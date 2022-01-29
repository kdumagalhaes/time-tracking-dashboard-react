import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    // colors
    --primary-blue: hsl(246, 80%, 60%);
    --primary-orange: hsl(15, 100%, 70%);
    --primary-soft-blue: hsl(195, 74%, 62%);
    --primary-pink: hsl(348, 100%, 68%);
    --primary-green: hsl(145, 58%, 55%);
    --primary-violet: hsl(264, 64%, 52%);
    --primary-yellow: hsl(43, 84%, 65%);

    --neutral-darker-blue: hsl(226, 43%, 10%);
    --neutral-dark-blue: hsl(235, 46%, 20%);
    --neutral-desaturated-blue: hsl(235, 45%, 61%);
    --neutral-pale-blue: hsl(236, 100%, 87%);

    // layout
    --mobile: 375px;
    --desktop: 1440px;
    --safe-area-padding: 0 40px 0 40px;

    // border
    --border-radius: 15px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: var(---desktop)) {
        font-size: 93.75%;
    }
    @media (max-width: var(---mobile)) {
        font-size: 87.;
    }
}

ul {
    list-style: none;
}

body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
}

button {
    cursor: pointer;
}
`;
