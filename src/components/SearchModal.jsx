import styled from "styled-components";
import { InputText, PrimaryButton } from "./index"
import CloseButton from '../images/close-search.svg'

const SearchModal = (props) => {
  const { onClickSearch,styledNone } = props;

  return (
    <ButtnWrap>
      <div className={styledNone ? "search-modal-close" : "search-modal-open"}>
        <button onClick={ onClickSearch } className="ml-auto block mb-5">
          <img src={ CloseButton } alt="閉じるボタン" />
        </button>
        <InputText styled={ "mb-4 block w-9/10 h-10 m-auto pl-2" } placeholder={ "キーワード" } />
        <InputText styled={ "mb-4 block w-9/10 h-10 m-auto pl-2" } placeholder={ "ランク帯" } />
        <InputText styled={ "mb-4 block w-9/10 h-10 m-auto pl-2" } placeholder={ "募集人数" } />
        <InputText styled={ "mb-8 block w-9/10 h-10 m-auto pl-2" } placeholder={"募集期間"} />
        <PrimaryButton　styles={ "bg-sub px-2 py-1 m-auto" }>この条件で絞り込む</PrimaryButton>
      </div>
    </ButtnWrap>
  )
}

export default SearchModal

const ButtnWrap = styled.button`
  .search-modal-open{
    background: #4E0866;
    padding: 1rem 1rem 3rem 1rem;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    z-index: 99;
  }
  .search-modal-close{
    display: none;
  }
`