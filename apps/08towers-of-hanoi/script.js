'use strict';

$(document).ready(function () {
    //moving the block
    var block = null;
    $("[data-stack]").click(function () {
        if (block === null) {
            block = $(this).children().last().detach();
        } else {
            if (isLegal(block, $(this))) {
                $(this).append(block);
                block = null;
            }
            if (checkForWin()) {
                $('#announce-game-won').text('You Won!');
            }
        }

    });

    function isLegal($stack) {
        if ($stack.children().length === 0 || ($stack.children().last().attr('data-block')) > ($(block).attr('data-block'))) {
            return true
        }
        return false;
    };

    function checkForWin() {
        var gameWon = false;
        $('[data-stack]').each(function () {
            if ($(this).data('stack') !== 1 && $(this).children().length === 4) {
                gameWon = true;
            }
        });
        return gameWon;
    }



});