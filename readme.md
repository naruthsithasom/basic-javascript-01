### basic javascript part 01  
 1. จงเขียน method draw(init n) ให้input ออกมาในกรณีที่ี n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>``` let print = ''  
>function draw(x){  
>  
>      if( x > 0 ) print = print + '*'  
>      if( x == 0 ) {  
>        console.log( print )  
>        return  
>      }  
>    return draw( x - 1 )  
>}  
> draw(2)  
>```  
>>Output  
>>**
2. จงเขียน method draw(int n) ให้print ออกมาในกรณีที่ n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>```let print = ''  
>   let draw = function(n){  
>      let count = n  
>      for(let i=0; i<count; i++){  
>        for(let j=0; j<x; n--){  
>          print += '*'  
>        }  
>      console.log(print)  
>      }  
>    }  
>draw(2)  
>```  
>>Output  
>>**  
>>**  
3. จงเขียน method draw(int n) ให้print ออกมาในกรณีที่ n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>```  
>let draw = function(n){
>  let print = ''
>  let loop = n  
>    for(let i=0; i<loop; i++){
>        for(let j=1; j<=n; j++){
>            print += j
>        }
>         console.log(print)
>         print = ''
>    }
>}
>draw(3)
>```
>>Output  
>>1234  
>>1234  
>>1234  
4. จงเขียน method draw(int n) ให้print ออกมาในกรณีที่ n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>```  
>let draw = function(n){
>  let print = ''
>  let loop = n
>  let count = 1
>    for(count; count<=n; count++){
>        for(let i=1; i<=loop; i++){
>            print += count
>        }
>         console.log(print)
>         print = ''
>    }  
>}  
>draw(4) 
>```  
>>Output  
>> 1111  
>> 2222  
>> 3333  
>> 4444  
5. จงเขียน method draw(int n) ให้print ออกมาในกรณีที่ n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>```  
>let draw = function(n){
>  let print = ''
>  let loop = n
>    for(let i=1; i<=n; i++){
>        for(let j=1; j<=loop; j++){
>            print += n
>        }
>         console.log(print)
>         print = ''
>    }  
>}  
>draw(5) 
>```  
>>Output  
>>55555  
>>44444  
>>33333  
>>22222  
>>11111  
6. จงเขียน method draw(int n) ให้print ออกมาในกรณีที่ n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>```  
>let draw = function(n){
>  let show = ''
>  let loop =  n * n
>    for(let i=1; i<=loop; i++){
>      show += i
>      if(i % n == 0) show += '\n'
>    }
>    console.log(show)
>}
>draw(6)
>```  
>>Output  
>>123456  
>>789101112  
>>131415161718  
>>192021222324  
>>252627282930  
>>313233343536  
7. จงเขียน method draw(int n) ให้print ออกมาในกรณีที่ n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>```  
> let draw = function(n){
>  let show = ''
>  let loop =  n * n
>    for(let i=0; i<loop; loop--){
>      if(loop % n == 0) show += '\n'
>        show += loop
>    }
>    console.log(show)
>} 
>draw(7)
>```  
>>Output  
>>49484746454443  
>>42414039383736  
>>35343332313029  
>>28272625242322  
>>21201918171615  
>>141312111098  
>>7654321  
8. จงเขียน method draw(int n) ให้print ออกมาในกรณีที่ n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>```  
> let draw = function(n){
>    for(let i=0; i<n; i++){
>      console.log( i * 2 )
>    }
>}
>draw(4)
>```  
>>Output  
>>0  
>>2  
>>4  
>>6  
9. จงเขียน method draw(int n) ให้print ออกมาในกรณีที่ n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>```  
> let draw = function(n){
>    for(let i=0; i<=n; i++){
>      if(i == 0) continue
>      console.log( i * 2 )
>    }
>}
>draw(4)
>```  
>>Output  
>>0  
>>2  
>>4  
>>6  
10. จงเขียน method draw(int n) ให้print ออกมาในกรณีที่ n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>```  
>let draw = function(n){
>  let show = ''
>    for(let i=1; i<=n; i++){
>      for(let j=1; j<=n; j++){
>        show += j * i    
>      }
>      console.log(show)
>      show = ''
>    }
>}
>draw(4)
>```  
>>Output  
>>1234  
>>2468  
>>36912  
>>481216  