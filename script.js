let array = [0,1,2,3,4,5,5,6,7,8,9,10];
function maxSum (array){
    let maxSum=0,prevElement,sum ;
    array.forEach((element,index) => {
        if( index==0){
            prevElement=element;
            sum=prevElement;
        }else{
            if(element==prevElement+1){
                sum+=element;
                prevElement=element;
            }
            else{
                prevElement=element;
                sum=element;
            }
        }
        if(maxSum<sum){
            maxSum=sum;
        }
    });
    return maxSum
}

console.log(maxSum(array));