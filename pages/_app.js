import '../styles/globals.css'
// semantic-ui 라이브러리 사용
import 'semantic-ui-css/semantic.min.css'
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";
import {AuthContextProvider} from "../stores/authContext";

// _app.js 역할
// 페이지 전환 시, 레이아웃을 유지할 수 있다.
// 페이지 전환 시, 상태값을 유지할 수 있다.
// componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있다.
// 추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
// 글로벌 CSS를 적용할 수 있다.
function MyApp({Component, pageProps}) {
    return (
        // 인증 모듈 적용
        <AuthContextProvider>
            <div style={{width: 1000, margin: "0 auto"}}>
                <Top/>
                <Component {...pageProps} />
                <Footer/>
            </div>
        </AuthContextProvider>
    )
}

export default MyApp