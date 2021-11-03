import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components"
import { Post } from '../components/index'

export const Index = () => {
  const [data, setData] = useState({
    "pp": [
      {
        teamName: "Fav",
        teamMenber: 3,
        teamStyle: "エンジョイ",
        recruitmentMenber:8
      }
    ]
  });

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
    <section className="bg-black">
      <PostWrap className="py-24">
        <ul className="">
          {data.pp.map((data,index) => {
            return (
              <Post
                key={ data.index }
                teamName={ data.teamName }
                teamMenber={ data.teamMenber }
                teamStyle={ data.teamStyle }
                recruitmentMenber={ data.recruitmentMenber }
              />
            )
          }) }
        </ul>
      </PostWrap>
    </section>
  )
}

const PostWrap = styled.div`
  margin:0 auto;
`
