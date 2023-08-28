const input = "Shrivishnu";

setTimeout(()=>{
    strreverse(input)
},2000);

function strreverse(str){
    const reversedstr = str.split('').reverse().join('');
    console.log(reversedstr);
}