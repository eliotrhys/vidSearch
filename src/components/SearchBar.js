import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="row mx-2">
        <div className="col-12 col-md-6 offset-md-3 mt-5 px-5 py-3 main-nav-bar lift">

          <div className="row">
            <div className="col-8 offset-2">
              <form onSubmit={this.onFormSubmit} className="">
                  <div>
                    <h1 class="text-white display-4 mb-4">vidSearch<i class="fas fa-search ml-4"></i></h1>
                  </div>
                  <div>
                    <input
                      className="form-control big-search-field lift"
                      type="text"
                      value={this.state.term}
                      onChange={this.onInputChange}
                      placeholder="Search for something!"
                    />
                  </div>
              </form>
              </div>
            </div>

        </div>
      </div>
    )
  }
}

export default SearchBar;
