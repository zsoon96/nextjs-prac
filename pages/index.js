import Head from "next/head";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import ItemList from "../src/component/ItemList";
import {Divider, Header, Loader} from "semantic-ui-react";
import AuthContext from "../stores/authContext";

export default function Home() {

    const {user} = useContext(AuthContext);
    console.log(user)

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    useEffect(() => {
        axios.get(API_URL).then((res) => {
            console.log(res);
            setList(res.data)
            setIsLoading(false)
        })
    }, []);

    return (
        <div>
            <Head>
                <title>HOMEㅣNext JS 기초</title>
            </Head>

            {isLoading && (
                <div style={{padding: "300px 0"}}>
                    <Loader inline="centered" active/>
                </div>
            )}

            {!isLoading && (
                <>
                    <Header as="h3" style={{paddingTop: 30}}> 베스트 상품 </Header>
                    <Divider/>
                    <ItemList list={list.slice(0, 9)}/>

                    <Header as="h3" style={{paddingTop: 30}}> 신상품 </Header>
                    <Divider/>
                    <ItemList list={list.slice(9)}/>
                </>
            )}
        </div>
    )
}
