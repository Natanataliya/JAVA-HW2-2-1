//function num(){
//    var a;
 //   a=document.getElementById('out');
 //   for (var i=0; i<=101; i=i+2){
 //       a.innerHTML += i+' ';
//    }
//}
//function num(){
//    var b;
//    b=document.getElementById('out');
 //   for (var i=200; i>=0; i--){
//        b.innerHTML += i+' ';
//    }
//}
//function num(){
 //   var sum=0;
 //   for (var i=0; i<=100; i++){
 //       sum += +i;
        
 //   }
 //   alert(sum);
//} или
var sum=0;
var a='0';
for (var i=1; i<=100; i++) {
  a+='+'+i;
  sum=sum+i;
}
document.getElementById('out').innerHTML=a+'<br>='+sum;
   