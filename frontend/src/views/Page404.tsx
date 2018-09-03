import * as React from 'react';
import Layout from './Layout';
import { FulltsComponent } from 'fullts';

export default class Page404 extends FulltsComponent{
    render() {
        return (
            <Layout>
                <h1>404</h1>
                <p>Page Not Found.</p>
            </Layout>
        )
    }
}