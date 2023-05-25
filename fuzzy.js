var iSuhu = 19.5;
var iLembab = 90.5;
var iAngin = 2.1;
var cuaca = [5,20,50,100];

function cekStatusSuhu(iSuhu){
    if(iSuhu < 21){
         kSuhu = "Suhu Rendah";
    }else if(iSuhu > 29){
        kSuhu = "Suhu Tinggi";
    }else if(iSuhu > 20 && iSuhu < 30) {
         kSuhu = "Suhu Normal";
    }else{
        kSuhu = "Suhu Sangat Dingin"
    }
    return iSuhu;
}

function cekStatusLembab(iLembab){
    if(iLembab < 46){
        kLembab = "Rendah";
    }else if(iLembab > 65){
       kLembab = "Lembab";
    }else if(iLembab > 45 && iLembab < 66){
        kLembab = "Sedang";
    }
   return iLembab;
}

function cekStatusAngin(iAngin){
    if(iAngin < 1){
        kAngin = "Pelan";
    }else if(iAngin > 0.9 && iAngin < 2.1){
       kAngin = "Sedang";
    }else if(iAngin > 2){
        kAngin = "Kencang";
    }
   return iAngin;
}

// parameter keanggotaan suhu
function suhuRendah(iSuhu){
    if(iSuhu <= 20 ){
        suhuR = 1;
    }else if(iSuhu > 21 ){
        suhuR = 0; 
    }else if(20 < iSuhu < 21 ){
        suhuR = (21-iSuhu)/(21-20);
    }
    return suhuR;
}
function suhuNormal(iSuhu){
    if(iSuhu <= 20){
        suhuN = 0;
    }else if(25 < iSuhu < 30){
        suhuN = (30-iSuhu)/(30-25);
    }else if(20 < iSuhu < 25){
        suhuN = (iSuhu-20)/(iSuhu-25);
    }
    return suhuN;

}function suhuTinggi(iSuhu){
    if(iSuhu <= 29 ){
        suhuT = 0;
    }else if(iSuhu < 30 ){
        suhuT = 1;
    }else if(29 < iSuhu < 30){
        suhuT = (iSuhu-29)/(30-29);
    }
    return suhuT;
}

//parameter keanggotaan lembab
function lembabRendah(iLembab){
    if(iLembab <= 45 ){
        lembabR = 1;
    }else if(iLembab > 46 ){
        lembabR = 0;
    }else if(45 < iLembab < 46 ){
        lembabR = (46-iLembab)/(46-45);
    }
    return lembabR;
}
function lembabNormal(iLembab){
    if(iLembab <= 45){
        lembabN = 0;
    }else if(45 < iLembab < 55.5){
        lembabN = (iLembab-45)/(iLembab-55.5);
    }else if(55.5 < iLembab < 66){
        lembabN = (66-iLembab)/(66-55.5);
    }
    return lembabN;
}
function lembabTinggi(iLembab){
    lembabT = (iLembab-65)/(66-65);
    if(iLembab <= 65 ){
        lembabT = 0;
    }else if(iLembab < 66 ){
        lembabT = 1;
    }else if(65 < iLembab < 66){
        lembabT = (iLembab-65)/(66-66);
    }
    return lembabT;
}

//parameter keanggotaan angin
function anginPelan(iAngin){

    if(iAngin <= 0.9 ){
        anginR = 1;
    }else if(0.9 < iAngin < 1 ){
        anginR = (1-iAngin)/(1-0.9);
    }else if(iAngin > 1 ){
        anginR = 0;
    }
    return anginR;
}
function anginSedang(iAngin){
    if(iAngin <= 0.9){
        anginN = 0;
    }else if(1.5 < iAngin < 2.1){
        anginN = (2.1-iAngin)/(2.1-1.5);
    }else if(0.9 < iAngin < 1.5){
        anginN = (iAngin-0.9)/(iAngin-1.5);
    }
    return anginN;
}
function anginKencang(iAngin){
    if(iAngin <= 2 ){
        anginT = 0;
    }else if(iAngin < 2.1 ){
        anginT = 1;
    }else if(2 < iAngin < 2.1){
        anginT = (iAngin-2)/(2.1-2);
    }
    return anginT;
}

function r1(suhuRendah, lembabRendah, anginPelan){
    rule1 = Math.min(suhuRendah(iSuhu), lembabRendah(iLembab), anginPelan(iAngin));
    z1 = 15;
    return rule1 & z1;
}

function r2(suhuRendah, lembabRendah, anginSedang){
    rule2 = Math.min(suhuRendah(iSuhu), lembabRendah(iLembab), anginSedang(iAngin));
    z2 = 15;
    return rule2 & z2;
}

