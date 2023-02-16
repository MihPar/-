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

