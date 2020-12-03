import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
{ 
    id: 1,
    author:{
        id: 1, 
        name: 'Octávio Oliveira',
        username: 'octaviojsoliveira',
        avatar: '/images/avatars/avatar_1.png'     
    },
    title: "Criando um app com React.js",
    date: "April 7, 2020",
    description: 'Fala pessoal! Me diz aí qual o Framework mais utilizado por vocês!',
    hashtags: "#dotnet, #javascript, #reactjs, #developer ",
    image: "/images/posts/post9.jpg"
},
{
    id: 2,
    author: {
        id: 1, 
        name: 'Octávio Oliveira',
        username: 'octaviojsoliveira',
        avatar: '/images/avatars/avatar_1.png'
    },
    title: "Comparativo entre React.js e Vue.js - Performance",
    date: "April 1, 2020",
    description: 'Qual a experiência de vocês sobre esse comparativo?',
    hashtags: "#framework, #javascript, #reactjs, #vue ",
    image: "/images/posts/post8.png"
}
];

function Feed() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            { 
              posts.map(post => (
                  <PostCard key={post.id} post={post}/>
              ))
            } 
        </div>
    )
}

export default Feed;