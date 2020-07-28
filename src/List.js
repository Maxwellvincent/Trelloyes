import React from 'react';
import Card from './Card';
import './List.css'

 class List extends React.Component {
    render(props){
        // console.log(this.props);
        // let cards = this.props.cards.map((item,index) => <Card key={index} title={item} />);
        return(
            <section className="List">
                <header>{this.props.header}</header>
                <div className='List-cards'>
                    {this.props.cards.map(card => <Card key={card.id} title={card.title} content={card.content}/>)}
                </div>
            </section>
        );
    }
}

export default List;