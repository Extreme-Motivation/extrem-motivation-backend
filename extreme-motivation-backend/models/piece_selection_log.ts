import oneTable from './one_table';

const Piece = oneTable.getModel('PieceSelectionLog');

export const getCurrentActive = () =>
    Piece.find({sk: {'=': ''}});

export const createNewActive = (piece_pk: String, from: Date) =>
    Piece.create({
        piece_pk: piece_pk,
        from: from
    });

