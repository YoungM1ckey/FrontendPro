let str = ""
for(let i = 20; i <= 30; i += 0.5) {
    if (str) str += ", ";
    str += i;
}

console.log(str);