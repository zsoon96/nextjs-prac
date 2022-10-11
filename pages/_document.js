import Document, { Html, Head, Main, NextScript } from 'next/document'

// nextjs에서 제공하는 document를 커스텀할 수 있음
// 마크업 부분을 건너뛰기 때문에 <Html>, <Head>, <body> 등을 수정할 때는 이 파일을 필수적으로 사용해야함
class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head ></Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument