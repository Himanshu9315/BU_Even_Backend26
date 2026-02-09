import { useState } from "react"

export const AIChat = () => {

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const callGemini = async () => {
        const response = await fetch("http://localhost:3000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({prompt})
        });
        const data = await response.json();
        setResponse(data.reply);
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">AI Chat with Gemini</h2>
            <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                rows="4"
                placeholder="Enter your prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                onClick={callGemini}
            >
                Send to Gemini
            </button>
            {response && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-lg font-bold mb-2 text-gray-800">Response:</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
                </div>
            )}
        </div>
    )
}