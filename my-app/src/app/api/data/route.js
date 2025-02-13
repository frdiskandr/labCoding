import fs from "fs/promises";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const data = await fs.readFile("data.json", "utf-8");
        if (!data) {
            await fs.writeFile("data.json", "[]");
        }
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({message : error.message});
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        const oldData = await fs.readFile("data.json", "utf-8");
        const newData = [...JSON.parse(oldData), data];
        await fs.writeFile("data.json", JSON.stringify(newData));
        return NextResponse.json({ data, message: "success" });
    } catch (error) {
        return NextResponse.json(error);
    }
}
