function stringChop(str, size) {
  // your code here
	  let n=str.length;
 let i=0;
 let starr=[];

 while(i<n){
  let btr="";
  for(let j=0;j<size;j++){
    btr+=str.charAt(i);
    i++;
  }
  starr.push(btr);
 }
 if(n-i<size) {
  btr="";
 for(let j=i;j<n;j++){
  btr+=str.charAt(j);
 }
 if(btr!="") starr.push(btr);
}
 return starr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
