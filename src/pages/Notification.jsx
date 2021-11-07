import styled from 'styled-components'
import {
  Footer
} from '../components/index'

const Notification = (props) => {
  return (
    <>
      <NotificationSection className="h-screen bg-sub">
        <div className="flex flex-col items-center p-2 mb-16">
          <button className="notification-btn text-left w-11/12 py-5 border-t-2 border-white">
            〇〇さんからリクエストが来ました
          </button>
          <button className="notification-btn text-left w-11/12 py-5 border-t-2 border-white">
            〇〇さんからリクエストが来ました
          </button>
          <button className="notification-btn text-left w-11/12 py-5 border-t-2 border-white">
            〇〇さんからリクエストが来ました
          </button>
          <button className="notification-btn text-left w-11/12 py-5 border-t-2 border-white">
            〇〇さんからリクエストが来ました
          </button>
          <button className="notification-btn text-left w-11/12 py-5 border-t-2 border-white">
            〇〇さんからリクエストが来ました
          </button>
        </div>

        <Footer />
      </NotificationSection>
    </>
  )
}

const NotificationSection = styled.section`
  overflow-y: scroll;
  .notification-btn:first-child {
    border-top: none;
  }
`

export default Notification



