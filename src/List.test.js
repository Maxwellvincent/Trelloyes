import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('this bundles the component test together', ()=> {
    it ('smoke test for the list component', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('This is the screenshot UI for List component', () => {
        const bird = renderer.create(<List />).toJSON();
        expect(bird).toMatchSnapshot();
    });
})