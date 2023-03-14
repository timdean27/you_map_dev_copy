import React from "react";

const ChatInPopUp = ({ selectedMarker }) => {
  console.log(selectedMarker)
  const mapChatFunc = () => {
    selectedMarker.chats.map(chat => {
      console.log(chat)
      return <div>{chat}</div>;
    });
  };

  return (
    <div className="ChatBoxnPopup">
      ChatInPopUp for {selectedMarker.markerID}
      <div>{mapChatFunc}</div>
    </div>
  );
};

export default ChatInPopUp;
