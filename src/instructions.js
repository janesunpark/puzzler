
const instructions = {
    0: {
        0: 'Square 4 has the shortest name of all the colors.',
        1: 'Squares 2 and 6 share a part of each other\'s name.',
        2: 'Squares 0 and 8 share a part of each other\'s name.',
        3: 'Square 1 shares the name of a fruit.',
        4: 'Squares 4 and 8 have Christmas colors.',
        5: 'Mixing 4 and 6 creates the color for 3.',
        6: 'The colors in Squares 5 and 6 have four letters.'
        
    },

    1: {
        0: 'Orange does not occupy the highest-numbered Square.',
        1: 'Green, Yellow, and Blue are not in corners.',
        2: 'Yellow occupies a number that is higher than Blue or Green.',
        3: 'Blue is between Purple and Pink.',
        4: 'Red is not next to Blue, Green, or Yellow.',
        5: 'Red occupies a Square with a number higher than Yellow.',
        6: 'Purple is next to Yellow.',
        7: 'Sky Blue occupies a Square with a number that is less than Orange.',

    },
}



//select the prop in instructions obj by matching the passed in prop, puzzleId
//map through the instructions obj
//return a list html el with index and key as the index and the value of each key displayed as text


export default instructions;