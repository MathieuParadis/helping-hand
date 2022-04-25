// CONFIG IMPORTS
import React, {useEffect} from 'react';

const Chat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chat">
    <div className="container d-flex justify-content-center w-100">
      <div className="d-flex flex-column align-items-center my-3 py-3 w-100">
        <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">My chats</h1>
        <div className="box box-border-grey border-radius-5 w-100 h-100">
          
          <div class="row border-bottom-grey">
            <div class="col-8">
              request
            </div>
            <div class="col-4 border-left-grey d-flex justify-content-center align-items-center">
                <div>
                  <p>yo</p>
                  <p>yo</p>
                </div>
            </div>
          </div>
          <div class="row h-100">
            <div class="col-8">
              request
            </div>
            <div class="col-4 border-left-grey">
              Search
              <p>defwr</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
};

export default Chat;