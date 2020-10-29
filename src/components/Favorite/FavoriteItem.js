import React from 'react';

import Card from '../../UI/Card';

const FavoriteItem = props => {
    return (
        <div onClick={props.click}>
            <Card>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </Card>
        </div>
    )
}

export default FavoriteItem;