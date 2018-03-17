# myportfoliobyreact
developing my portfolio web site by react


# create the project
````
npm install -g create-react-app
create-react-app my-app

- for customizing
npm run eject (node_modules/react-scripts => root) 
````

# install more modules
````
npm install axios classnames sass-loader node-sass include-media open-color react-icons

````
- axios: Promise 기반 웹 요청 클라이언트
- classnames: CSS Module 과 조건부 className 을 설정 하는 것을 도와주는 라이브러리
- sass-loader, node-sass: 프로젝트에서 Sass 를 사용하기 위하여 필요한 도구
- include-media, open-color: Sass 라이브러리 (반응형 디자인, 색상 팔레트)
- react-icons: SVG 형태의 리액트 컴포넌트 모음 라이브러리

# customizing

- config/webpack.config.dev.js – css 설정 부분 scss 추가

- config/paths.js - styles path 추가 

# open-color 에 등록된 색상 변수
- guide : https://yeun.github.io/open-color/
- $oc-[색상]-[명암]


# easy to use for Promise ( async/await )
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function


# install Bootstrap
https://reactstrap.github.io/

```
npm install bootstrap --save
npm install --save reactstrap@next 
```

# add react-device-detect
````
npm install react-device-detect --save
````

# add react-scroll
```
npm install react-scroll-to-element 
```
# use react icons
http://gorangajic.github.io/react-icons/md.html



