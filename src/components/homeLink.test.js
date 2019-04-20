import React from 'react';
import HomeLink from './homeLink';
import {render, cleanup} from 'react-testing-library';

global.___loader = {
    enqueue: jest.fn()
};

describe('homeLink', () => {
    afterEach(cleanup);

   it('displays text for the homepage', () => {
       const {queryByText} = render(
           <HomeLink to={'/'}>Go back to the homepage
           </HomeLink>);

       expect(queryByText).not.toBeNull();
   });
});