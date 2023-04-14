const { Configuration, OpenAIApi} =require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const chatGPT = async (prompt) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "Act as a Bible scholar. User will ask you a question and you will give bible verses relating to that question." },
        { role: "user", content: "Find me a bible verse about love" },
        { role: "assistant", content: "1 Corinthians 13:4 to 8a Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth." },
        { role: "user", content: prompt }],
    });
    console.log(response["data"]["choices"][0]["message"]["content"]);
};

chatGPT("About revenge");