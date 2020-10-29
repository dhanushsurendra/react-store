import React from 'react';
import { connect } from 'react-redux';

import Card from '../../UI/Card';
import './Products.css';

const Products = props => {
    console.log(props.products);
    return (
        <section>
            {props.products.map((product) => (
                <Card key={product.id}>
                <h2 className={product.isFavorite ? 'heading-dark': 'heading'}>{product.title}</h2>
                <p className="description">{product.description}</p>
                <button onClick={() => props.toggleFav(product.id)} className={product.isFavorite ? 'button-solid': 'button-outline'}>{ product.isFavorite ? 'Un-Favourite': 'Favourite' }</button>
                 </Card>
            ))}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFav: (id) => dispatch({type: 'TOGGLE_FAV', productId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);