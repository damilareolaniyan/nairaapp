document.getElementById('curInput').addEventListener('input', function(e){
    let cur = e.target.value;
    document.getElementById('usdOutput').innerHTML= cur*365;
    document.getElementById('poundOutput').innerHTML= cur*450;
    document.getElementById('yenOutput').innerHTML= cur*99;
    document.getElementById('euroOutput').innerHTML= cur*500;

    
});