import * as React from 'react';
import Layout from './Layout';
import { FulltsComponent } from 'fullts';

export default class SubView extends FulltsComponent {
    componentWillMount() {

    }

    render() {
        this.app.setTitle('SubView' + this.app.params.id);
        this.app.setSeoMeta({
            keywords: ['Home', 'Sub'],
            description: 'sub'
        })

        return (
            <div>SubView {this.app.params.id} {this.app.query.id}</div>
        )
    }

    componentWillUnmount() {
        console.log('subview unmount')
    }
}