const objects = [
    { name: 'Brain' },
    { name: 'Mia' },
  ];

  function each(obj, callback) {
    for (var i = 0 ; i < obj.length; i++) {
        callback.call(obj[i]);
    }
  }
  
  each(objects, function callback() { 
    this.name = this.name.split('').reverse().join('');
  });

  console.log(objects);
  // [
  //   { name: 'niarB' },
  //   { name: 'aiM' },
  // ];
