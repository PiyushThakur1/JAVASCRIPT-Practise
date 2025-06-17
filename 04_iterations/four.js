const myobj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);
    
}

const myArr = ['js', 'rb','py']

for (const key in myArr) {
    // console.log(myArr[key]);
    
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
    
// }