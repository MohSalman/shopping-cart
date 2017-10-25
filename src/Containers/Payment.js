// @flow

import { connect } from 'react-redux';
import PaymentComponent from '../Components/PaymentComponent';
import { applyPromocode } from '../Services/cart/actions';

const mapStateToProps = (state) => {
  return({
  promoCodeList : state.cart.promoCodeList,
  totalCost : state.cart.totalCost,
  data : state.cart.data,
  appliedPromocode : state.cart.appliedPromoCode,
})};

const mapDispatchToProps = (dispatch) => ({
  applyPromocode : (promocode) => dispatch(applyPromocode(promocode))
});

const Payment = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentComponent);

export default Payment;
