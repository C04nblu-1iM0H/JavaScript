
const scores = [
    [3, 7], // Первая игра
    [4, 1], // Вторая игра
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 5],
  ];

const getSuperSeriesWinner = (str) => {
    const conada = 'conada';
    let sumConada = 0;
    const ussr = 'ussr';
    let sumUssr = 0;
    for (const item of str) {
        if(item[0]!==item[1]){
            if(item[0]>item[1]){
                sumConada +=1;
                console.log('Выйграла Канада со счётом '+ item );
            }else{
                sumUssr +=1;
                console.log('Выйграла CCCР со счётом ' + item );
            }
        }else{
            console.log('Команда сыграла в ничью ' + item + ' ' + ' - null');
        }
    }
    if(sumConada>sumUssr){
        return conada
    }else{
        return ussr
    }
}


console.log(getSuperSeriesWinner(scores));