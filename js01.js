//EX.1 
// let print = ''
// let draw = function(x){
//   for(let i=0; i>x; i--){
//       console.log(print += '*')
//   }
// }
// draw(4)
let print = ''
let draw = function(n){
  let count = n
  for(let i=0; i<count; i++){
    for(let j=0; j<n; n--){
      print += '*' 
    }
    console.log(print)
  }
}
draw(5)