
let _fromDate = Symbol();
let _toDate = Symbol();

export default class Period {
    constructor(fromDate, toDate) {
        this[_fromDate] = fromDate;
        this[_toDate] = toDate;
    }
}
