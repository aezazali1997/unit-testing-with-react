import React from 'react';
import {shallow} from 'enzyme';
import {TimerButton} from './TimerButton';
describe('Renders Timer BUtton', () => { 
  let container:any;
  beforeEach(() => {
    container=shallow(<TimerButton 
    buttonAction={jest.fn()}
    buttonValue={""}
     />)
  })
  it('Should render a <div />',() => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  })
 })