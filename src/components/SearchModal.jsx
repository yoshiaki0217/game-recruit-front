import styled from "styled-components";
import { InputText, PrimaryButton } from "./index"
import CloseButton from '../images/close-search.svg'
import { Post } from '../pages/PostIndex'
import { useState, useEffect, useContext } from "react";
import axios from 'axios'

const SearchModal = (props) => {
  const { onClickSearch,styledNone } = props;
  const {postDetail, setSearchedPostDetail} = useContext(Post);
  const [groupStyles, setGroupStyles] = useState([]);

  useEffect(() => {
    getGroupStyle();
  },[])

  const searchPost = (e) => {
    let searchWord = {};
    e.preventDefault();

    let target = e.target;
    let children = target.querySelectorAll('input, select')
    children.forEach(function (e) {
      if(e.name === 'style_id') {
        if(!(e.value === '0')) {
          searchWord[e.name] = e.value;
        }
      } else if(e.value){
        searchWord[e.name] = e.value;
      }
    })
    
    let data = postDetail.filter((item) => {
      let matchFlag = false;

      for (let searchItem in searchWord) {
        if(searchItem === 'keyword') {
          if((item.group_detail.group_name.indexOf(searchWord[searchItem]) > -1)
          || (item.group_detail.description.indexOf(searchWord[searchItem]) > -1)
          || (item.group_detail.mst_game.game_name.indexOf(searchWord[searchItem]) > -1)) {
            matchFlag = true;
          }
        }
        if(searchItem === 'style_id') {
          if((String(item.group_detail.style_id) === searchWord[searchItem] )) {
            matchFlag = true;
          }
        }
        if(searchItem === 'recruitment') {
          if((item.group_detail.recruitment === searchWord[searchItem])) {
            matchFlag = true;
          }
        }
      }
      return matchFlag;
    })

    if(!Object.keys(searchWord).length) {
      setSearchedPostDetail(postDetail);
    } else {
      setSearchedPostDetail(data);
    }
  }

  const getGroupStyle = () => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/game/styles')
    .then((res) => {
      setGroupStyles(res.data.results);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <ButtnWrap className={styledNone ? "hidden" : "bg-gray-500 bg-opacity-50 fixed flex items-center justify-center h-screen w-full z-50"}>
      <div className="bg-main w-80 mx-auto px-2 py-4 justify-center">
        <button onClick={ onClickSearch } className="ml-auto block mb-5">
          <img src={ CloseButton } alt="閉じるボタン" />
        </button>
        <form onSubmit={searchPost}>
          <InputText name={ "keyword" } styled={ "mb-4 block w-9/10 h-10 m-auto pl-2" } placeholder={ "キーワード" } />
          <select name="style_id" className="mb-4 block w-9/10 h-10 m-auto pl-2">
            <option value="0">スタイル</option>
            {
            groupStyles.map((data, index) => {
              return (
                <option key={ index } value={ data.id }>{ data.style_name }</option>
              )
            })
            }
          </select>
          <InputText name={ "recruitment" } styled={ "mb-4 block w-9/10 h-10 m-auto pl-2" } placeholder={ "募集人数" } />
          <PrimaryButton type={ "submit" } styles={ "bg-sub px-2 py-1 m-auto" } >この条件で絞り込む</PrimaryButton>
        </form>
      </div>
    </ButtnWrap>
  )
}

export default SearchModal

const ButtnWrap = styled.section`
  .search-modal-open{
    background: #4E0866;
    padding: 1rem 1rem 3rem 1rem;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    z-index: 99;
  }
  .search-modal-close{
    display: none;
  }
`