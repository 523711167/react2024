

document.getElementById("eat").addEventListener('click', function() {
    import('./eat/index').then(res => {
        console.log('eat',res);
    })
})

document.getElementById("work").addEventListener('click', function() {
    import('./work/index').then(res => {
        console.log('work',res);
    })
})