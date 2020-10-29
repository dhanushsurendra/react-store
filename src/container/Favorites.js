import React from 'react';

import FavoriteItem from '../components/Favorite/FavoriteItem';
import { connect } from 'react-redux';

const Favorites = React.memo(props => {

    console.log('RENDERING FAVORITE');

    const favoriteItem = props.products.filter(product => product.isFavorite);

    const removeItem = id => {
        props.products.filter(product => product.id !== id);
        console.log(props.products);
    }

    let content = <p style={{textAlign: 'center', marginTop: '20px'}}>Got no favorites yet!</p>
    if(favoriteItem.length > 0) {
        content =  <ul>
                        {favoriteItem.map(fav => (
                            <FavoriteItem
                                key={fav.id}
                                title={fav.title}
                                description={fav.description}
                                id={fav.id}
                                click={removeItem(fav.id)}
                            />
                        ))}
                    </ul>
    }

    return (
        <div>
            {content}
        </div>
    )
})

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Favorites);