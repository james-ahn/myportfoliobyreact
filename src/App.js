import React, { Component } from 'react';

import ViewerTemplate from './components/ViewerTemplate';
import Header from './components/Header';
import Content from './components/Content';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Footer from './components/Footer';

import * as api from './lib/api';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            fadeIn: false,
            toolTipJS: false,
            toolTipVue: false,
            toolTipVuetify: false,
            toolTipHtml: false,
            toolTipCss: false,
            toolTipCordova: false,
            toolTipGit: false
        };
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggle = this.toggle.bind(this);
        this.setTooltipJS = this.setTooltipJS.bind(this);
        this.setTooltipVue = this.setTooltipVue.bind(this);
        this.setTooltipVuetify = this.setTooltipVuetify.bind(this);
        this.setTooltipHtml = this.setTooltipHtml.bind(this);
        this.setTooltipCss = this.setTooltipCss.bind(this);
        this.setTooltipCordova = this.setTooltipCordova.bind(this);
        this.setTooltipGit = this.setTooltipGit.bind(this);
    }

    // getAPOD = (date) => {
    //     api.getAPOD(date).then((response) => {
    //         console.log(response);
    //     });
    // }

    // async/await
    getAPOD = async (date) => {
        if (this.state.loading) return; // 이미 요청중이라면 무시
        // 로딩 상태 시작
        this.setState({
            loading: true
        });

        try {
            const response = await api.getAPOD(date);

            // 비구조화 할당 + 새로운 이름
            const { date: retrievedDate, url, media_type: mediaType } = response.data;
            console.log('response==>',response);

            // 전달받은 데이터 넣어주기
            this.setState({
                date: retrievedDate,
                mediaType,
                url
            });
            //return response;  // 만약 promise를 반환하고 싶으면
        } catch (e) {
            // 오류가 났을 경우
            console.log(e);
        }

        // 로딩 상태 종료
        this.setState({
            loading: false
        });
    }

    componentDidMount() {
        //this.getAPOD(); //  //call the api

        // async함수가 호출되어 졌을때, 이 함수는 Promise을 반환한다.
        // this.getAPOD().then(v =>{
        //     console.log('v ==>',v);
        // });
    }

    /*Content*/
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    /*Content3*/
    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

    setTooltipJS() {
        this.setState({
            toolTipJS: !this.state.toolTipJS,
        });
    }
    setTooltipVue() {
        this.setState({
            toolTipVue: !this.state.toolTipVue,
        });
    }
    setTooltipVuetify() {
        this.setState({
            toolTipVuetify: !this.state.toolTipVuetify,
        });
    }
    setTooltipHtml() {
        this.setState({
            toolTipHtml: !this.state.toolTipHtml,
        });
    }
    setTooltipCss() {
        this.setState({
            toolTipCss: !this.state.toolTipCss,
        });
    }
    setTooltipCordova() {
        this.setState({
            toolTipCordova: !this.state.toolTipCordova,
        });
    }
    setTooltipGit() {
        this.setState({
            toolTipGit: !this.state.toolTipGit,
        });
    }

    render() {
        //const{ url, mediaType, loading} = this.state;

        return (
            <div>
                <Header
                    toggleNavbar = {this.toggleNavbar}
                    collapsed = {this.state.collapsed}
                />
                <Content/>
                <Content2/>
                <Content3
                    toggle = {this.toggle}
                    fadeIn = {this.state.fadeIn}
                    setTooltipJS = {this.setTooltipJS}
                    setTooltipVue = {this.setTooltipVue}
                    setTooltipVuetify = {this.setTooltipVuetify}
                    setTooltipHtml = {this.setTooltipHtml}
                    setTooltipCss = {this.setTooltipCss}
                    setTooltipCordova = {this.setTooltipCordova}
                    setTooltipGit = {this.setTooltipGit}
                    toolTipJS = {this.state.toolTipJS}
                    toolTipVue = {this.state.toolTipVue}
                    toolTipVue = {this.state.toolTipVue}
                    toolTipVuetify = {this.state.toolTipVuetify}
                    toolTipHtml = {this.state.toolTipHtml}
                    toolTipCss = {this.state.toolTipCss}
                    toolTipCordova = {this.state.toolTipCordova}
                    toolTipGit = {this.state.toolTipGit}
                />

                <Footer/>
            </div>


            // <ViewerTemplate
            //     menu={(
            //         <Header
            //             isOpen = {this.state.isOpen}
            //             toggle = {this.toggle}
            //         />
            //     )}
            //     viewer={(
            //       <Content
            //           url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
            //           mediaType="video"/>
            //     )}
            // />
        );
    }
}

export default App;
