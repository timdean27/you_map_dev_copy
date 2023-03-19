import React from "react";

const ChatInPopUp = ({ selectedMarker }) => {
  console.log(selectedMarker)
  const mapChatFunc = () => {
    return <div>{
    selectedMarker.chats.map((chat,index)=> {
      return <li key={index}>{chat}</li>
    })}
    </div>
  };

  return (
    <div className="ChatBoxnPopup">
      ChatInPopUp for {selectedMarker.markerID}
      <div>{selectedMarker.chats ? mapChatFunc() : <div>chat</div>}</div>
    </div>
  );
};

export default ChatInPopUp;
