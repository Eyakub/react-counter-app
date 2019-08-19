import React, { Component } from "react";

class Counter extends Component {
    // state that has the data that needs to the components
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold',
    };

    render() {
        // let classes = this.getBadgeClasses();
        return (
            <div>
                <span className={this.getBadgeClasses()} >{ this.formatCount() }</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        const x ='zero';
        return count === 0 ? x : count;
    }
}

export default Counter;
