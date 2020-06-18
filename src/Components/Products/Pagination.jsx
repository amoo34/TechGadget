import React, { Component } from 'react';
import '../Styles/pagination.css';
import _ from 'lodash';
class Pagination extends Component {
    state = {  }
    render() { 
      const {itemsCount , pageSize,current} = this.props;
   
      const pagesCount = itemsCount/pageSize;
      
      const pages = _.range(1,pagesCount+1);
     
     
        return ( 
            <div className="Pagination container" >
            <br/>
            <div className="row">
            <div className="col-4 offset-5">
            <nav aria-label="Page navigation example">
  <ul class="pagination"><h6 id="pageNo">Show Pages</h6>
            {pages.map( page=>(
    <li class={page === current ? 'page-item active' : 'page-item'}>
    <a class="page-link" onClick={()=>this.props.onPageChange(page)}>{page}</a>
    </li>
       ))}
  </ul>
</nav>
</div>  </div>   </div>
         );
    }
}
 
export default Pagination;