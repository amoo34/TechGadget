import React from 'react';
const searchBox = ({values, onChange,showsearch}) => {
    return (  
        <div>
            Search here
            <input
             type="text"
             name="query"
             className="form-control"
             placeholder="search"
             value={values}
             onChange={e=> onChange(e.currentTarget.value)}
             />
            
        </div>
    );
}
 
export default searchBox;