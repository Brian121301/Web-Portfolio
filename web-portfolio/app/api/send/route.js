import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export async function POST(req) {
    const { email, subject, message } = await req.json();
    
    const putItemCommand = new PutItemCommand({
        TableName: 'ContactMessages',
        Item: {
            MessageID: {
                S: Date.now().toString(), // Ensure a unique MessageID
            },
            Email: {
                S: email,
            },
            Subject: {
                S: subject,
            },
            Message: {
                S: message,
            },
        },
    });

    try {
        await client.send(putItemCommand);
        return new Response(JSON.stringify({ message: 'Message saved successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error saving message:', error);
        return new Response(JSON.stringify({ error: 'Failed to save message.' }), { status: 500 });
    }
}
