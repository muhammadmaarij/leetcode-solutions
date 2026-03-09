

function commonElements(arr, threshold=0.001){
    let common = []
    arr1= arr[0]
    arr2= arr[1]
    
    const type = Number.isInteger(arr1[0])
    
    for(let i = 0; i< arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(type){
                if(arr1[i] === arr2[j]){
                    common.push(arr1[i])
                }
            }
            else{
                const abs = Math.abs(arr1[i]-arr2[j])
                if(Math.round(abs)<=threshold)
                    common.push(arr1[i])
            }

        }
    }
    
    console.log(common)
    
    return common.length
}


// console.log("common",commonElements([1.3,3,5,7,6,8], [1.3,7,5,6,9]))


function test(arr, expected){
    let actual = commonElements(arr)

    if(actual == expected){
        return true
    }
    return false
}

function test2(arr, expected){
    let actual = commonArrays(arr)

    if(actual == expected){
        return true
    }
    return false
}


function commonArrays(arr,threshold=0.001){
    let common = arr[0]
    
    const type = Number.isInteger(common[0])
    
    for(let i = 1; i< arr.length; i++){
        let temp = []
        
        for(let j=0; j<common.length; j++){
            
            for(let k = 0; k<arr[i].length; k++){
                if(type){
                    if(common[j] == arr[i][k]){
                        temp.push(common[j])
                    }
                }
                else{
                    const abs = Math.abs(common[j] - arr[i][k])
                    if(Math.round(abs)<=threshold){
                        temp.push(common[j])
                    }
                }
            }

        }
        common = common.filter(item=>temp.includes(item))
        if(i == arr.length-1){
            common = temp
        }
    }
    
    return common.length
}

// console.log('hehee',commonArrays([[1,3],[2,3,1],[2,4,1]]))
console.log('test',test2([[1,3],[2,3,1],[2,4,1]],1))
console.log('test',test2([[1,2],[2,3,1],[2,4,1]],2))
console.log('test',test2([[1,3],[2,3,1],[2,4,1]],1))
console.log('test',test2([[1,5],[2,1],[1,5]],1))
console.log('test',test2([[1.3,21.001],[2,3,21],[2,4,21]],1))
console.log('test',test2([[7.001,1.3,21.001],[7.0,2,3,21],[7.001,2,4,21]],2))


// console.log(test([[1,3,5,7,6,8], [7,5,6,9]],3))
// console.log(test([[1,3,21,12,13,5,7,6,8], [3,12,7,5,6,9]],5))
// console.log(test([[1,3,21], [3,12,7.5,5,6,9]],1))
// console.log(test([[1.1,3.2,21.001], [3.2,12,7.5,5,6,21]], 2))







