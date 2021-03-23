import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class YardCreationForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);

        this.state = {
            yardCode:""
        }
    }

    onChangeEvent(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const {yardCode} = this.state;

        if(yardCode === ""){
            const errMsg = "This is required";

            ReactDOM.render(errMsg,document.getElementById('yardCodeError'))
        }else{
            const errMsg = "";

            ReactDOM.render(errMsg,document.getElementById('yardCodeError'))
        }

        console.log(yardCode);
    }


    render() {
        return (
            <div className={'my-5 mx-5'}>
                <div className={'card'}>
                    <h3 className={'card-title ml-5 my-3'}>Yard Creation</h3>
                    <div className={'card-body'}>
                        <div className={'card'}>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-row m-2">
                                    <div className="form-group col-md-6">
                                        <label>Yard Code</label><label className={"text-danger"}>&nbsp;*</label>
                                        <input type="text" className="form-control" name={"yardCode"} value={this.state.yardCode} onChange={this.onChangeEvent}
                                               placeholder="Yard Code" maxLength={4}/>
                                               <label id={'yardCodeError'} className={"text-danger"}><small/></label>
                                    </div>
                                </div>
                                <button className={"btn btn-primary"}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default YardCreationForm;