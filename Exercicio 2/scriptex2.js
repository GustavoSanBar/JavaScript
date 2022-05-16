function testar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
            //criança
            img.setAttribute('src', 'bebe-h.png')
            document.body.style.background = '#add8e6'
            }
            else if (idade <21){
                //jovem
                img.setAttribute('src', 'adh.png')
                document.body.style.background = '#007FFF'
            }
            else if (idade <50) {
                //adulto
                img.setAttribute('src', 'T.png')
                document.body.style.background = '#3232CD'
            }
            else {
                //velho
                img.setAttribute('src', 'velho.png')
                document.body.style.background = '#00009C'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','bebe-m.png')
                document.body.style.background = '#EAADEA'
                }
                else if (idade <21){
                    //jovem
                    img.setAttribute('src','adm.png')
                    document.body.style.background ='#FF6EC7'
                }
                else if (idade <50) {
                    //adulto
                    img.setAttribute('src','Z.png')
                    document.body.style.background = '#FF1CAE'
                }
                else {
                    //velho
                    img.setAttribute('src','velha.png')
                    document.body.style.background ='#FF00FF'
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }
}
    