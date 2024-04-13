import React, {Component} from 'react';

class InputComment extends Component {
    constructor(props){
        super(props);
        this.data = props;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        this.setState((data) =>({
            ...data,
            comment: e.target.value,
        }));
    }
    render(){
        return(
            <>
                <h3>Comments</h3>
                <div className='input-container'>
                    <textarea
                        name="comment-entry"
                        value={this.data.comment}            
                        onChange={this.handleInputChange}>
                    </textarea>
                </div>
            </>
   
        )

    }

}
export default InputComment;