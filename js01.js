let print = ''
function draw(x){
      
       if(x>0) print = print + '*'
       if(x==0) {
       console.log(print)
          return
       }
   return draw(x-1)
}
draw(2)