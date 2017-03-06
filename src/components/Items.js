import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './items.cssmodule.less';

class Items extends React.Component {

  render() {
    return (
      <div className="items-component" styleName="items-component">
        Please edit src/components/Items.js to update this component!
      </div>
    );
  }
}

Items.displayName = 'Items';
Items.propTypes = {};
Items.defaultProps = {};

export default cssmodules(Items, styles);
