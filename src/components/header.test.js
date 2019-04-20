import React from 'react';
import {render, cleanup} from 'react-testing-library';
import Header from "./header";

global.___loader = {
    enqueue: jest.fn()
};

describe('Header', () => {
    afterEach(cleanup);

    it('displays a header', () => {
        const {queryByText} = render(
            <Header siteTitle={"Amazing title"}></Header>);

        expect(queryByText("Amazing title")).not.toBeNull();
    });
});
