let db1 =document.querySelector('#db1');
db1.ondblclick = () => {
    console.log('used event handler#1 function');
};
db1.ondblclick = () => {
    console.log('used event handler#2 function');
};