const Send = async (req, res) => {
    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization:
                "Bearer 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",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "deepseek/deepseek-r1-zero:free",
            messages: [
                {
                    role: "user",
                    content: "What is the meaning of life?",
                },
            ],
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

const result = Send();
console.log(result);

export default Send;
