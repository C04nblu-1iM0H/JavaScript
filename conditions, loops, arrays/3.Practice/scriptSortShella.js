//сортировка массива методом Шелла

const arr =  [3, 2, 10, -2, 0, 2, 4, 3];
    console.log('Изначальный массив');
    console.log(arr);

    function getShell(coll){
       let i , j , temp, step = coll.length/2;
       console.log('количество эл-ов делит пополам - ' + step);
       while(step){//4
            for (i = 0; i < (coll.length - step); i++) {
                j=i;

                while(j>=0 && coll[j] > coll[j+step]){
                    console.log('j - '+ j);
                    console.log('coll[j] - '+ coll[j]);
                    console.log('coll[j+step] - '+ coll[j+step]);
                    temp = coll[j];
                    coll[j] = coll[j + step];
                    coll[j + step] = temp;
 				    j -= step;
                    console.log('j -= step' + j);
                }
            }
            step /= 2;
       }
       console.log(coll);
    }

    getShell(arr);