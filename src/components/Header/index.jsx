const Header = ({invoicesjson}) => {
    const unpaid = invoicesjson.filter(findUnpaid);

    function findUnpaid(invoice) {
        return invoice['status_name'] === 'Pending';
    }

    return (
        <>
            <div>
            <h1>Invoices</h1>
            <p className='text-muted m-0'>There are {unpaid.length} unpaid invoices</p>
            </div>
        </>
    )
}

export default Header;