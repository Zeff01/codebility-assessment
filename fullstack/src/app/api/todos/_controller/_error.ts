import { NextResponse } from "next/server";

export default function ErrorMessage( msg :any) {
    return NextResponse.json(
        {
            error:  "Internal Server Error",
            message: msg,
        },
        { status: 500 }
    );
}