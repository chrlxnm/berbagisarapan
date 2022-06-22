import "./footer.css";

import React, { PureComponent } from "react";

export default class FooterComponent extends PureComponent {
 
  
  render() {
    return (
      <div>  
        <div className='blue-bottom'>
          <p className='comp-copyright'>
            © Visi Maha Karya
          </p>
        </div>
      </div>
    );
  }
}
