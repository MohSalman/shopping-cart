// @flow

import React from 'react';

var _this;
export default class HomeComponent extends React.Component<void, PropsType, StateType> {
    state: StateType;

    constructor(props: PropsType) {
        super(props);
        this.state = {
            promoCode: '',
            deductionCost: 0,
            finalCost: 0
        };
    }

    componentWillMount() {
        if(this.props.appliedPromocode!=''){
            this.state.promoCode = this.props.appliedPromocode;

            this.applyPromoCode(this.props.appliedPromocode);
        }
        _this = this;
        this.state.finalCost = this.props.totalCost;
    }

    applyPromoCode(event) {
        for (var count = 0; count < this.props.promoCodeList.length; count++) {
            if (this.props.promoCodeList[count].OfferCode == this.state.promoCode) {
                this.props.applyPromocode(this.props.promoCodeList[count].OfferCode);
                this.deduction(this.props.promoCodeList[count].DiscountPercent)
            }
        }
    }

    handleChange({ target }) {
        _this.setState({
            [target.name]: target.value
        });
    }

    deduction(percentageRate) {
        var cost = (this.props.totalCost * percentageRate * 0.01);
        this.setState({ deductionCost: cost.toFixed(2) });
        this.setState({ finalCost: this.props.totalCost - cost.toFixed(2) });
    }

    render() {
        return (
            <div>
                <div>
                    YOUR SHOPPING BAG
                </div>
                <hr />
                <div style={{
                    padding: '20px',
                    position: 'absolute',
                    width: '150px'
                }}>
                    <div>
                        Need Help or have questions?
                    </div>
                    <div>
                        Call Customer Service at 1-800-555-5555
                    </div>
                    <div>
                        Chat With one of our stylist
                    </div>
                </div>
            <div>
                    <div style={{
                        width: '1000px',
                        margin: 'auto',
                        marginTop: '50px',
                        marginBottom: '50px',
                        paddingLeft:'200px'
                    }}>
                    <div>
                       ENTER PROMOTIONAL CODE  OR GIFT CARD
                        <input
                            name="promoCode"
                            value={this.state.promoCode}
                            onChange={this.handleChange}
                        />
                        <button onClick={() => this.applyPromoCode(this.promoCode)} > Apply </button>
                    </div>
                    <div>
                        SUBTOTAL 
                        <img src={require("../Assets/Images/dollarSign.png")} 
                        style={{width:15,height:15}}
                        alt="no image" />
                        {this.props.totalCost}
                    </div>
                    <div>
                        PROMOTIONAL CODE {this.state.promoCode} APPLIED -
                        <img src={require("../Assets/Images/dollarSign.png")} 
                        style={{width:15,height:15}}
                        alt="no image" />
                        {this.state.deductionCost}
                    </div>
                    <div>
                        ESTIMATE SHIPPING*  FREE
                    </div>
                    <div>
                        ESTIMATE TOTAL 
                        <img src={require("../Assets/Images/dollarSign.png")} 
                        style={{width:15,height:15}}
                        alt="no image" />
                        {this.state.finalCost}
                    </div>
                    </div>
                    <div>
                        <div>
                            <button onClick={() =>this.props.history.goBack()}> CONTINUE SHOPPING </button>
                        </div>
                        <div>
                            <button  onClick={() =>alert("Checkout")}> CHECKOUT </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


const styles = {
    header: {
        height: '900'
    },

}