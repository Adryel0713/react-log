import PropTypes from "prop-types";

function Item({marca,lancamento}){
    return (
        <>
            <li>Marca: {marca}</li>
            <li>Lancamento: {lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired
}


export default Item;