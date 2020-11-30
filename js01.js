//EX.1 
// let print = ''
// let draw = function(x){
//   for(let i=0; i>x; i--){
//       console.log(print += '*')
//   }
// }
// draw(4)
//Ex.2
// let print = ''
// let draw = function(n){
//   let count = n
//   for(let i=0; i<count; i++){
//     for(let j=0; j<n; n--){
//       print += '*' 
//     }
//     console.log(print)
//   }
// }
// draw(2)
//Ex.3
/*
let draw = function(n){
  let print = ''
  let loop = n
    for(let i=0; i<loop; i++){
        for(let j=1; j<=n; j++){
            print += j
        }
         console.log(print)
         print = ''
    }
}
draw(3)
*/
//Ex.4
/*
let draw = function(n){
  let print = ''
  let loop = n
  let count = 1
    for(count; count<=n; count++){
        for(let i=1; i<=loop; i++){
            print += count
        }
         console.log(print)
         print = ''
    }
}
draw(4)
*/
//Ex.5
/*let draw = function(n){
  let print = ''
  let loop = n
    for(let i=1; i<=n; n--){
        for(let j=1; j<=loop; j++){
            print += n
        }
         console.log(print)
         print = ''
    }
}
draw(5)
*/
//Ex.6
/*
let draw = function(n){
  let show = ''
  let loop =  n * n
    for(let i=1; i<=loop; i++){
      show += i
      if(i % n == 0) show += '\n'
    }
    console.log(show)
}
draw(6)
*/
//Ex.7
/*
let draw = function(n){
  let show = ''
  let loop =  n * n
    for(let i=0; i<loop; loop--){
      if(loop % n == 0) show += '\n'
        show += loop
    }
    console.log(show)
}
draw(7)
*/
//Ex.8
/*
let draw = function(n){
    for(let i=0; i<=n; i++){
      if(i == 0) continue
      console.log( i * 2 )
    }
}
draw(4)
*/
//Ex.10
/*
let draw = function(n){
  let show = ''
    for(let i=1; i<=n; i++){
      for(let j=1; j<=n; j++){
        show += j * i    
      }
      console.log(show)
      show = ''
    }
}
draw(5)
*/
//Ex.11
let draw = function(n){
  let show = ''
  let num = n
  let count = 1
    for(let i=1; i<=n; i++){
      for(let j=1; j<=n; j++){
        //show += count++ //012345678
        show += i * j
        if((count * count) == (i*j)) show += '_' //1 4 6
        else show += '*'
        count
      }
      console.log(show)
      show = ''
    }
  console.log(show)
}
draw(5)