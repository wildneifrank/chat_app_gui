function MessageSent({ text }) {
  return (
    <div className="w-full flex flex-row-reverse">
      <div className="max-w-sm min-h-4 bg-blue-900 rounded-3xl rounded-ee-none text-white flex flex-col px-6 py-4 text-lg">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default MessageSent;
