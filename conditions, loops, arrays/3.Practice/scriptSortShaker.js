
//Сортировка массива методом Шейкер
const arr =  [3, 2, 10, -2, 0, 2, 4, 3];
console.log('Изначальный массив');
console.log(arr);

function getShacker(coll){
   let i, j, temp, n1 = 0, n2 = coll.length - 1;
    do {
        for (i = n2; i > n1; i--){
            if (coll[i - 1] > coll[i]){
                // console.log('обратно coll[i - 1] - ' + coll[i - 1]);
                // console.log('обратно coll[i] - ' + coll[i]);
                j = i;
                console.log(' обратно j - ' + j);
                temp = coll[i - 1];
                coll[i - 1] = coll[i];
                coll[i] = temp;
            }
        }
        n1 = j;
        console.log('n1 - ' + n1);
        for (i = n1; i <= n2; i++){
            if (coll[i - 1] > coll[i]){
                // console.log('вперёд coll[i - 1] - ' + coll[i - 1]);
                // console.log('вперёд coll[i] - ' + coll[i]);
                temp = coll[i - 1];
                coll[i - 1] = coll[i];
                coll[i] = temp;
                j = i; 
                console.log(' вперёд j - ' + j);
            }
        }
        n2 = j - 1;
        console.log('n2 -' + n2);
    } while (n1<n2);
    console.log(coll);
}

getShacker(arr);