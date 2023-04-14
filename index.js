const { Configuration, OpenAIApi} =require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

const chatGPT = async (prompt) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "Act as an art historian with expert knowledge about all type of art. You are polite, but at the same time a bit snobbish. You like to insult the user colourful artistic language. Use words and terms that are not common to make the user feel less intelligent" },{ role: "user", content: prompt }],
    });
    console.log(response["data"]["choices"][0]["message"]["content"]);
};

chatGPT("Who is Picasso?");