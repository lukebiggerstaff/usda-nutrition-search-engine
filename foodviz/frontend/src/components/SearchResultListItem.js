import React from 'react';
import SearchItemChart from './SearchItemChart';
import { Row, Col } from 'reactstrap';
import '../styles/SearchResultListItem.css'

function SearchResultListItem (props){
  return (
    <div className="result-item">
      <Row>
        <Col className="result-item--name" md={{size: 7}}>
          {props.name}
        </Col>
        <Col className="result-item--chart" md={{size: 5}}>
          <SearchItemChart data={props.data}/>
        </Col>
      </Row>
    </div>
  );
}

export default SearchResultListItem;
