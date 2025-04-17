import { Request, Response } from "express";
import { todosArr } from "../todoarr";
import { generateUUID, getDateTimeNow } from "../utils/generate"

export function getToDos(request: Request, response: Response) {
    console.log("GET ALL TODO ENDPOINT")
    response.status(200)
        .send(todosArr)
}
export function getToDo(request: Request, response: Response) {
    console.log("GET TO DO BY ID ENDPOINT")
    const reqParamID = request.params["id"].trim()
    const findUser = todosArr.find(obj => obj.id == reqParamID);
    if (typeof findUser === 'undefined') {
        response.status(404)
            .send({
                message: "Invalid! User not Found!"
            })
    } else {
        response.status(200)
            .send(JSON.stringify(findUser))
    }

}

export function deleteToDo(request: Request, response: Response) {
    console.log("DELETE TO DO BY ID  END POINT")
    const reqParamID = request.params["id"].trim()
    const indexOfUser = todosArr.findIndex(obj => obj.id == reqParamID)

    if (indexOfUser < 0) {
        response.status(404)
            .send({
                message: "Invalid! User not Found!"
            })
    } else {
        todosArr.splice(indexOfUser, 1);
        response.status(200)
            .send({
                message: `User ID:${reqParamID} deleted!`
            })
    }
}

export function postToDo(request: Request, response: Response) {
    console.log("POST TO DO ENDPOINT")
    const reqBody = request.body

    if (reqBody.title == undefined || reqBody.completed == undefined) {
        response.status(400).send({ message: "Invalid! Request body should contain title and completed!" })
    } else if (typeof reqBody.completed != "boolean") {
        response.status(400).send({ message: "Invalid! completed should be boolean" })
    }
    else if (reqBody.title.length < 3) {
        response.status(400).send({ message: "Invalid! title should contain 3 or more characters!" })
    } else {
        const newTodo = {
            id: generateUUID() as string,
            title: reqBody.title as string,
            completed: reqBody.completed as boolean,
            createdAt: getDateTimeNow(),
            updatedAt: getDateTimeNow()
        };
        todosArr.push(newTodo);

        response.status(201)
            .send({
                message: "Generated!",
                generatedToDo: newTodo
            });
    }
}

export function putToDo(request: Request, response: Response) {
    console.log("PUT TO DO BY ID ENDPOINT")
    const reqParamID = request.params["id"].trim()
    const reqBody = request.body

    const indexOfUser = todosArr.findIndex(obj => obj.id == reqParamID)

    if (indexOfUser < 0) {
        response.status(404)
            .send({
                message: "User not Found!"
            })
    } else {
        if (reqBody.title == undefined && reqBody.completed == undefined) {
            response.status(400).send({ message: "Invalid! Request body should contain title or completed!" })
        } else if (reqBody.completed != undefined && typeof reqBody.completed != "boolean") {
            response.status(400).send({ message: "Invalid! completed should be boolean" })
        }
        else if (reqBody.title != undefined && reqBody.title.length < 3) {
            response.status(400).send({ message: "Invalid! title should contain 3 or more characters!" })
        }

        else {
            if (reqBody.title != undefined) {
                todosArr[indexOfUser].title = reqBody.title
            }
            if (reqBody.completed != undefined) {
                todosArr[indexOfUser].completed = reqBody.completed
            }
            todosArr[indexOfUser].updatedAt = getDateTimeNow()
            response.status(200).send({
                message: "Success! Updated successfully!",
                updatedToDo: todosArr[indexOfUser],
            })
        }
    }
}
