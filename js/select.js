document.getElementsByTagName('div')[1].addEventListener('click',(event)=>{
    const sub = document.getElementsByTagName('form')[0];
    const hidden = document.getElementsByClassName('hidden')[0];
    hidden.value = 'red';
    sub.submit();
})

document.getElementsByTagName('div')[2].addEventListener('click',(event)=>{
    const sub = document.getElementsByTagName('form')[0];
    const hidden = document.getElementsByClassName('hidden')[0];
    hidden.value = 'blue';
    sub.submit();
})