export const capitalize = (str) => {
    let letters = [...str]
    letters[0] = letters[0].toUpperCase()
    return letters.join('')
}