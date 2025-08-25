import { GetTodos }     from "./_controller/gettodos";
import { NextResponse } from "next/server";
import AddTodo          from "./_controller/addtodo";
import GetUserSessionOrError from "@/app/api/auth/_lib/getsession";
import UpdateTodo       from "./_controller/updatetodo";
import ErrorMessage     from "./_controller/_error";
import DeleteTodo       from "./_controller/deletetodo";

//=========================================================================
export async function GET() {
    try {
        const session = await GetUserSessionOrError();
        if (session instanceof NextResponse)
            return session;

        return await GetTodos(session);
    } catch (error :any) {
        return ErrorMessage( error.message );
    }
}

//=========================================================================
export async function POST(req: Request) {
    try {
        const session = await GetUserSessionOrError();
        if (session instanceof NextResponse)
            return session;
        
        return await AddTodo(session, req);

    } catch (error: any) {
        return ErrorMessage(error.message);
    }
}

//=========================================================================
export async function PUT(req: Request) {
    try {
        const session = await GetUserSessionOrError();
        if (session instanceof NextResponse)
            return session;
        
        return await UpdateTodo(session, req);

    } catch (error: any) {
        return ErrorMessage(error.message);
    }
}

//=========================================================================
export async function DELETE(req: Request) {
    try {
        const session = await GetUserSessionOrError();
        if (session instanceof NextResponse)
            return session;
        
        return await DeleteTodo(session, req);

    } catch (error: any) {
        return ErrorMessage(error.message);
    }
}
