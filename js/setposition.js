var init1 = function() {
	var board = new ChessBoard('board_1', {
	  draggable: true,
	  dropOffBoard: 'trash',
	  sparePieces: true
	});

	$('#startBtn_1').on('click', board.start);

	$('#clearBtn_1').on('click', board.clear);
}; // end init1()

var init2 = function() {
	var board = new ChessBoard('board_2', {
	  draggable: true,
	  dropOffBoard: 'trash',
	  sparePieces: true
	});

	$('#startBtn_2').on('click', board.start);

	$('#clearBtn_2').on('click', board.clear);
}; // end init2()

$(document).ready(init1);
$(document).ready(init2);
