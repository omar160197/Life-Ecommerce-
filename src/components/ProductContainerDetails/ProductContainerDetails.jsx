const ProductContainerDetails = ({ info }) => {
    return (<>
        {info && <div style={{ textAlign: "center" }}>product details selected
            <div>{info.productName}</div>
            <div>{info.price}</div>
            <div>{info.description}</div>
            <div>{info.quantity}</div>
            <div>{info.countryOfManufacture}</div>
            <div>{info.discountId}</div>
            <div>{info.categoryId}</div>
            <div>{info.company}</div>
        </div>}
    </>);
}

export default ProductContainerDetails;