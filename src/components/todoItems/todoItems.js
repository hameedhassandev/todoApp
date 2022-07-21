import React  from 'react';
const todoItem = (props) => {
    const {items,deletItem} = props;
    let length = items.length;
    const ListItems = length ? items.map(item => {
        return(
            <div key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='action icon' onClick={() => deletItem(item.id)}>&times;</span>
            </div>
        )
    }): (
        <p>No Items</p>
    )
    return(
        <div className='ListItems'>
            <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='icon title'>Action</span>
            </div>
            {ListItems}  
        </div>
    )
}

export default todoItem
