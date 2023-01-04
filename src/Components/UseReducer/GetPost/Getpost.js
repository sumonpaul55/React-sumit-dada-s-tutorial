import React, { useEffect, useState } from 'react';

const Getpost = () => {
    const [error, setError] = useState('');
    const [Loading, setLoading] = useState(true);
    const [post, setPost] = useState({
        
    });
    

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then(response => response.json())
        .then(data =>{
            setLoading(false);
            setPost(data);
            setError('');
        }).catch(()=>{
            setLoading(false);
            setError('There was an error');
            setPost({})
        })
    },[])


    return (
        <div>
            <h3>
            {(Loading) ? 'Data Loading......': post.title}
            {error ? error : null}
            </h3>
        </div>
    );
};

export default Getpost;