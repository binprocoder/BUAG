import React, { useState } from 'react'
import Axios from 'axios'
import Messages from './Messages'
import Card from './Card'
const cards = [{}]
fetch('http://localhost:666/tours')
  .then(response => response.json())
  .then(data => {
    for (var i = 0; i < data.data.length; i++) {
      cards.push({
        name: data.data[i].name,
        avatar: data.data[i].avatar,
        gianguoilon: data.data[i].gianguoilon,
      })
    }
  });

const Chat = () => {
  const [responses, setResponses] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [check, setCheck] = useState(false)
  const [card, setCard] = useState(cards)
  const cardSearch = [{}]

  const handleMessageSubmit = (message) => {
    const data = {
      message,
    }
    Axios
      .post('http://localhost:666/chatbot', data)
      .then((response) => {
        const responseData = {
          text:
            (response.data['message']['fulfillmentText'] !== ''
              ? response.data['message']['fulfillmentText']
              : "Sorry, I can't get it. Can you please repeat once?")
            || (response.data['message'] !== ''
              ? response.data['message']
              : "Sorry, I can't get it. Can you please repeat once?"),
          isBot: true,

        }
        // if (response.data['message']['fulfillmentText'] === 'Công ty có các dịch vụ tour như: + Du lịch tham quan + Du lịch Ẩm thực + Du lịch Xanh')
        //   console.log("âsasas")
        // {
        //   for (var i = 0; i < card.length; i++) {
    
        //     if (response.data['message']["queryText"].toString().includes(card[i].Loaitours[0].name)) {
        //       cardSearch.push({
        //         name: card[i].name,
        //         avatar: card[i].avatar,
        //         gianguoilon: card[i].gianguoilon
        //       })
        //     }
        //   }
        //   setCard(cardSearch)
        //   setCheck(true)
        // }
        if (response.data['message']['fulfillmentText'] === 'Tôi sẽ gợi ý một số tour trong nước của công ty chúng tôi') { setCheck(true) }
        setCard(cards)
        setCheck(false)
        for (var i = 0; i < card.length; i++) {
          if (response.data['message']["queryText"].toString().includes(card[i].name)) {
            cardSearch.push({
              name: card[i].name,
              avatar: card[i].avatar,
              gianguoilon: card[i].gianguoilon
            })
            setCard(cardSearch)
            setCheck(true)

          }


        }

        console.log(response.data)
        setResponses((responses) => [...responses, responseData])
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
  }
  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
    }
    if (event.key === 'Enter' && event.target.value !== '') {
      setResponses((responses) => [...responses, message])
      handleMessageSubmit(message.text)
      setCurrentMessage('')
    }
  }

  return (
    <>
      <div className="flex justify-end px-3 mx-auto chatbot">
        <div className="flex flex-col justify-between w-full h-auto max-w-xs py-4 my-2 bg-gray-100 shadow-sm lg:max-w-md dark:bg-gray-900 rounded-xl">
          <div className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch messagesSection scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2">
            <Messages messages={responses} />
            {check && <Card card={card} />}
          </div>

          <div className="flex justify-center px-3 py-2 border-t-2 border-gray-200 dark:border-gray-600 ">
            <div className="w-full px-2 py-2 lg:max-w-lg ">
              <input
                type="text"
                value={currentMessage}
                onChange={handleMessageChange}
                onKeyDown={handleSubmit}
                placeholder="Enter your message here"
                className="block w-full py-2 pl-3 pr-3 text-sm enter_chatbot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
