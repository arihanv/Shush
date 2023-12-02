# Shush


https://github.com/arihanv/Shush/assets/63890951/6e675260-c29a-4fd4-8ba5-0b70549f0bcd





Shush is an app that deploys a WhisperV3 model with Flash Attention v2 on Modal and makes requests to it via a NextJS app. The essential **goal** of this app is to provide a full-stack demo to those interested in running high-performance models and reliable APIs on demand with auto-scaling.

This is a demo app built with [Next.js](https://nextjs.org/) (Frontend) + [Modal](https://modal.com/) (Backend).

# Set Up
Visit [modal.com](https://modal.com/) and create a free account. Then follow the instructions to install the Modal python package and authenticate in your CLI.

## Deploy backend
We will be using Modal to deploy and serve [WhisperV3](https://github.com/openai/whisper), an audio transcription model built by OpenAI.

Execute the following commands in your terminal:
```
cd modal
modal deploy shush.py
```
This is should give you a url in the form: `https://[ORG_NAME]--[STUB_NAME]-entrypoint.modal.run`

## Deploy Frontend
Now let's run the NextJS app. After going back to the root of the repo, execute the following commands:
```
cd shush
```
Now create a `.env` file and add the url we got from Modal (view `.env.example` for reference)

Then we can just do:
```
bun i
bun run dev
```

And that's it! Open http://localhost:3000/ in your browser and test the app + model out!
