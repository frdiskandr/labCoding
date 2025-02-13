import { NextResponse } from "next/server";
import Logger from "@/utils/logger/logger.js";

export async function GET(){
    try {
        return NextResponse.json({message: "Hello", statusbar: 201})
    } catch (error) {
        Logger.error(error)
        return NextResponse.json(error)
    }
}

