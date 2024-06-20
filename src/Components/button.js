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
                    outline: `5px solid ${color.replace('<alpha-values>', 0.2)}`
                },
                "&:disabled": {
                    backgroundColor: color.replace('<alpha-values>', 0.6),
                }
            },
            [`.btn-${colorName}-outlined`]: {
                border: `2px solid ${color.replace('<alpha-values>', 1)}`,
                color: color.replace('<alpha-values>', 1),
                "&:hover": {
                    border: `2px solid ${color.replace('<alpha-values>', 0.9)}`,
                    color: color.replace('<alpha-values>', 0.9),
                },
                "&:focus": {
                    outline: `5px solid ${color.replace('<alpha-values>', 0.2)}`
                },
                "&:disabled": {
                    border: `2px solid ${color.replace('<alpha-values>', 0.6)}`,
                    color: color.replace('<alpha-values>', 0.6),
                }
            },
        }
    }


    return {
        ...baseStyles,
        ...generator('primary'),
        ...generator('secondary'),
        ...generator('tertiary'),
        ...generator('base'),
        ...generator('info'),
        ...generator('warning'),
        ...generator('success'),
        ...generator('danger'),

    }
}

export default buttons;