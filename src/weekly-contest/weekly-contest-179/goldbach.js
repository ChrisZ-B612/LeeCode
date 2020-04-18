const goldbach = (max) => {
    let primeArr = [];
    let evenArr = [];
    let failArr = [];

    const isPrime = (num) => {
        let mid = Math.floor(Math.sqrt(num));
        let flag = true;

        for (let index = 2; index <= mid; index++) {
            if (num % index === 0) {
                flag = false;
                break;
            }
        }

        return flag;
    };

    const decompose = (even) => {
        for (const prime of primeArr) {
            let remain = even - prime;

            if (remain < prime) {
                break;
            } else if (primeArr.includes(remain)) {
                return [prime, remain];
            }
        }

        return null;
    }

    for (let index = 2; index <= max; index++) {
        if (index > 2 && index % 2 === 0) {
            let factor = decompose(index);

            if (factor) {
                evenArr.push([index, ...factor]);
            } else {
                failArr.push(index);
            }
        } else if (isPrime(index)) {
            primeArr.push(index);
        }
    }

    return {
        primeArr,
        evenArr,
        failArr,
    };
}

let now = Date.now();
let res = goldbach(1e4);
console.log(`NASA: ${Date.now() - now}ms`);
console.log('NASA: primeArr.length', res.primeArr.length);
console.log('NASA: evenArr.length', res.evenArr.length);
console.log('NASA: failArr.length', res.failArr.length);