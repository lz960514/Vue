const arr = [{
        name: '张三',
        age: 20
    },
    {
        name: '李四',
        age: 30
    },
    {
        name: '王二',
        age: 40
    }
]

// const result = arr.map((value, index) => {
//     return index;
// });

// console.log(result);

// arr.forEach((value, index) => {
//     console.log(index);
// });

const result = arr.filter((value, index) => {
    return value['name'].indexOf('张') > -1;
});

console.log(result);