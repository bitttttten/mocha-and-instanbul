// rounds a number to n decimal places
export function roundToNDecimalPlaces(number, decimalPlaces = 1) {
	return Math.round(number * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)
}