import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components"
import { Post } from '../components/index'

export const Index = () => {
  const [data, setData] = useState([]);

    useEffect(
      () => {
        axios
          .get( 'http://localhost/api/test' )
          .then( (res) => {
              setData(res.data);
          })
          .catch( (e) => {
            console.log(e);
          })
        },
      []
    );
  return (
    <section>
      <PostWrap className="py-24">
        <PostList className="flex flex-wrap">
          {data.map((data) => {
            return (
              <Post
                key={ data.index }
                teamName={ data.teamName }
                teamMenber={ data.teamMenber }
                teamLank={ data.teamLank }
              />
            )
          }) }
        </PostList>
      </PostWrap>
    </section>
  )
}

const PostWrap = styled.div`
  width:1080px;
  margin:0 auto;
`

const PostList = styled.ul`
  .psot-item{
    margin: 0 50px 50px 0;
  }
  .psot-item:nth-child(3n){
    margin-right:0px;
  }
`
