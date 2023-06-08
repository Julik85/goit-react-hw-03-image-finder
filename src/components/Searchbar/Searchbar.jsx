import { toast } from 'react-toastify';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { Header, SearchHeader } from './SearchBar.styled';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = event => {
    event.preventDefault();

    if (this.state.name.trim() === '') {
      return toast.error('Введите имя');
    }

    this.props.qwe(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <SearchHeader>
        <form className="form" onSubmit={this.hendleSubmit}>
          <button type="submit" className="button">
            <ImSearch color="grey" />
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            value={this.state.name}
            onChange={this.handleNameChange}
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </SearchHeader>
    );
  }
}
