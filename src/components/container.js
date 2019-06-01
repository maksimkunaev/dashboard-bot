import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    currentConfig: state.currentConfig,
    data: state.data,
})

const mapDispatchToProps = dispatch => ({
  changeBotsOrder: (data) => {
    dispatch({
      type: 'changeBotsOrder',
      data,
    })
  },
  changeRange: (data) => {
    dispatch({
      type: 'changeRange',
      data,
    })
  },
})

export default component => connect(mapStateToProps, mapDispatchToProps)(component);
