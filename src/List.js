import React from 'react';
import Card from './Card';
import './List.css'

 export class List extends React.Component {
    render(props){
        // console.log(this.props.cards);
        // let cards = this.props.cards.map((item,index) => <Card key={index} title={item} />);
        return(
            <section className="List">
                <header>{this.props.header}</header>
                <div className='List-cards'>
                    {this.props.cards.map(card => 
                    <Card 
                    onClickDelete={() => this.props.onClickDelete} 
                    key={card.id} 
                    id={card.id} 
                    title={card.title} 
                    content={card.content} 
                    />)}
                    <button type='button' className='List-add-button' onClick={() => this.props.onClickAdd(this.props.id)}> 
                        + Add Random Card
                    </button>
                </div>
            </section>
        );
    }
}

List.defaultProps = {
    onClickAdd: () => {},
  }
