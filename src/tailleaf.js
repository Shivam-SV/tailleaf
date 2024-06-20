import plugin from 'tailwindcss/plugin';
import utilsStyles from './themeUtils';
import componentStyles from './themeComponents';
import baseStyles from './themeBase';
import defaultConfig from './defaultConfig';

function tailleaf(){
    return function({addUtilities, addComponents, addBase, theme, e}){
        addUtilities(utilsStyles);
        addComponents(componentStyles(theme));
        addBase(baseStyles);
    }
}

module.exports = plugin.withOptions(tailleaf, () => {
    return {
        theme: {
            extend: defaultConfig
        }
    }
});