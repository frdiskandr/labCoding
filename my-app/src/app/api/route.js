import { NextResponse } from "next/server";

async function GET(request) {
    const req = await request;
    console.log(req);

    const result = {
        status: 200,
        message: "Success",
        data: req,
    };
    return NextResponse.json(result);
}

async function POST(Request) {
    const req = await Request;
    console.log(req.json());

    return NextResponse.json(req);
}

export { GET, POST };
