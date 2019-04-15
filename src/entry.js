const applyPosition = target => {
	let { min = 0, max = 100, value } = target
	min = min || 0
	max = max || 100
	value = parseInt(value)

	const changedPercent = value / (max - min) - 0.01
	target.style.setProperty('--range-postion', `${changedPercent * 100}%`)

	return target
}

const getRanges = () => {
	const ranges = document.querySelectorAll('.ui-range__element')
	return Array.from(ranges).map(applyPosition)
}

const ranges = getRanges()
document.addEventListener(
	'input',
	({ target }) => {
		if (ranges.includes(target)) {
			applyPosition(target)

			return
		}

		if (target.type === 'number') {
			target.value = Number(target.value).toFixed(8)
		}
	},
	true,
)
