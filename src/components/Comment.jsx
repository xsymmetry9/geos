import React, {Component} from 'react';

class InputComment extends Component {
    constructor(props){
        super(props);

        this.state = {
            comments: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        this.setState((state) =>({
            ...state,
            comments: e.target.value,
        }));
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState((state) => ({
            comments: ""
        }));
    }
    render(){
        return(
            <section>
                <h3>Comments:</h3>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor='comment-entry'>Comment</label>
                    <input
                        type="text"
                        name="comment-entry"
                        value={this.state.comments}
                        onChange={this.handleInputChange}>
                        </input>
                        <button type="submit">Submit</button>
                </form>

                <h4>Comments</h4>
                <p>{this.state.comments}</p>
                
                </section>
        )

    }

}
export default InputComment;