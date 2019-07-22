import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as modalActions from '../store/module/modal';


import { bindActionCreators } from 'redux';

const ModalContainer = (props)  => {
  const { ModalActions, modal } = props;
  const handleModal = () => {
    ModalActions.toggleModal();
  }

  return (
    <Login onModal={handleModal} modal={modal}/>
  )
}

const mapStateToProps = ({ modal })=> ({
  modal: modal.modal
})

const mapDispatchToProps = dispatch => ({
  ModalActions: bindActionCreators(modalActions, dispatch),
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);

