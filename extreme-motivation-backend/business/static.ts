import {apiBaseGet} from "../api/static";
import {Context} from "aws-lambda";


export const baseGet = async (event: any, context: Context) => {
    const response = {
        statusCode: 200,
        header: {'content-type': 'application/json'},
        body: JSON.stringify(await apiBaseGet(event, context)),
    }
    return new Promise((resolve => resolve(response)));
}
