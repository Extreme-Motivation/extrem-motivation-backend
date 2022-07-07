import {Context} from "aws-lambda";

import {addSeconds, setHours} from "date-fns";
import {zonedTimeToUtc} from "date-fns-tz";

import {getCurrentActive} from "../models/piece_selection_log";

const pieceRotationPointInTimeSecondsFromMidnight = parseInt(process.env.pieceRotationPointInTimeSecondsFromMidnight);

export const apiBaseGet = (event: any, context: Context) => {
    getCurrentActivePieceIfPossible(calculateDate());
    // get current active
    // if not there create
    // compose response
    // return

    return null;
}

function getCurrentActivePieceIfPossible(date: Date) {
    return getCurrentActive(date)
        .then(pieceAccessLog => pieceAccessLog.count > 0 ? pieceAccessLog[0] : null)
        .then();
}

function calculateDate() {
    const utcDate = zonedTimeToUtc(new Date(), Intl.DateTimeFormat().resolvedOptions().timeZone);
    const utcMidnight = setHours(utcDate, 0);
    return addSeconds(utcMidnight, pieceRotationPointInTimeSecondsFromMidnight);
}

function resolveNewActivePieceIfNecessary(possibleCandidate) {

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
