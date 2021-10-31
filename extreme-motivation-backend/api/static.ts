import {Context} from "aws-lambda";

export const apiBaseGet = (event: any, context: Context) => {
    // get current active
    // if not there create
    // compose response
    // return

    return null;
}

function createObjFromNameAndPath(name, pathUrl, date) {
    return {
        uid: '',//uuidv4(),
        updateDate: date,
        titleText: name,
        mainText: '',
        streamUrl: pathUrl,
        redirectUrl: 'https://aarondietz.de'
    };
}
