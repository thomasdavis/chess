// Thomas Davis - 2011
// Ephox Job Application Entry

// Wrap API in self executing anonymous function to keep globals tidy
(function(){
	
		// Save a reference to the root
		var root = this;
		
		var set_board = {
			// Black pieces
			A8: "BR", B8: "BKN", C8: "BB", D8: "BK", E8: "BQ", F8: "BB", G8: "BKN", H8: "BR",
			A7: "BP", B7: "BP", C7: "BP", D7: "BP", E7: "BP", F7: "BP", G7: "BP", H7: "BP",
			
			// White Pieces
			A2: "WP", B2: "WP", C2: "WP", D2: "WP", E2: "WP", F2: "WP", G2: "WP", H2: "WP",
			A1: "WR", B1: "WKN", C1: "WB", D1: "WK", E1: "WQ", F1: "WB", G1: "WKN", H1: "WR"
		}
		
		var fullpieces = {
			"K": "King",
			"Q": "Queen",
			"B": "Bishop",
			"KN": "Knight",
			"R": "Rook",
			"P": "Pawn"
		}
		
		var ChessBoard = root.ChessBoard = function( positions ) {
			
			// If any positions are passed to the Board, populate them
			// Used jQuery's deep copy method
			this.positions = positions || $.extend(true, {}, set_board);
			
			var chessboard = this;
			
			this.lookupPosition = function( position ) {
				// Returns the piece that is at a certain position on the grid otherwise 'empty'
				return chessboard.positions[position] || "empty";
			}
			
			this.clearPosition = function( position ) {
				// Remove any pieces from the current position
				delete chessboard.positions[position];
			}
			
			this.changePosition = function( old_position, new_position ) {
				// Move the piece in the old position to the new position, delete the old positions
				chessboard.positions[new_position] = chessboard.positions[old_position]
				chessboard.clearPosition( old_position );
			}
			
			this.resetBoard = function( ){
				// Resets the board to a configured ready to play board
				delete chessboard.positions;
				chessboard.positions = set_board;
			}
			
			this.clearBoard = function( ){
				// Clears the board entirely
				chessboard.positions = {};
			}
		};


		
}).call(this);


