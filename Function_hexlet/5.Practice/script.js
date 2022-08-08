
//Реализуйте функцию, которая принимает на вход список пользователей 
// и возвращает плоский список подруг всех пользователей (без сохранения ключей). 
// Друзья каждого пользователя хранятся в виде массива в ключе friends. 
// Пол доступен по ключу gender и может принимать значения male или female.

const users = [
    {
      name: 'Tirion',
      friends: [
        { name: 'Mira', gender: 'female' },
        { name: 'Ramsey', gender: 'male' },
      ],
    },
    { name: 'Bronn', friends: [] },
    {
      name: 'Sam',
      friends: [
        { name: 'Aria', gender: 'female' },
        { name: 'Keit', gender: 'female' },
      ],
    },
    {
      name: 'Rob',
      friends: [
        { name: 'Taywin', gender: 'male' },
      ],
    },
  ];
   
  let getGirlFriends = (coll) => {
    return result = coll.map(el => el.friends).flat().filter(el => el.gender === 'female');
  }

  console.log(getGirlFriends(users));