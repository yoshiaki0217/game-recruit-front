import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components"
import { Post,PrimaryButton } from '../components/index'

export const PostIndx = () => {
  const data = 
    [
      {
        id:1,
        teamName: "FavFavFavFavFavFavFavFavFav",
        gameName: "レインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックスレインボーシックス",
        teamMenber: 3,
        teamStyle: "エンジョイ",
        recruitmentMenber: 8,
        teamDetail:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
      },
      {
        id:2,
        teamName: "戦国ゲーミング",
        gameName: "ストリートファイター",
        teamMenber: 6,
        teamStyle: "ガチ勢",
        recruitmentMenber: 1,
        teamDetail:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
      },
      {
        id:3,
        teamName: "Fav",
        gameName: "マリオカート",
        teamMenber: 4,
        teamStyle: "エンジョイ",
        recruitmentMenber: 2,
        teamDetail:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
      }
    ];

    // useEffect(
    //   () => {
    //     axios
    //       .get( 'http://localhost/api/test' )
    //       .then( (res) => {
    //           setData(res.data);
    //       })
    //       .catch( (e) => {
    //         console.log(e);
    //       })
    //     },
    //   []
    // );
  return (
    <section className="bg-sub">
      <PostWrap className="py-24">
        <ul className="">
          {data.map((data) => {
            return (
              <li key={data.id}>
                <Post
                  teamName={ data.teamName }
                  gameName={ data.gameName }
                  teamMenber={ data.teamMenber }
                  teamStyle={ data.teamStyle }
                  recruitmentMenber={data.recruitmentMenber}
                  teamDetail={ data.teamDetail }
                  detailStyle={ "post-detail max-h-24" }
                  btnText={"詳細を見る"}
                  favoriteBtnStyle={ "absolute -bottom-4 -right-4" }
                />
              </li>
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
