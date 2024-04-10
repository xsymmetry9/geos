import React, {Component} from 'react'

class StudentLevel extends Component{
    constructor(props)
    {
        super(props);

        this.state = {
            initialLevel: 4,
            targetLevel: 5,
            finalLevel: 5
        }

        this.inputInitialLevel = this.inputInitialLevel.bind(this);
        this.inputTargetLevel = this.inputTargetLevel.bind(this);
        this.inputFinalLevel = this.inputFinalLevel.bind(this)
    }

    inputInitialLevel(e) {
        this.setState((state) => ({
            ...state,
            initialLevel: e.target.value,
        }));
    }
    inputTargetLevel(e) {
        this.setState((state) => ({
            ...state,
            targetLevel: e.target.value,
        }));
    }
    inputFinalLevel(e) {
        this.setState((state) => ({
            ...state,
            finalLevel: e.target.value,
        }));
    }

    arr = [
        {name: "vocabulary",
        levels: [{initial: 5, target: 6, final: 7}]},
        {name: "Grammar",
        levels: [{initial: 5, target: 6, final: 7}]},
        {name: "Pronunciation",
        levels: [{initial: 5, target: 6, final: 7}]},
        {name: "Listening",
        levels: [{initial: 5, target: 6, final: 7}]},
        {name: "Conversation",
        levels: [{initial: 5, target: 6, final: 7}]},

    ]

    render(){
        return(
            <>
                <div id="initial-level" className="form-container"> 
                    <h2>Student Level</h2>
    
                    <h3>Vocabulary</h3>
                    <label for ="vocabulary-initial">initial
                        <input
                            type='range'
                            name='vocabulary-initial'
                            value= {this.state.initialLevel}
                            min ="0"
                            max="10"
                            onChange={this.inputInitialLevel}>
    
                        </input>
                    </label>
                    <label for ="final">Final
                        <input
                            type='range'
                            name='final'
                            value= {this.state.finalLevel}
                            min ="0"
                            max="10"
                            onChange={this.inputFinalLevel}>
    
                        </input>
                    </label>
                    <label for ="target">Target
                        <input
                            type='range'
                            name='target'
                            value= {this.state.targetLevel}
                            min ="0"
                            max="10"
                            onChange={this.inputTargetLevel}>
    
                        </input>
                    </label>
                    <p>{this.state.initialLevel}, {this.state.targetLevel}, {this.state.finalLevel}</p>
                </div>
            </>
        )

    }
}   

export default StudentLevel;