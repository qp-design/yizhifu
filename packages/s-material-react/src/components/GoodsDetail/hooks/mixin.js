// export function RichTextMixin(result) {
//     const styleArr = result.split('.ssd-module-wrap .M');
//
//     styleArr.shift();
//
//     const divArr = styleArr.at(-1).split('</div>');
//
//     styleArr.pop();
//
//     const lastStyleArrItem = divArr[0].split('</style>');
//
//     styleArr.push(lastStyleArrItem[0]);
//
//     function shift(style) {
//         const [key, value] = style.split(/\{/);
//         let re = value.split('}')[0];
//         const size = re.match(/height:\s{0,9}(\S*)px/)?.[1];
//
//         if (size) {
//             re = re + `; height: ${size / 2}px`;
//         }
//
//         let obj = {
//             [key]:
//                 re + '; background-size: 100%; width: 100%; background-position: center; background-repeat: no-repeat;'
//         };
//         return obj;
//     }
//
//     let styleObj = {};
//     for (let i = 0; i < styleArr.length; i++) {
//         // console.log('--------------||', styleArr[i])
//         styleObj = { ...styleObj, ...shift(styleArr[i]) };
//     }
//
//     let res = '';
//
//     for (let i = 0; i < divArr.length; i++) {
//         combine(divArr[i]);
//         // ++at
//         // if(i === 0) {
//         //   divArr[0] = divArr[0].split('</style>')[1]
//         // }
//         // divArr[i] = combine(divArr[i])
//         // console.log('--------------||', divArr[i])
//     }
//     //  console.log(divArr.join('<span></span>').replace(/"/g, "'"));
//     function combine(value) {
//         const isIn = value.includes('data-id');
//         if (isIn) {
//             for (let key in styleObj) {
//                 if (value.includes(key)) {
//                     value = value.replace(/^\s+|\s+$/g, '');
//                     value =
//                         value.slice(0, value.length - 1) +
//                         ` style='${styleObj[key]}'></div` +
//                         value.slice(value.length - 1);
//                 }
//             }
//             res = res + value;
//         }
//         return value;
//     }
//     return res;
// }
