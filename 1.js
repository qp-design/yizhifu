var a = `
  width:750px; background-color:#b3b3b3; background-size:100% 100%; background-image:url(//img30.360buyimg.com/sku/jfs/t1/166100/31/5622/179900/6020a3ddEe9463ae9/6c9b7c57da95bba7.jpg);`

console.log(a.match(/height:\s{0,9}(\S*)px/)?.[1])
//
// var cookieName = "admin";
// var str= "admin=abc123"
// var pat = new RegExp("(?<="+cookieName+"=)\\w*","g");   //输出的正则表达式/?<=admin=\w*/g 表示匹配'admin='后面的内容
// str.match(pat)[0];//返回的是个集合对象，取第一个之后会变字符串格式，不取也可以，但是如果有多个值会全部变字符串输出，所以还有取第1个确保数据的准确性
//
// var cookieName = "admin";
// var str= "admin=abc123;"
// var pat = new RegExp("\\w*(?=;)","g") //输出的正则表达式/\w*(?<=;)/g 表示匹配';'前面的内容


// console.log(a.replace(a.charAt(a.length-1), 'dddddddddd'))
// match(/:([a-zA-Z]+)/)
// console.log(a.match(/height:\s{0,9}[\d+]*px/g))
// var str = a.match(/height:\s{0,9}[\d+]*px/g)[0]
