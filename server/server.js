// import express from 'express'
// import * as dotenv from 'dotenv'
// import cors from 'cors'
// import { Configuration, OpenAIApi } from 'openai'

// dotenv.config()

// const configuration = new Configuration({
//     apiKey:process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration)
 
// const app = express()
// app.use(cors())
// app.use(express.json())

// app.get('/', async (req, res) =>{
//     res.status(200).send({
//         messsage:'This Is a new message from the Backend Speaking',
//     })
// })

// app.post('/', async (req, res) =>{
//     try{
//         const prompt = req.body.prompt
//         const response = await openai.createCompletion({
//             model: "davinci-002",
//             prompt: `${prompt}`,
//             temperature: 1,
//             max_tokens: 3000,
//             top_p: 1,
//             frequency_penalty: 0.5,
//             presence_penalty: 0
//         })
//         res.status(200).send({
//             bot:response.data.choices[0].text
//         })
//     }
//     catch(error){
//         console.log(error)
//         res.status(500).send({ error })
//     }
// })

// app.listen(5000, ()=>console.log('Server is running on https://chatgpt-clone-3299.onrender.com'))




import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'This is a new message from the Backend Speaking',
    });
});

app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: `${prompt}`,
            temperature: 1,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
        res.status(200).send({
            bot: response.data.choices[0].text
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});

app.listen(5000, () => console.log('Server is running on https://chatgpt-clone-m5xx.onrender.com/'));
