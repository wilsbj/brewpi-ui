/**
*
* SvgParent
*
*/

import React from 'react';


import styles from './styles.css';


export const SvgParent = (props) => <svg className={styles.svgParent}>{props.children}</svg>;

SvgParent.propTypes = {
  children: React.PropTypes.node,
};

export default SvgParent;