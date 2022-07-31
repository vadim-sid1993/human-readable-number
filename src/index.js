module.exports = function toReadable (number) {
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const oneTwo = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    const twoOne = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twoTwo = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const twoThree = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let str = String(number).split('');
    if (str.length == 1) {
        return one[number]
    }
    if (str.length == 2) {
        if (str[0] == 1) {
            return twoOne[str[1]]
        }
        if (str[0] > 1) {
            return twoTwo[str[0]] + oneTwo[str[1]]

        }
    }
    if (str.length == 3) {
        if (str[1] == 1) {
            let x = one[str[0]] + ' hundred ' + twoOne[str[2]];
            return x
        } else {
            let x = one[str[0]] + ' hundred' + twoThree[str[1]] + oneTwo[str[2]];
            return x
        }

    }
}
