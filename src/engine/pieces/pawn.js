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
        let location2 = board.findPiece(blockingPiece)
        let moves = [];
        // add another if to move 2 place 1st go
        if (this.player === Player.WHITE) {
            moves.push(Square.at(location.row + 1, location.col))
            if (location.row === 1){
                moves.push(Square.at(location.row + 2, location.col))
            }
            
        } else {
            moves.push(Square.at(location.row - 1, location.col))
            if (location.row === 6){
                moves.push(Square.at(location.row - 2, location.col))
            }
        }
        return moves;
    }
}
