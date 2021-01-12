import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term)//submit 
    }

    render() {
        return (
            <div>
                <div className="ui placeholder segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>
                                Image Search
                                <div className="ui icon input">
                                    <input type="prompt" placeholder="Search images..."
                                    value={this.state.term}
                                    onChange={(e) => this.setState({ term: e.target.value })}
                                    />
                                    <i className="search icon"></i>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="results"></div>
            </div>
        )
    }
}

export default SearchBar;