function r3(suhuRendah, lembabRendah, anginKencang){
    rule3 = Math.min(suhuRendah(iSuhu), lembabRendah(iLembab), anginKencang(iAngin));
    z3 = 15;
    return rule3 & z3;
}
//
function r4(suhuRendah, lembabNormal, anginPelan){
    rule4 = Math.min(suhuRendah(iSuhu), lembabNormal(iLembab), anginPelan(iAngin));
    z4 = 15;
    return rule4 & z4;
}

function r5(suhuRendah, lembabNormal, anginSedang){
    rule5 = Math.min(suhuRendah(iSuhu), lembabNormal(iLembab), anginSedang(iAngin));
    z5 = 15;
    return rule5 & z5;
}

function r6(suhuRendah, lembabNormal, anginKencang){
    rule6 = Math.min(suhuRendah(iSuhu), lembabNormal(iLembab,anginKencang(iAngin)));
    z6 = 15;
    return rule6 & z6;
}
//
function r7(suhuRendah, lembabTinggi, anginPelan){
    rule7 = Math.min(suhuRendah(iSuhu), lembabTinggi(iLembab), anginPelan(iAngin));
    z7 = 25;
    return rule7 & z7;
}

function r8(suhuRendah, lembabTinggi, anginSedang){
    rule8 = Math.min(suhuRendah(iSuhu), lembabTinggi(iLembab), anginSedang(iAngin));
    z8 = 50;
    return rule8 & z8;
}

function r9(suhuRendah, lembabTinggi, anginKencang){
    rule9 = Math.min(suhuRendah(iSuhu), lembabTinggi(iLembab), anginKencang(iAngin));
    z9 = 100;
    return rule9 & z9;
}
//
function r10(suhuNormal, lembabRendah, anginPelan){
    rule10 = Math.min(suhuNormal(iSuhu), lembabRendah(iLembab), anginPelan(iAngin));
    z10 = 15;
    return rule10 & z10;
}

function r11(suhuNormal, lembabRendah, anginSedang){
    rule11 = Math.min(suhuNormal(iSuhu), lembabRendah(iLembab), anginSedang(iAngin));
    z11 = 15;
    return rule11 & z11;
}

function r12(suhuNormal, lembabRendah, anginKencang){
    rule12 = Math.min(suhuNormal(iSuhu), lembabRendah(iLembab), anginKencang(iAngin));
    z12 = 15;
    return rule12 & z12;
}
//
function r13(suhuNormal, lembabNormal, anginPelan){
    rule13 = Math.min(suhuNormal(iSuhu), lembabNormal(iLembab), anginPelan(iAngin));
    z13 = 15;
    return rule13 & z13;
}

function r14(suhuNormal, lembabNormal, anginSedang){
    rule14 = Math.min(suhuNormal(iSuhu), lembabNormal(iLembab), anginSedang(iAngin));
    z14 = 15;
    return rule14 & z14;
}

function r15(suhuNormal, lembabNormal, anginKencang){
    rule15 = Math.min(suhuNormal(iSuhu), lembabNormal(iLembab), anginKencang(iAngin));
    z15 = 15;
    return rule15 & z15;
}
//
function r16(suhuNormal, lembabTinggi, anginPelan){
    rule16 = Math.min(suhuNormal(iSuhu), lembabTinggi(iLembab), anginPelan(iAngin));
    z16 = 15;
    return rule16 & z16;
}

function r17(suhuNormal, lembabTinggi, anginSedang){
    rule17 = Math.min(suhuNormal(iSuhu), lembabTinggi(iLembab), anginSedang(iAngin));
    z17 = 15;
    return rule17 & z17;
}

function r18(suhuNormal, lembabTinggi, anginKencang){
    rule18 = Math.min(suhuNormal(iSuhu), lembabTinggi(iLembab), anginKencang(iAngin));
    z18 = 15;
    return rule6 & z18;
}
//
function r19(suhuTinggi, lembabRendah, anginPelan){
    rule19 = Math.min(suhuTinggi(iSuhu), lembabRendah(iLembab), anginPelan(iAngin));
    z19 = 15;
    return rule19 & z19;
}

function r20(suhuTinggi, lembabRendah, anginSedang){
    rule20 = Math.min(suhuTinggi(iSuhu), lembabRendah(iLembab), anginSedang(iAngin));
    z20 = 15;
    return rule20 & z20;
}

function r21(suhuTinggi, lembabRendah, anginKencang){
    rule21 = Math.min(suhuTinggi(iSuhu), lembabRendah(iLembab), anginKencang(iAngin));
    z21 = 15;
    return rule21 & z21;
}
//
function r22(suhuTinggi, lembabNormal, anginPelan){
    rule22 = Math.min(suhuTinggi(iSuhu), lembabNormal(iLembab), anginPelan(iAngin));
    z22 = 15;
    return rule22 & z22;
}

