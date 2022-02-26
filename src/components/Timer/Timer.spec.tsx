import React from 'react'
import {shallow} from 'enzyme'
import {mount} from 'enzyme'
import {Timer} from './Timer';
describe('mounted conainer', () => { 

  let container:any;
  
  beforeEach(()=>{
  
  container= shallow(<Timer />);
  
  })

  it('renders a timer div',() => {
  
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  
  })
  it('Should render buttons in timer compoents',() => {
    expect(container.find('TimerButton').length).toEqual(3);
  })
 });
 
 
//  describe('mounted Timer', () => { 
//    let container:any;
//    beforeEach(() => {
//      container = mount(<Timer />)
//    });
//    it('invokes starts timer, when start button is clicked',() => {
//      const spy= jest.spyOn(container.instance(),'startTimer');
//      container.instance().forceUpdate();
//      expect(spy).toHaveBeenCalledTimes(0);
//      container.find('.start-timer').first().simulate('click');
//      expect(spy).toHaveBeenCalledTimes(1);
//    });
//     it('invokes starts timer, when start button is clicked',() => {
//      const spy= jest.spyOn(container.instance(),'stopTimer');
//      container.instance().forceUpdate();
//      expect(spy).toHaveBeenCalledTimes(0);
//      container.find('.stop-timer').first().simulate('click');
//      expect(spy).toHaveBeenCalledTimes(1);
//    }); 
//    it('invokes starts timer, when start button is clicked',() => {
//      const spy= jest.spyOn(container.instance(),'resetTimer');
//      container.instance().forceUpdate();
//      expect(spy).toHaveBeenCalledTimes(0);
//      container.find('.reset-timer').first().simulate('click');
//      expect(spy).toHaveBeenCalledTimes(1);
//    })
//   })