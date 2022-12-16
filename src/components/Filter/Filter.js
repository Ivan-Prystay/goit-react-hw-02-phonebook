import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container, FilterInput } from './Filter.styled';

export class Filter extends Component {
  FilterInput = nanoid(3);

  render() {
    return (
      <Container>
        <label htmlFor={this.FilterInput}>Find contacts by name</label>
        <FilterInput
          type="text"
          name="filter"
          required
          onChange={this.props.handleChange}
          value={this.props.filter}
          id={this.FilterInput}
        />
      </Container>
    );
  }
}
