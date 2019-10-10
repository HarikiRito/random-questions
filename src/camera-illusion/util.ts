export function setMapMax(matrix: number[][], reverseKey = false) {
  const mapMax = new Map()
  matrix.forEach((row, i) => {
    const max = Math.max(...row)
    row.filter((value, rowPos) => {
      if (value === max) {
        const pos = reverseKey ? `${rowPos}${i}` : `${i}${rowPos}`
        mapMax.set(pos, value)
      }
    })
  })
  return mapMax
}

export function transpose(a: number[][]) {
  return Object.keys(a[0]).map(c => a.map(r => r[c as any]))
}

export function sumPackage(map: number[][]) {
  const sumReducer = (accumulator: number, currentValue: number) => accumulator + currentValue

  return map.map(a => a.reduce(sumReducer)).reduce(sumReducer)
}