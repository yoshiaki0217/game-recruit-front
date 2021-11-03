import styled from 'styled-components'
import Search from '../images/search.svg'
import Down from '../images/down-arrow.svg'
import Right from '../images/right-arrow.svg'
import Add from '../images/add.svg'
import Chat from '../images/chat.svg'
import Detail from '../images/detail.svg'
import Siege from '../images/siege_logo.jpg'
import Footer from '../components/Footer'

export const Home = (props) => {
  return (
    <>
      <HomeSection className="h-screen">
        <div className="flex items-center justify-center search-box">
          <input className="m-3 w-56" placeholder="検索" type="search" />
        </div>

        <div className="px-4 flex justify-between items-center bg-main h-8 border-b-2 border-sub">
          <div className="flex flex-row items-center">
            <h2 className="text-white w-20">グループ</h2>
            <button>
              <img src={Down} width="16" height="16" alt="" />
            </button>
            <button>
              <img src={Right} width="16" height="16" alt="" />
            </button>
          </div>
          <button className="">
            <img src={Add} width="16" height="16" alt="" />
          </button>
        </div>

        <section>
          <div className="px-4 flex justify-between items-center bg-sub h-16 border-b-2 border-sub">
            <div className="flex flex-row items-center">
              <img className="rounded-full m-1" src={Siege} width="42" height="42" alt="" />
              <p className="text-black w-20">グループ名</p>
            </div>
            <div>
              <button className="m-2">
                <img src={Chat} width="28" height="28" alt="" />
              </button>
              <button className="m-2">
                <img src={Detail} width="28" height="28" alt="" />
              </button>
            </div>
          </div>
          <div className="px-4 flex justify-between items-center bg-sub h-16 border-b-2 border-sub">
            <div className="flex flex-row items-center">
              <img className="rounded-full m-1" src={Siege} width="42" height="42" alt="" />
              <p className="text-black w-20">グループ名</p>
            </div>
            <div>
              <button className="m-2">
                <img src={Chat} width="28" height="28" alt="" />
              </button>
              <button className="m-2">
                <img src={Detail} width="28" height="28" alt="" />
              </button>
            </div>
          </div>
        </section>

        <div className="px-4 flex justify-between items-center bg-main h-8 border-b-2 border-sub">
          <div className="flex flex-row items-center">
            <h2 className="text-white w-20">友だち</h2>
            <button>
              <img src={Down} width="16" height="16" alt="" />
            </button>
            <button>
              <img src={Right} width="16" height="16" alt="" />
            </button>
          </div>
        </div>

        <section>
          <div className="px-4 flex justify-between items-center bg-sub h-16 border-b-2 border-sub">
            <div className="flex flex-row items-center">
              <img className="rounded-full m-1" src={Siege} width="42" height="42" alt="" />
              <p className="text-black w-20">友だち名</p>
            </div>
            <div>
              <button className="m-2">
                <img src={Chat} width="28" height="28" alt="" />
              </button>
              <button className="m-2">
                <img src={Detail} width="28" height="28" alt="" />
              </button>
            </div>
          </div>
          <div className="px-4 flex justify-between items-center bg-sub h-16 border-b-2 border-sub">
            <div className="flex flex-row items-center">
              <img className="rounded-full m-1" src={Siege} width="42" height="42" alt="" />
              <p className="text-black w-20">友だち名</p>
            </div>
            <div>
              <button className="m-2">
                <img src={Chat} width="28" height="28" alt="" />
              </button>
              <button className="m-2">
                <img src={Detail} width="28" height="28" alt="" />
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </HomeSection>
    </>
  )
}

const HomeSection = styled.section`
  background: #E8D1F0;

  .search-box {
    position: relative;
  }

  .search-box::before {
    content: "";
    width: 16px;
    height: 16px;
    background: url(${Search}) no-repeat center center / auto 100%;
    display: inline-block;
    position: absolute;
    top: 35%;
    transform: translateY(-50%);
    transform: translateX(-600%);
  }

  .search-box input {
    padding: 3px 0 3px 2em;
  }

  .add-button {
    position: relative;
    top: 0%;
    right: 0;

  }
`



