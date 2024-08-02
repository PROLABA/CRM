export const getNormalizeDateDMY = (date: string) => {
    if(!date) return ''
    return new Date(date).toLocaleDateString()
}