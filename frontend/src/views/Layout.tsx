import * as React from 'react';
import { FulltsComponent} from 'fullts';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    background: '#000',
    color: '#fff'
}

export default class Layout extends FulltsComponent {
    render() {
        return (
            <div>
                <header style={{
                    background: '#f2f2f2',
                    padding: 20
                }}>
                    <h1>Layout Header</h1>
                    <NavLink to='/' activeStyle={activeStyle} exact={true}>Home</NavLink>&nbsp;&nbsp;&nbsp;
                    <NavLink to='/sub' activeStyle={activeStyle}>Sub</NavLink>&nbsp;&nbsp;&nbsp;
                    <NavLink to='/sub/123' activeStyle={activeStyle}>Sub/123</NavLink>&nbsp;&nbsp;&nbsp;
                    <NavLink to='/xxxxx' activeStyle={activeStyle}>xxxxx(404)</NavLink>&nbsp;&nbsp;&nbsp;
                </header>
                <section style={{padding: 20}}>
                    {this.props.children}
                </section>
            </div>
        )
    }

    componentWillUnmount() {
        console.log('layout unmount')
    }
}