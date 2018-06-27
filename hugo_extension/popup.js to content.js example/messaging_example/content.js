chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
          console.log("recv");
        if( request.message === "start" ) {
         start();
             }
      }
    );

    function start(){
        alert("started");
    }
