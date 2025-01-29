import Player from '../player';
import Square from '../square';
import Piece from './piece';
//import getPiece from '../board';
//import { board } from '../../frontend/js/chessington';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
       let location = board.findPiece(this)
       //let location_blockingPiece = board.findPiece(board.blockingPiece)
        let moves = [];


        //let blockingPiece = getPiece(this.location.row + 1, this.location.col) 
            //     return this.board[square.row][square.col]
        // add another if to move 2 place 1st go
// for the pawn location use get piece for square in front
     //  /* getPiece(square) {
       //     return this.board[square.row][square.col];
        //}

        // if get piece != empty return empty array 



        if (this.player === Player.WHITE) {
           if (location.row === 1){
                if(board.getPiece(Square.at(location.row +2, location.col))===undefined && board.getPiece(Square.at(location.row +1, location.col))===undefined){
                    moves.push(Square.at(location.row + 2, location.col))
                }
            }
                      
            if(board.getPiece(Square.at(location.row +1, location.col))===undefined){
                    moves.push(Square.at(location.row + 1, location.col))
                }

            } 
  
        else {
            if (location.row == 6){
                if(board.getPiece(Square.at(location.row -2, location.col))===undefined && board.getPiece(Square.at(location.row -1, location.col))===undefined){
                    moves.push(Square.at(location.row - 2, location.col))
                }
            } 

            if(board.getPiece(Square.at(location.row -1, location.col))===undefined){
                moves.push(Square.at(location.row - 1, location.col))
            }
        } 

           
            
        
        return moves;
    }

}