import styled from 'styled-components'
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Footer
} from '../components/index'

const Notification = (props) => {
  const loginedUserId = Number(localStorage.getItem('userId'));
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    let unmounted = false;
    if(!unmounted) {
      getNotification(loginedUserId);
      unmounted = true;
    }
  },[loginedUserId])

  const getNotification = (id) => {
    let url = 'http://localhost:80';

    axios.get(url + '/api/notification/' + id)
    .then((res) => {
      setNotifications(res.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <>
      <NotificationSection className="h-screen bg-sub">
        <div className="bg-sub pb-16">
          <div className="flex flex-col items-center p-2 mb-16">
          {
            notifications.map((item, index) => {
              return (
                <Link key={ index } className="inline-block notification-btn text-left w-11/12 py-5 border-t-2 border-white" 
                to={{
                  pathname: '/notification/detail',
                  state: { 
                    userId : item.request_user_id,
                    notificationsId : item.id
                  }
                }}>
                  { item.message }
                </Link>
              );
            })
          }
          </div>

          <Footer />
        </div>
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



