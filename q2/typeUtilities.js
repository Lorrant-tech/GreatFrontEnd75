// Create functions to check for the primitive types (string, number, boolean, undefined, null, symbol)

function isString(maybeString) {
    if (typeof maybeString === 'string') return true;
    return false;
}

function isNumber(maybeNumber) {
    if (typeof maybeNumber === 'number') return true;
    return false;
}

function isBoolean(maybeBoolean) {
    if (typeof maybeBoolean === 'boolean') return true;
    return false;
}

function isUndefined(maybeUndefined) {
    if (typeof maybeUndefined === 'undefined') return true;
    return false;
}

function isNull(maybeNull) {
    if (maybeNull === null) return true;
    return false;
}

function isSymbol(maybeSymbol) {
    if (typeof maybeSymbol === 'symbol') return true;
    return false;
}