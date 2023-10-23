const Header = ({invoicesjson}) => {
    const unpaid = invoicesjson.filter(findUnpaid);

    function findUnpaid(invoice) {
        // console.log('in findUnpaid');
        // console.log(invoice);
        return invoice['status_name'] === 'Pending';
    }

    return (
        <>
            <div>
            <h1>Invoices</h1>
            <p>There are {unpaid.length} unpaid invoices</p>
            </div>
        </>
    )
}

export default Header;