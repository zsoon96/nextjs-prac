import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import Item from '../../src/component/Item'

const Post = () => {
    const router = useRouter();
    const {id} = router.query;

    const [item, setItem] = useState({});

    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    useEffect(() => {
        axios.get(API_URL).then((res) => {
            setItem(res.data)
        })
    }, [])

    return <Item item={item} />;
}

export default Post;