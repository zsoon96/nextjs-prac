import axios from "axios";
import Item from '../../src/component/Item'
import Head from "next/head";

const Post = ({item}) => {

    return (
        <>
            {item && (
                <>
                    {/* 메타 데이터 추가를 통해 검색엔진 및 공유에 최적화 */}
                    <Head>
                        <title>{item.name}</title>
                        <meta name="description" content={item.description}/>
                    </Head>
                    <Item item={item}/>
                </>

            )}
        </>
    )
}

export default Post;

// 서버 사이드 렌더링
export async function getServerSideProps(context) {
    const id = context.params.id;
    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(API_URL);
    const data = res.data;

    return {
        props: {
            item: data
        }
    }

}