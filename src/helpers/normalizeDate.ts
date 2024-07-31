export const getNormalaizeDateDMY = (date: string) => {
    return new Date(date).toLocaleDateString()
}