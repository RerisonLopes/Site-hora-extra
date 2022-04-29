 
  
  
  
   

  
  function calcular(){

    var txt1 = document.getElementById("txt1")
    var txt2 = document.getElementById("txt2")
    var txt3 = document.getElementById("txt3")
    var rVT = document.getElementsByName('radVT')
    var rPM = document.getElementsByName('radPM')
    var p1 = document.getElementById("p1")
    var p2 = document.getElementById("p2")
    var p3 = document.getElementById("p3")
    var p4 = document.getElementById("p4")
    var p5 = document.getElementById("p5")
    var p6 = document.getElementById("p6")
    var p7 = document.getElementById("p7")
  
    var sb = Number(txt1.value)
    var qh = Number(txt2.value)
    var qh2 = Number(txt3.value)
    var vt 
    var pm = 130
    var adiantamento
    var s
    var inss
    var irrf
    var totalInposto
    var sd
    var sh 
    var hex
    var hex2
    var thex
    var shex
    var stirandoinss

    
   
       

        s = (sb * 0.6)
        adiantamento = (sb * 0.4)

        if (sb <= 1045){
  inss = (sb * 0.075)
}else if (sb<= 2089.60){
  inss = (sb * 0.09) 
} else if (sb <= 3134.40){
  inss = (sb* 0.12)
}else if (sb <= 6101.06){
  inss = (sb* 0.14)
}
s = (s - inss)

stirandoinss = (sb - inss)

if (stirandoinss <= 1903.98){
  irrf = 0
  s = (s + irrf)
}else if (stirandoinss <= 2826.65){
  irrf = (stirandoinss * 0.075)
  irrf = (irrf - 142.80)
  s = (s - irrf )
}else if (stirandoinss <= 3751.05){
  irrf = (stirandoinss * 0.15)
  s = (s - irrf - 354.80)
}else if (stirandoinss <=4664.68){
  irrf = (stirandoinss * 0.225)
  s = (s - irrf - 636.13)
}else{
  irrf = (stirandoinss * 0.275)
  s = (s - irrf - 869.36)

}


totalInposto = parseFloat(inss) + parseFloat(irrf); 


if (rVT[0].checked){
  
   vt = (sb * 0.06)
  
   s = s - vt;
  
    } else if (rVT[0].checked){
  
      
    }
  
  
    if (rPM[0].checked){
  
     s = (s - pm)
     
       } else if (rPM[0].checked){

       }

   sd = (sb/30)
   sh = (sd/ 8) 
   hex = (sh * 1.5)
   hex2 = (sh * 2)
   thex = (qh * hex)
   thex = thex + (qh2 * hex2);
   shex = parseFloat(s) + parseFloat(thex); 


        p1.innerHTML = (`seu salario é ${s.toFixed(2)}`)
        p2.innerHTML = (`seu adiantamento é ${adiantamento.toFixed(2)}`)
        p3.innerHTML = (`sua hora extra é (dia de semana) ${hex.toFixed(2)}`)
        p4.innerHTML = (`sua hora extra é (final de semana) ${hex2.toFixed(2)}`)
        p5.innerHTML = (`o total de horas extras é ${thex.toFixed(2)}`)
        p6.innerHTML = (`salario mais hora extra é ${shex.toFixed(2)}`)
        p7.innerHTML = (`o total de impostos descontados é ${totalInposto.toFixed(2)}`)
     
        }