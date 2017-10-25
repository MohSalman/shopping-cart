// @flow

import React from 'react';

var _this;
export default class HomeComponent extends React.Component<void, PropsType, StateType> {
    state: StateType;

    constructor(props: PropsType) {
        super(props);
        this.state = {
            noOfItems: [],
            cost: []
        };
    }

    componentWillMount() {
        _this = this;
        var cost = this.props.data.map(function (data, key) {
            if (data.noOfItems) {
                if (data.Gender == "Female") {
                   return ((parseInt(data.ProductPrice) * data.noOfItems) - (parseInt(data.ProductPrice) * data.noOfItems * 5 * 0.01))
                } else {
                    return (parseInt(data.ProductPrice) * data.noOfItems )
                }
            } else {
                return 0;
            }
        });
        this.setState({ cost: cost });
        var noOfItems = this.props.data.map(function (data, key) {
            if (data.noOfItems) {
                return data.noOfItems
            } else {
                _this.props.data[key].noOfItems = 0;
                return 0;
            }
        });
        this.props.setData(this.props.data)
        this.setState({ noOfItems: noOfItems });
    }


    changeOfItems(key, event) {
        var data = _this.props.data;
        var noOfItems = _this.state.noOfItems;
        var cost = _this.state.cost;
        if (event.target.value == "") {
            noOfItems[key] = 0;
            data[key].noOfItems = 0;
            cost[key] = 0;
        } else {
            noOfItems[key] = parseInt(event.target.value);
            data[key].noOfItems = parseInt(event.target.value);
            var price = parseInt(data[key].ProductPrice) * event.target.value;
            if (data[key].Gender == "Female") {
                var reducePrice = price * 5 * 0.01;
                cost[key] = price - reducePrice;
            } else {
                cost[key] = price;
            }
        }
        _this.props.setData(data);
        _this.setState({ cost: cost })
        _this.setState({ noOfItems: noOfItems });
    }

    next() {
        var totalCost = 0;
        for (var count = 0; count < _this.state.cost.length; count++) {
            totalCost = totalCost + _this.state.cost[count];
        }
        _this.props.setCost(totalCost);
        _this.props.history.push('/payment');
    }

    render() {
        var that = this;
        var renderData = this.props.data.map(function (data, key) {
            return (
                <div >
                    <img src={require("../Assets/Images/" + data.ImageName)} alt="no image" />

                    <text>{data.ProductName}</text>

                    <input
                        value={that.state.noOfItems[key]}
                        onChange={that.changeOfItems.bind(this, key)} />

                    <text>
                        <img src={require("../Assets/Images/dollarSign.png")}
                            style={{ width: 15, height: 15 }}
                            alt="no image" />
                        {
                            (data.Gender == "Female") ?
                                <text style={{ textDecorationLine: 'line-through' }}>{data.ProductPrice}</text> :
                                null

                        }
                        {' '}
                        {that.state.cost[key]}</text>
                    <hr />
                </div>
            );
        });

        return (
            <div>
                <div >
                    YOUR SHOPPING BAG
                </div>
                <hr />
                {renderData}
                <button onClick={this.next}> Next </button>
            </div>
        );
    }
}

