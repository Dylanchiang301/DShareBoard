import Prompt from "@models/Prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag, link } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag ,link});

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}