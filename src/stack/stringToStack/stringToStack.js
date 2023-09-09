export const stringToStack = string => stack => {
    
    const chars = string.split('')
    
    return [...stack, ...chars]
}