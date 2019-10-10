import {setMapMax, sumPackage, transpose} from './util'

const packagesMap = [
  [1, 4, 0, 5, 2],
  [2, 1, 2, 0, 1],
  [0, 2, 3, 4, 4],
  [0, 3, 0, 3, 1],
  [1, 2, 2, 1, 1],
]

let stolenMap = packagesMap.map(a => ( [...a] )) /* Deep clone array */

const rotatePackagesMap = transpose(packagesMap) /* Rotate matrix */

const sideCameraMapMax = setMapMax(packagesMap)
const frontCameraMapMax = setMapMax(rotatePackagesMap, true)
console.log(sideCameraMapMax.entries())
console.log(frontCameraMapMax.entries())
packagesMap.forEach((row, rowNum) => {
  row.forEach((rowItem, rowPos) => {
    const sideCameraKey = `${rowNum}${rowPos}`
    const frontCameraKey = `${rowPos}${rowNum}`

    if (!sideCameraMapMax.get(sideCameraKey) && !frontCameraMapMax.get(frontCameraKey) && rowItem) {
      stolenMap[rowNum][rowPos] = 1
    }

    if (sideCameraMapMax.get(sideCameraKey) && !frontCameraMapMax.get(sideCameraKey)) {
      // stolenMap[rowNum][rowPos] = 1
    }
  })
})


const totalStolenPackages = sumPackage(packagesMap) - sumPackage(stolenMap)

// console.log(packagesMap)
console.log(stolenMap)
// console.log(totalStolenPackages)
export default {}