import axios from "axios";
import Item from '../../src/component/Item'

const Post = ({ item }) => {

    return (
        <>
            { item && <Item item={item} />}
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