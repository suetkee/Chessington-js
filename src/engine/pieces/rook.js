import Piece from './piece';
import Square from '../square';
//import BOARD_SIZE from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this) //{location.row,location.col}
        let moves = [];
        
        //GameSettings.BOARD_SIZE
        // 1, 3
        // "col": 1
        // "row":
       // moves.push(Square.at(location.row, location.col[i]))

            for(let i=0; i < 8; i++){
                if(i!==location.col){
                    moves.push(Square.at(location.row,i))
                }
            
                if(i!==location.row){
                    moves.push(Square.at(i,location.col))
                }
            }

        return moves;
    }
}
