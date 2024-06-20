import buttons from "./Components/button";
import inputs from "./Components/input";

function componentStyles(theme){
    const colors = theme('colors');
    return [
        buttons(colors),
        inputs(colors)
    ];
}

export default componentStyles;