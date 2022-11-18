function sortSubArray(){
    var array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
    var arrayCopy = new Array();
    var arrIndex = new Array();
    let indexStart = 0;
    let indexEnd = 0;

    //array disordinato di copia
    for (let j = 0; j < array.length; j++) {
        arrayCopy.push(array[j]);   
    }

    //ordinamento array
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
         if (array[i] < array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            arrIndex.push(i);
         }
        }
       }

       //confronto array
       for (let i = 0; i < array.length; i++) {
            if(arrayCopy[i] != array[i]){
                arrIndex.push(i);
            }
       }
       console.log("indici array "+arrIndex);


    /*while(i == array.length){
        while(j < array.length){
            if(array[j]<= array[i-1] && array[j]>= array[i+1]){
                indexEnd = j;
                elemIndexEnd = array[j];
            }
        }
        i++;
        j++;
    }


    for (let i = 1; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if(array[j]>= array[i-1] && array[j]<= array[i+1]){
                continue;
            }else if(array[j]<= array[i-1] && array[j]>= array[i+1]){
                indexEnd = j;
                elemIndexEnd = array[j];
            }
        }
    }*/
                /*for (let k = 0; k < indexEnd; k++) {
                    if (elemIndexEnd>= array[k] && elemIndexEnd <= array[k++]){
                        indexStart = k;                    
                    }
                }           

    arrIndex.push(indexStart);
    .push(indexEnd);
    alert (arrIndex);*/
}