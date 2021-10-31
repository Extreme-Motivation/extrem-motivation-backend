import {OneSchema, Table} from "dynamodb-onetable";
import {DynamoDBClient} from '@aws-sdk/client-dynamodb'
import Dynamo from 'dynamodb-onetable/Dynamo'

const client = new Dynamo({client: new DynamoDBClient({region: process.env.region})})

export const Schema: OneSchema = {
    version: '0.0.1',
    format: 'onetable:2.0.3',
    indexes: {
        primary: {hash: 'pk', sort: 'sk'},
    },
    models: {
        Piece: {
            pk: {type: String, value: 'piece:${author}#${title}'},
            sk: {type: String, value: 'piece:${date}'},
            title: {type: String, required: true},
            author: {type: String, required: true},
            location: {type: String, required: true},
            user_pk: {type: String}
        },
        PieceAccessLog: {
            pk: {type: String, value: 'pieceAccessLog:${piece_pk}#${date}'},
            sk: {type: String, value: 'pieceAccessLog:${date}'},
            piece_pk: {type: String, required: true},
            visitor_id: {type: String}
        },
        PieceSelectionLog: {
            pk: {type: String, value: 'pieceSelectionLog:${piece_pk}#${date}'},
            sk: {type: String, value: 'pieceSelectionLog:${from}#${until}'},
            piece_pk: {type: String, required: true},
            uuid: {type: String, required: true, uuid: true},
            from: {type: Date, required: true},
            until: {type: Date}
        },
        User: {
            pk: {type: String, value: 'user:${username}'},
            firstName: {type: String, required: true},
            lastName: {type: String, required: true},
            username: {type: String, required: true, unique: true},
            passwdHash: {type: String, required: true}
        }
    }
}

const table = new Table({
    client: client,
    name: process.env.tableName,
    schema: Schema,
    timestamps: true
})

export default table
