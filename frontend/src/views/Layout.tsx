import * as React from 'react';
import { FulltsComponent} from 'fullts';
import { Link } from 'react-router-dom';

export default class Layout extends FulltsComponent {
    render() {
        return (
            <div>
                <header style={{
                    background: '#f2f2f2',
                    padding: 20
                }}>
                    <h1>Layout Header</h1>
                    <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
                    <Link to='/sub'>Sub</Link>&nbsp;&nbsp;&nbsp;
                    <Link to='/sub/123'>Sub/123</Link>&nbsp;&nbsp;&nbsp;
                    <Link to='/xxxxx'>xxxxx(404)</Link>&nbsp;&nbsp;&nbsp;
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