function MessageReceived({ name, text }) {
  return (
    <div className="w-full flex">
      <div className="max-w-sm min-h-4 bg-blue-950 rounded-3xl rounded-ss-none text-white flex flex-col px-6 py-4 text-lg">
        <span className="font-bold">{name}</span>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default MessageReceived;
