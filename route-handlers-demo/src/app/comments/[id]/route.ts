import { comments } from "../data"
export async function GET(
    _request: Request, 
    { params } : {
    params: Promise<{id: string}>;
}){
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return Response.json(comment) 
}


export async function PATCH(
    request: Request,
    { params } : {
        params: Promise<{id : string}>;
    }
) {
    const { id } = await params;
    const comment = comments.find((comment) => comment.id === parseInt(id));
    if(!comment){
        return Response.json({error: "Comment not found"})

    }
    const newComment = await request.json();
    comment.text = newComment.text;
    return Response.json(comment, {
        headers: {"Content-Type": "application/json"},
        status: 200
    });
}


export async function DELETE(
    _request: Request,
    { params } : {
        params : Promise<{id: string}>;
    }
) {
    const { id } = await params;
    const commentIndex = comments.findIndex((comment) => comment.id === parseInt(id));
    if(commentIndex === -1){
        return Response.json({error: "comment not found :/"});
    }

    comments.splice(commentIndex, 1);
    return Response.json({message: "comment deleted successfully"}, {
        headers: {"Content-Type": "application/json"},
        status: 200
    });
}