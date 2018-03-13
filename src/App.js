import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';

import * as api from './lib/api';

class App extends Component {
    state = {
        loading: false,
        maxDate: null,
        date: null,
        url: 'testUrl',
        mediaType: null
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



    render() {
        const{ url, mediaType, loading } = this.state;

        return (
            <ViewerTemplate
              spaceNavigator={<SpaceNavigator/>}
              viewer={(
                  <Viewer
                      url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
                      mediaType="video"/>
              )}
              url={url}
            />
        );
    }
}

export default App;
