function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <iframe
        src="germini-chat-bot/index.html" // Replace with your actual URL
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          margin: 0,
          padding: 0,
          display: "block",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default App;
