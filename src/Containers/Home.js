// @flow

import { connect } from 'react-redux';
import HomeComponent from '../Components/HomeComponent';
import { setCost, setData} from '../Services/cart/actions'

const mapStateToProps = (state) => ({
    data : state.cart.data,
    totalCost : state.cart.totalCost,
});

const mapDispatchToProps = (dispatch) => ({
    setCost : (cost) => dispatch(setCost(cost)),
    setData : (data) => dispatch(setData(data)),
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;
