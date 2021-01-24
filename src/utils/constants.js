const TransactionStatus = {
    SUCCESS: "SUCCESS",
    PENDING: "PENDING",
    FAILED: "FAILED"
}

const sortList = [
    {
        label: 'URUTKAN',
        desc: 'default',
        isActive: true
    },
    {
        label: 'Nama A-Z',
        desc: 'asc',
        isActive: false
    },
    {
        label: 'Nama Z-A',
        desc: 'desc',
        isActive: false
    },
    {
        label: 'Tanggal Terbaru',
        desc: 'latest',
        isActive: false
    },
    {
        label: 'Tanggal Terlama',
        desc: 'older',
        isActive: false
    }
]

export { TransactionStatus, sortList };