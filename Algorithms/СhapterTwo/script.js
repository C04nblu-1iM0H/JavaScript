
const music = [
    {nameMusic: 'Radiohead',          playbackСounter: 156},
    {nameMusic: 'Kishore Kumar',      playbackСounter: 141},
    {nameMusic: 'The blakc keys',     playbackСounter: 35},
    {nameMusic: 'Neutral milk hotel', playbackСounter: 94},
    {nameMusic: 'Beck',               playbackСounter: 88},
    {nameMusic: 'The strokes',        playbackСounter: 61},
    {nameMusic: 'Wilco',              playbackСounter: 111},
]

let selectionSortMusic = (coll) => {
    //return coll.sort((a,b) => { return a.playbackСounter < b.playbackСounter ? 1 : -1 });
    let n = coll.length;
    for (let i = 0; i < n; i++) {
        // Находим наименьшее число в правой части массива
        max = i 
        for (let j = i; j < n; j++) {
           if(coll[j].playbackСounter > coll[max].playbackСounter){
            max = j;
           } 
        }
        if(max != i ){
            // Заменяем элементы
            let temp = coll[i].playbackСounter;
            coll[i].playbackСounter = coll[max].playbackСounter;
            coll[max].playbackСounter = temp;
        }
    }
    return coll;
}
let musicSort = selectionSortMusic(music);
console.log(musicSort);

let search_binaryName =(coll, el) =>{
    let start = 0;
    let end = coll.length - 1;
    
    while (start <= end ) {
        let middle = Math.floor((start + end) / 2);

        if(coll[middle].playbackСounter === el) return coll[middle].nameMusic;
        coll.middle > el ? end = middle - 1 : start = middle + 1;
    }
    return null;
}

console.log(search_binaryName(musicSort, 61));

