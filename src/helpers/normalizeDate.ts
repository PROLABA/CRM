export const getNormalizeDateDMY = (date: string | Date) => {
    if(!date) return ''
    return new Date(date).toLocaleDateString()
}