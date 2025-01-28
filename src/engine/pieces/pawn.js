import Player from '../player';
import Square from '../square';
import Piece from './piece';
//import { board } from '../../frontend/js/chessington';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = [];
        if (this.player === Player.WHITE) {
            moves.push(Square.at(location.row + 1, location.col))
            
        } else {
            moves.push(Square.at(location.row - 1, location.col))
        }
        return moves;
    }
}
