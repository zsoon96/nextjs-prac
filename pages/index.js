import Head from "next/head";
import {useEffect, useState} from "react";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import {Divider, Header} from "semantic-ui-react";

export default function Home() {

    const [list, setList] = useState([]);

    const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    useEffect(() => {
        axios.get(API_URL).then((res) => {
            console.log(res);
            setList(res.data)
        })
    }, []);

    return (
        <div>
            <Head>
                <title>HOMEㅣNext JS 기초</title>
            </Head>

            <Header as="h3" style={{ paddingTop: 30 }}> 베스트 상품 </Header>
            <Divider />
            <ItemList list= {list.slice(0, 9)} />

            <Header as="h3" style={{ paddingTop: 30 }}> 신상품 </Header>
            <Divider />
            <ItemList list= {list.slice(9)} />
            {/*create-next-app으로 설치하면*/}
            {/*<br />*/}
            {/*1. 컴파일과 번들링이 자동으로 된다.(webpack과 babel)*/}
            {/*<br />*/}
            {/*2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영된다.*/}
            {/*<br />*/}
            {/*3. 서버사이드 렌더링이 지원된다.*/}
            {/*<br />*/}
            {/*4. static 파일이 지원된다.*/}
        </div>
    )
}
