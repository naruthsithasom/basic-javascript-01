### basic javascript part 01  
> 1. จงเขียน method draw(init n) ให้input ออกมาในกรณีที่ี n มีค่าต่างๆได้ผลลัพธ์ดังนี้  
>> let print = ''  
>>function draw(x){  
>>  
>>      if(x>0) print = print + '*'  
>>       if(x==0) {  
>>        console.log(print)  
>>           return  
>>        }  
>>    return draw(x-1)  
>>}  
>> draw(2)  