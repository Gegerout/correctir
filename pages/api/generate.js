import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: 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,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-001", {
    prompt: generatePrompt(req.body.inputText),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(inputText) {
  const capitalizedText =
    inputText[0].toUpperCase() + inputText.slice(1).toLowerCase();
  return `Correct this to standard English:\n\n ${capitalizedText}`;
}
