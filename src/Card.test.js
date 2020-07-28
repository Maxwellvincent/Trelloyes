import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

describe('This is a test for smoke and snapshot on the card component', ()=> {
    it ('this is a smoke test to see if the component renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />,div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('this is to take a snapshot of the UI and make sure it renders correctly', ()=> {
        const tree = renderer.create(<Card className="card"/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})