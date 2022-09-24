
const  makeUser = (val) => val;

const user1 = makeUser({
    friends: [
        makeUser({ id: 1 }),
        makeUser({ id: 2 }), // общий друг
    ],
});

const user2 = makeUser({
    friends: [
        makeUser({ id: 2 }), // общий друг
        makeUser({ id: 3 }),
    ],
});

const id = (coll) => coll['friends'];

const getFriends = (...coll) =>{
    const mess = coll.map(el => el.friends);
    const getFriends = [].concat(...mess);
    return getFriends;
}

console.log(getFriends(user1, user2));

const getMutualFriends = (coll1, coll2) => {
    let user = id(coll1), users = id(coll2);
    var userId = user.filter(v => users.some(v2 => v.id == v2.id));
    return {
        friends:[],
        id: userId,
        getFriends: getFriends(coll1,coll2)
    }
}

console.log(getMutualFriends(user1, user2));