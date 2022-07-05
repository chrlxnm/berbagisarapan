import "./footer.css";

import React, { PureComponent } from "react";

export default class FooterComponent extends PureComponent {
 
  
  render() {
    return (
      <div>  
        <div className='blue-bottom'>
          <p className='comp-copyright'>
            © Berbagi Sarapan
          </p>
        </div>
      </div>
    );
  }
}
