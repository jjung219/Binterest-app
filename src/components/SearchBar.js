import React from 'react'

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <div className="ui placeholder segment">
                    <form className="ui form">
                        <div className="field">
                            <label>
                                Image Search
                                <div className="ui icon input">
                                    <input type="prompt" placeholder="Search images..."/>
                                    <i class="search icon"></i>
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