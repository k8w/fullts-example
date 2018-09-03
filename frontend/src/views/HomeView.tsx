import * as React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { FulltsView } from 'fullts';
import PtlDemo from '../../shared/protocols/PtlDemo';

interface HomeViewState {
    value?: string
}

export default class HomeView extends FulltsView<{}, HomeViewState>{

    componentWillMount() {
        this.state = {};
    }

    private isShow = false;
    render() {
        return (
            <div>
                Home View<br />
                <button onClick={this.onBtnClick.bind(this)}>Call Api</button>
                <p>
                    Res: {this.state.value || ''}
                </p>
            </div>
        )
    }

    async onBtnClick() {
        // 这样callApi
        let res = await this.callApi(PtlDemo, {
            a: 'aaaa',
            b: [1, 2, 3],
            c: 'f',
            d: {
                d1: '6666',
                d2: 1111
            }
        });
        this.setState({
            value: res.reply
        })
    }

    componentWillUnmount() {
        console.log('homeview unmount')
    }
}