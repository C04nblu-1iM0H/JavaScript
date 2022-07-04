

// Реализуйте функцию buildDefinitionList(),
// которая генерирует HTML список определений (теги <dl>, <dt> и <dd>)
// и возвращает получившуюся строку. 
// При отсутствии элементов в массиве функция возвращает пустую строку.
 
const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];

const buildHTMLList = (coll) => {
    const parts = [];
    for (const item of coll) {
        parts.push(`<li>${item[0]}</li><li>${item[1]}</li>`);
    }
  
    // Метод join объединяет элементы массива в строку
    // В качестве разделителя между значениями
    // используется то, что передано первым параметром
    const innerValue = parts.join('');
    const result = `<ul>${innerValue}</ul>`;
    return result;
  }

  console.log(buildHTMLList(definitions));


const buildDefinitionList=(coll)=>{
    const parts = [];
    for (const item of coll) {
        parts.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`)
    }
    const innerValue = parts.join('');
    const result = `<dl>${innerValue}</dl>`;
    return result;
}


console.log(buildDefinitionList(definitions));