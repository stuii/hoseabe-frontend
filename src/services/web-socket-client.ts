const connection = new WebSocket('ws://stui.ch:33363');
export const useWebSocketClient = () => {
  return {
    connection
  }
}
