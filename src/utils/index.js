import { TransactionStatus } from './constants'

const formatIDR = (value, prefix) => {
    const number_string = value.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        residual = split[0].length % 3
    let idr = split[0].substr(0, residual),
        thousand = split[0].substr(residual).match(/\d{3}/gi);

    if (thousand) {
        const separator = residual ? '.' : '';
        idr += separator + thousand.join('.');
    }

    idr = split[1] != undefined ? idr + ',' + split[1] : idr;
    return prefix == undefined ? idr : (idr ? 'Rp' + idr : '');
}

const toUpper = (word) => {
    return String(word).toUpperCase();
}

const toPascalCase = (word) => {
    const string = String(word)
    return `${string[0].toUpperCase()}${string.slice(1)}`;
}

const formatDate = (date) => {
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const xDate = new Date().getDate(date);
    const xMonth = new Date().getMonth(date);
    const xYear = new Date().getFullYear(date);
    return `${xDate} ${months[xMonth]} ${xYear}`;
}

const formatBankName = (bankName) => {
    return bankName.length > 4 ? toPascalCase(bankName) : toUpper(bankName);
}

const flagColor = (status) => {
    const color = status === TransactionStatus.SUCCESS ? "green" : status === TransactionStatus.PENDING ? "orange" : "red"
    return color;
}

const sortTrx = (data, type) => {
    if (type == 'asc') {
        return data.sort((a, b) => {
            var nameA = a.beneficiary_name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.beneficiary_name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        })
    } else if (type == 'desc') {
        return data.sort((a, b) => {
            var nameA = a.beneficiary_name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.beneficiary_name.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        })
    } else if (type == 'latest') {
        return data.sort((a, b) => {
            var dateA = a.created_at;
            var dateB = b.created_at;
            if (dateA > dateB) {
                return -1;
            }
            if (dateA < dateB) {
                return 1;
            }

            return 0;
        })
    } else if (type == 'older') {
        return data.sort((a, b) => {
            var dateA = a.created_at;
            var dateB = b.created_at;
            if (dateA < dateB) {
                return -1;
            }
            if (dateA > dateB) {
                return 1;
            }

            return 0;
        })
    } else {
        return data;
    }
}

export { formatIDR, toUpper, formatDate, formatBankName, flagColor, toPascalCase, sortTrx };