let tg = window.Telegram.WebApp;
tg.expand();
<button 
    onClick={{ 
        type: "telegramWebApp", 
        method: 'showScanQrPopup', 
        params: { 
            title: 'Title', 
            message: 'Message' 
        } 
    }}
>Click</button>;

Telegram.WebApp.onEvent("qrTextReceived", function(){
  tg.sendData("888");
});
