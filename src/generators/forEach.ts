// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

function executor(iter, value?) {
    const result = iter.next(value);

    const promise = Promise.resolve(result.value);

    if (result.done) {
        return promise;
    }

    return promise
        .then((value) => executor(iter, value))
        .catch((err) => {
            const result = iter.throw(err);

            if (result.done) {
                return result.value;
            }

            return executor(iter, result.value);
        });
}

function* _forEach(array, callback) {
    let time = Date.now();
    for (const el of array) {
        callback(el);

        if (Date.now() - time > 300) {
            yield;
            time = Date.now();
        }
    }
}

export const forEach = (array, callback) => executor(_forEach(array, callback));