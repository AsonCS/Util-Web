export function generateNumbers(max: number, size: number): string {
    if (size > max) {
        alert('Size cannot be greater than max')
        return ''
    }
    const numbers = Array<string>()
    while (numbers.length < size) {
        const number = (Math.floor(Math.random() * max) + 1)
            .toString()
            .padStart(max.toString().length, '0')
        if (!numbers.includes(number)) {
            numbers.push(number)
        }
    }
    return numbers.sort().join(', ')
}
