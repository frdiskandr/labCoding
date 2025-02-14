import { NextResponse } from "next/server";
import { v1 as uuid } from 'uuid'
import { Create, DeleteById, Get, UpdateById } from "~/services/fileSistem";



export async function GET(req: Request) { //digunakan untuk mendapatkan data dari todos api
    try {
        console.log(req)
        const res = await Get()
        console.log(res)
        return NextResponse.json(res)
    } catch (e) {
        console.log(e)
        return NextResponse.error()
    }
}

export async function POST(req: Request) { //digunakan untuk membuat todo baru dengan req = title(string) dan completed(boolen)
    try {
        const request = await req.json()
        request.id = uuid();
        const res = await Create(request)
        return NextResponse.json(res)
    } catch (e) {
        console.log(e)
        return NextResponse.error()
    }
}

export async function PATCH(req: Request) { //digunakan untuk memperbarui data berdasarkan id dengan body berisi data {title, completed}
    try {
        const request = await req.json()
        const res = await UpdateById(request)
        return NextResponse.json(res)
    } catch (e) {
        console.log(e)
        return NextResponse.error()
    }
}

export async function DELETE(req: Request) { //digunakan untuk menghapus data berdasarkan id
    try {
        const request = await req.json();
        const res = await DeleteById(request);
        return NextResponse.json(res)
    } catch (e) {
        console.log(e)
        return NextResponse.error()
    }
}