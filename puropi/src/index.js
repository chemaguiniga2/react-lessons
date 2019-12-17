import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import HeaderComp from './components/headerComp';

const App = function() {
    return (
      <Fragment>
        <div>
          <HeaderComp />
        </div>
        <div>
            <h1>Holaaa</h1>
        </div>
      </Fragment>
      
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))