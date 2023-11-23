# Shush

https://github.com/arihanv/Shush/assets/63890951/7439ae39-67f7-4546-a896-8c1a50636197


Shush is an app that deploys a WhisperV3 model with Fast Attention v2 on Modal and makes requests to it via a NextJS app. The essential **goal** of this app is to provide a full-stack demo to those interested in running high-performance models and reliable APIs on demand with auto-scaling.

This is a demo app built with [Next.js](https://nextjs.org/) (Frontend) + [Modal](https://modal.com/) (Backend).

# Set Up
Visit [modal.com](https://modal.com/) and create a free account. Then follow the instructions to install the Modal python package and authenticate in your CLI.

## Deploy backend
We will be using Modal to deploy and serve [WhisperV3](https://github.com/openai/whisper), an audio transcription model built by OpenAI.

Execute the following commands in your terminal:
```
cd modal
modal deploy modal_app.py
```

## Deploy Frontend
Now let's run the NextJS app. After going back to the root of the repo, execute the following commands:
```
cd shush
bun i
bun run dev
```

And that's it! Open http://localhost:3000/ in your browser and test your model out!
