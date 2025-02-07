import fs from "fs/promises";
import { NextResponse } from "next/server";


async function GET() {
    try {
        const data = await fs.readFile("data.json", "utf-8");
        if (!data) {
            await fs.writeFile("data.json", "[]");
        }
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json(error);
    }
}

async function POST(request) {
    try {
        const data = await request.json();
        await fs.writeFile("data.json", JSON.stringify(data));
        return NextResponse.json({ data, message: "success" });
    } catch (error) {
        return NextResponse.json(error);
    }
}

export { GET, POST };
