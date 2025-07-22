const btnvalue = (num) => {
    if (result.innerText == '' || result.innerText == '0') {
        result.innerHTML = num;
    }
    else {
        result.innerHTML += num;
    }
}
const clearLast = () => {
    result.innerHTML = result.innerHTML.slice(0, -1)

}
const clearAll = () => {
    result.innerHTML = ''
}
const equalbtn = () => {

    const result = document.getElementById('result')
    const exp = result.innerText.trim();
    try {
        if (exp.endsWith('!')) {
            let num = exp.slice(0, -1)
            if (isNaN(num) || num < 0) {
                result.innerHTML = 'error';
                return;
            }

            let fact = 1;
            for (let i = 1; i <= num; i++) {
                fact *= i;
            }
            result.innerHTML = fact;
        }
        else {
            let toEval = exp.includes('^') ? exp.replace(/\^/g, '**') : exp;
            toEval = toEval.replace(/√(\d+)/g, "Math.sqrt($1)")
            toEval = toEval.replace(/(\d)(π)/g, '$1*$2');
            toEval = toEval.replace(/\π/g, 'Math.PI');
            toEval = toEval.replace(/(\d)(e)/g, '$1*Math.E')
            toEval = toEval.replace(/\e/g, 'Math.E');
            toEval = toEval.replace(/lg\((\d+(\.\d+)?)\)/g, 'Math.log10($1)');
            toEval = toEval.replace(/ln\((\d+(\.\d+)?)\)/g, 'Math.log($1)');
            result.innerHTML = eval(toEval)
        }
    }
    catch (error) {
        result.innerHTML = 'error'
        setTimeout(() => {
            result.innerHTML = ''
        }, 1000);
    }

}
const factorialbtn = () => {

    const result = document.getElementById('result');
    const exp = result.innerText.trim();

    if (exp == '') {
        result.innerHTML = '0!';
    } else if (!exp.endsWith('!')) {
        result.innerHTML = exp + '!';
    }
}

const powerfunction = () => {
    const result = document.getElementById('result');
    let exp = result.innerText.trim();

    if (exp === '' || exp === '0') {
        result.innerHTML = '0^';
    }
    else if (/\d$/.test(exp)) {
        result.innerHTML += '^';
    }
};

const rootbtn = () => {
    if (result.innerText == '') {
        result.innerHTML = '√'
    }
    else {
        result.innerHTML += '√'
    }
}

const pibtn = () => {
    if (result.innerText == '') {
        result.innerHTML = 'π'
    }
    else {
        result.innerHTML += 'π'
    }
}
const expbtn = () => {
    if (result.innerText == '') {
        result.innerHTML = 'e'
    }
    else {
        result.innerHTML += 'e'
    }
}
const lgbtn = () => {
    if (result.innerText == '') {
        result.innerHTML = 'lg('
    }
    else {
        result.innerHTML += 'lg('
    }
}
const paraOpenbtn = () => {
    if (result.innerText == '') {
        result.innerHTML = '('
    }
    else {
        result.innerHTML += '('
    }
}
const paraClosebtn = () => {
    if (result.innerText == '') {
        result.innerHTML = ')'
    }
    else {
        result.innerHTML += ')'
    }
}
const lnbtn = () => {
    if (result.innerText == '') {
        result.innerHTML = 'ln('
    }
    else {
        result.innerHTML += 'ln('
    }
}
const reciprocalbtn=()=>{
    if(result.innerText=='')
    {
        result.innerHTML='^(-1)'
    }
    else{
        result.innerHTML+='^(-1)'
    }
}