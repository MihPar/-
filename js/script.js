function clock() {
    const div = document.querySelector('div')
    div.style.fontSize = '24px'
    div.style.color = "yellow"
    div.style.marginLeft = '120px'
    let now = new Date()
    div.innerText = now.toLocaleTimeString()
}
clock()
setInterval(clock, 1000)

let btn = document.querySelector('.btn')
btn.onclick = function() {
    document.querySelector('.hidden').classList.remove('response')
    const btnTwo = document.createElement('button')
    btnTwo.className = 'btnTwo'
    document.body.append(btnTwo)
    btnTwo.innerText = 'Нажми ещё раз пожалуйста)))'
    btnTwo.onclick = function() {
        document.querySelector('.hidden').classList.add('response')
        btnTwo.style.display = 'none'
        const newp = document.createElement('p')
        document.body.append(newp)
        newp.textContent = 'И я тебя очень люблю))).'
        setTimeout(function() {
            newp.textContent = ""
        }, 2000)

    }
}

