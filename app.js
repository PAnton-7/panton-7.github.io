let tg = window.Telegram.WebApp;
tg.expand();
tg.showScanQrPopup(text="QR");

Telegram.WebApp.onEvent("qrTextReceived", function(){
  tg.sendData("888");
});