function r23(suhuTinggi, lembabNormal, anginSedang){
    rule23 = Math.min(suhuTinggi(iSuhu), lembabNormal(iLembab), anginSedang(iAngin));
    z23 = 10;
    return rule23 & z23;
}

function r24(suhuTinggi, lembabNormal, anginKencang){
    rule24 = Math.min(suhuTinggi(iSuhu), lembabNormal(iLembab), anginKencang(iAngin));
    z24 = 10;
    return rule24 & z24;
}
//
function r25(suhuTinggi, lembabTinggi, anginPelan){
    rule25 = Math.min(suhuTinggi(iSuhu), lembabTinggi(iLembab), anginPelan(iAngin));
    z25 = 15;
    return rule25 & z25;
}

function r26(suhuTinggi, lembabTinggi, anginSedang){
    rule26 = Math.min(suhuTinggi(iSuhu), lembabTinggi(iLembab), anginSedang(iAngin));
    z26 = 15;
    return rule6 & z26;
}
function r27(suhuTinggi, lembabTinggi, anginKencang){
    rule27 = Math.min(suhuTinggi(iSuhu), lembabTinggi(iLembab), anginKencang(iAngin));
    z27 = 15;
    return rule27 & z27;
}

//deffuzy
var s1 = r1(suhuRendah, lembabRendah, anginPelan);
var s2 = r2(suhuRendah, lembabRendah, anginSedang);
var s3 = r3(suhuRendah, lembabRendah, anginKencang);
var s4 = r4(suhuRendah, lembabNormal, anginPelan);
var s5 = r5(suhuRendah, lembabNormal, anginSedang);
var s6 = r6(suhuRendah, lembabNormal, anginKencang);
var s7 = r7(suhuRendah, lembabTinggi, anginPelan);
var s8 = r8(suhuRendah, lembabTinggi, anginSedang);
var s9 = r9(suhuRendah, lembabTinggi, anginKencang);
var s10 = r10(suhuNormal, lembabRendah, anginPelan);
var s11 = r11(suhuNormal, lembabRendah, anginSedang);
var s12 = r12(suhuNormal, lembabRendah, anginKencang);
var s13 = r13(suhuNormal, lembabNormal, anginPelan);
var s14 = r14(suhuNormal, lembabNormal, anginSedang);
var s15 = r15(suhuNormal, lembabNormal, anginKencang);
var s16 = r16(suhuNormal, lembabTinggi, anginPelan);
var s17 = r17(suhuNormal, lembabTinggi, anginSedang)
var s18 = r18(suhuNormal, lembabTinggi, anginKencang);
var s19 = r19(suhuTinggi, lembabRendah, anginPelan);
var s20 = r20(suhuTinggi, lembabRendah, anginSedang);
var s21 = r21(suhuTinggi, lembabRendah, anginKencang);
var s22 = r22(suhuTinggi, lembabNormal, anginPelan);
var s23 = r23(suhuTinggi, lembabNormal, anginSedang);
var s24 = r24(suhuTinggi, lembabNormal, anginKencang);
var s25 = r25(suhuTinggi, lembabTinggi, anginPelan);
var s26 = r26 (suhuTinggi, lembabTinggi, anginSedang);
var s27 = r27(suhuTinggi, lembabTinggi, anginKencang);

var deffuzy = (rule1*z1)+(rule2*z2)+(rule3*z3)+(rule4*z4)+(rule5*z5)+(rule6*z6)+(rule7*z7)+(rule8*z8)+(rule9*z9)+
              (rule10*z10)+(rule11*z11)+(rule12*z12)+(rule13*z13)+(rule14*z14)+(rule15*z15)+(rule16*z16)+(rule17*z17)+
              (rule19*z19)+(rule20*z20)+(rule21*z21)+(rule22*z22)+(rule23*z23)+(rule24*z24)+(rule25*z25)+(rule26*z26)+
              (rule27*z27)/(rule1+rule2+rule3+rule4+rule5+rule6+rule7+rule8+rule9+rule10+rule11+rule12+rule13+rule14+
              rule15+rule16+rule17+rule18+rule19+rule20+rule21+rule22+rule23+rule24+rule25+rule26+rule27);

console.log("Fuzzy = " + deffuzy);

if(deffuzy <= 5){
    console.log("Cuaca Cerah");
}else if(5 < deffuzy && deffuzy <= 20){
    console.log("Hujan Ringan");
}else if(20 < deffuzy && deffuzy <= 50){
    console.log("Hujan Sedang");
}else if (50 < deffuzy ){
    console.log("Hujan Lebat");
}

var statusS = cekStatusSuhu(iSuhu);

console.log("Status Suhu: " + kSuhu);

var statusL = cekStatusLembab(iLembab);
console.log("Status Lembab: " + kLembab);

var statusA = cekStatusAngin(iAngin);
console.log("Status Angin: " + kAngin);