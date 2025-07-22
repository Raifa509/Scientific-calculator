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
            toEval = toEval.replace(/\^/g, '**');
            toEval = toEval.replace(/tan\(([^)]+)\)/g, (_, val) => {
                let angle = eval(val);
                if (isDegree) angle = angle * Math.PI / 180; // convert to radians if DEG
                return Math.tan(angle);
            });
            toEval = toEval.replace(/cos\(([^)]+)\)/g, (_, val) => {
                let angle = eval(val);
                if (isDegree) angle = angle * Math.PI / 180; // convert to radians if DEG
                return Math.cos(angle);
            });
            toEval = toEval.replace(/sin\(([^)]+)\)/g, (_, val) => {
                let angle = eval(val);
                if (isDegree) angle = angle * Math.PI / 180; // convert to radians if DEG
                return Math.sin(angle);
            });
            toEval = toEval.replace(/sin⁻¹\(([^)]+)\)/g, (_, val) => {
                let angle = eval(val);
                let result = Math.asin(angle);
                return isDegree ? (result * 180 / Math.PI) : result;
            });
            toEval = toEval.replace(/cos⁻¹\(([^)]+)\)/g, (_, val) => {
                let angle = eval(val);
                let result = Math.acos(angle);
                return isDegree ? (result * 180 / Math.PI) : result;
            });
            toEval = toEval.replace(/tan⁻¹\(([^)]+)\)/g, (_, val) => {
                let angle = eval(val);
                let result = Math.atan(angle);
                return isDegree ? (result * 180 / Math.PI) : result;
            });

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
const reciprocalbtn = () => {
    if (result.innerText == '') {
        result.innerHTML = '^(-1)'
    }
    else {
        result.innerHTML += '^(-1)'
    }
}

let is2nd = false; // false = normal, true = inverse

const handleSinBtn = () => {
    const result = document.getElementById('result');
    if (result.innerText == '') {
        result.innerHTML = is2nd ? 'sin(' : 'sin⁻¹(';
    } else {
        result.innerHTML += is2nd ? 'sin(' : 'sin⁻¹(';
    }
};
const handleCosBtn = () => {
    const result = document.getElementById('result');
    if (result.innerText == '') {
        result.innerHTML = is2nd ? 'cos(' : 'cos⁻¹(';
    } else {
        result.innerHTML += is2nd ? 'cos(' : 'cos⁻¹(';
    }
};
const handleTanBtn = () => {
    const result = document.getElementById('result');
    if (result.innerText == '') {
        result.innerHTML = is2nd ?  'tan(' : 'tan⁻¹(';
    } else {
        result.innerHTML += is2nd ? 'tan(' : 'tan⁻¹(';
    }
};



let isDegree = true;
function toggleDegreeMode() {
    isDegree = !isDegree;
    const degbtn = document.querySelector('.deg-btn');
    degbtn.innerText = isDegree ? 'deg' : 'rad';
}

is2nd = true;
const toggleInversebtn = () => {
    is2nd = !is2nd;
    const sinBtn = document.getElementById('sinbtn');
    const cosBtn = document.getElementById('cosbtn');
    const tanBtn = document.getElementById('tanbtn');
    sinBtn.innerText = is2nd ? 'sin' : 'sin⁻¹';
    cosBtn.innerText = is2nd ? 'cos' : 'cos⁻¹';
    tanBtn.innerText = is2nd ? 'tan' : 'tan⁻¹';
    const deg = document.querySelector('.deg-btn');
    if (!is2nd) {
        deg.style.pointerEvents = 'none';
        deg.style.opacity = '0.5';
    } else {
        deg.style.pointerEvents = 'auto';
        deg.style.opacity = '1';
    }
}
