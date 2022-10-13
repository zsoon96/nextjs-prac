export default (req, res) => {
    if ( req.method === 'GET') {
        res.setHeader('Set-Cookie','a_name=Soon;Max-Age=0;HttpOnly,Secure');
        res.status = 200;
        res.json({ message:'ok' });
    }
}