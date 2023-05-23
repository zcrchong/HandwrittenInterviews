Object.prototype.myCreate = function (obj) {
    function Fun() {}
    Fun.prototype = obj
    return new Fun()
}
