// 1. arithmetic progession or not? 

function isArithmeticProgression(data) {
    let delta = []
    for (let index = 0; index < data.length-1; index++) {
        delta.push(data[index+1]-data[index])
    }
    let isSame = true 
    for (const element of delta) {
        if (element !== delta[0]){
            isSame = false
            break
        }
    }
    return isSame ;
}

console.log('=================== SOAL NOMOR 1')
console.log(isArithmeticProgression([1,2,3,4,5]));
console.log(isArithmeticProgression([2,4,6,12,24]));
console.log(isArithmeticProgression([2,4,6,8]));
console.log(isArithmeticProgression([2,6,18,54]));
console.log(isArithmeticProgression([1,2,3,4,7]));


// 2. threeStepsAB

function threeStepsAB(str){
    let indicesA = []
    let indicesB = []
    for (let index = 0; index < str.length; index++) {
        if (str[index]==='a' ) {
            indicesA.push(index)
        }
        if (str[index]==='b') {
            indicesB.push(index)
        }
    }
    
    let selisih = []
    for (let i = 0; i < indicesA.length; i++) {
        for (let j = 0; j < indicesB.length; j++) {
            selisih.push(Math.abs(indicesB[j]-indicesA[i]))
        }
    }
    
    hasil3 = false
    for (const iterator of selisih) {
        if (iterator === 4){
            hasil3 = true
        }else{
            hasil3 = false
        }
    }
    return hasil3
}

console.log('=================== SOAL NOMOR 2')
console.log(threeStepsAB('lane borrowed'))
console.log(threeStepsAB('i am sick'))
console.log(threeStepsAB('you are boring'))
console.log(threeStepsAB('barbarian'))
console.log(threeStepsAB('bacon and meat'))

// 3. sumArray 

function sumArray(dummyArray, result) {
    let groupArray = []
    for (const iterator of dummyArray) {
        let kosong = []
        if (dummyArray.includes(result - iterator)) {
            kosong.push(iterator)
            kosong.push(result-iterator)
            groupArray.push(kosong)
        }
    }
    return groupArray.splice(0, groupArray.length/2)  
}
console.log('=================== SOAL NOMOR 3')
console.log(sumArray([2,1,3,4],5))
console.log(sumArray([1,8,10,3],11))
console.log(sumArray([1,8,2,10,3,9],11))

// 4. largest subarray summation
function arrSum(uoArray) {
    let helpArray = [...uoArray].sort(function(a,b){return b-a})    
    let valueMax = helpArray[0]
    let indexMax = uoArray.indexOf(valueMax)
    let valueMin = helpArray[1]
    let indexMin = uoArray.indexOf(valueMin)
    
    let subArray = uoArray.slice(indexMin, indexMax+1)
    
    return subArray
}

console.log('=================== SOAL NOMOR 4')
console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));