import buttons from "./Components/button";

function componentStyles(theme){
    const colors = theme('colors');
    return [buttons(colors)];
}

export default componentStyles;