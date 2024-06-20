function buttons(colors){
    const baseStyles = {
        '.btn': {
            borderRadius: '.325rem',
            transitionProperty: 'all',
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms"
        },
        '.btn:not(.btn-sm, .btn-lg)': {
            padding: '.5rem .65rem'
        },
    }
    const generator = function(colorName){
        let color = colors[colorName];
        return {
            [`.btn-${colorName}`]: {
                backgroundColor: color.replace('<alpha-values>', 1),
                color: 'white',
                "&:hover": {
                    backgroundColor: color.replace('<alpha-values>', 0.9),
                },
                "&:focus": {
                    border: `2px solid ${color.replace('<alpha-values', 0.2)}`
                }
            },
        }
    }


    return {
        ...baseStyles,
        ...generator('primary'),
        ...generator('secondary'),
        ...generator('tertiary')

    }
}

export default buttons;