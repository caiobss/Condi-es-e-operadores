function clicar(){
    var a = document.getElementById('txt1')
    var b = document.getElementById('txt2')
    var res = document.getElementById('res')
    var n1 = Number(a.value)
    var n2 = Number(b.value)
    var s = n1 + n2
    res.innerHTML= (`O resultado da soma é: ${s}`)
}
function subtrair(){
    var ca = document.getElementById('c1')
    var ba = document.getElementById('c2')
    var re = document.getElementById('result')
    var n3 = Number(ca.value)
    var n4 = Number(ba.value)
    re.innerHTML=(`O resultado da subtração é: ${n3-n4}`)

}
function dividir(){
    var c = document.getElementById('hh')
    var d = document.getElementById('hh2')
    var rec = document.getElementById('cla')
    var n5 = Number(c.value)
    var n6 = Number(d.value)
    rec.innerHTML=(`O resultado da divisão é: ${n5/n6}`)
}
function multiplicar(){
    var kkk = document.getElementById('mult1')
    var kk = document.getElementById('mult2')
    var multt = document.getElementById('mult-result')
    f4 = Number(kkk.value)
    f5 = Number(kk.value)
    multt.innerHTML=(`O resultado da multiplicação é: ${f4*f5}`)
}
function exp(){
    var exp = document.getElementById('exp1')
    var exp2 = document.getElementById('exp2')
    var rexp = document.getElementById('er')
    var nexp = Number(exp.value)
    var nexp2 = Number(exp2.value)
    rexp.innerHTML=(`${nexp**nexp2}`)

}
function resto(){
    var resto1 = document.getElementById('resto1')
    var resto2 = document.getElementById('resto2')
    var gp1 = Number(resto1.value)
    var gp2 = Number(resto2.value)
    var resto3 = document.getElementById('resto_result')
    resto3.innerHTML = `${gp1%gp2}`
    
}
