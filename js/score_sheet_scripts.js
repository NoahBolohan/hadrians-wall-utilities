function parseNaNOrInt(val) {

    var parsed_int = parseInt(val);

    if (isNaN(parsed_int)) {
      return 0;
    }
    return parsed_int;
}

// Custom show div
function show_height_hidden(div_id) {
    $(div_id).css(
        "visibility",
        "visible"
    );
    $(div_id).css(
        "max-height",
        "100%"
    );
}

// Custom hide div
function hide_height_hidden(div_id) {
    $(div_id).css(
        "visibility",
        "hidden"
    );
    $(div_id).css(
        "max-height",
        "0"
    );
}

// Toggle n_players modal
$(document).ready(
    function () {

        $('#modal_n_players').modal('toggle');
    }
);

// Create n_players columns
$(document).ready(
    function() {

        $.each(
            Array.from(Array(6), (e,i)=>i+1),
            function(key,value) {
                $(`#col_button_${value}_players`).on(
                    "click",
                    function() {

                        var width_p = 28;

                        var width_player_col = (100-width_p)/value;

                        $("#row_score_sheet").data(
                            "n_players",
                            value
                        );
                        reset_score_sheet();
                        generate_row_headers(value, width_p, width_player_col);
                        generate_n_score_columns(value, width_player_col);
                        $(`#modal_n_players`).modal("hide");
                        show_height_hidden("#row_score_sheet");
                    }
                );
            }
        )
    }
)

function reset_score_sheet() {

    $("#score_sheet_colgroup").empty();
    $("#score_sheet_thead").empty();
    $("#score_sheet_tbody").empty();
}

function generate_row_headers(n_players, width_p, width_player_col) {

    $("<col>").attr(
        {
            style : `width:${width_p}%;`
        }
    ).appendTo("#score_sheet_colgroup")

    for (var i=1; i <= n_players; i++) {
        $("<col>").attr(
            {
                style : `width:${width_player_col}%;`
            }
        ).appendTo("#score_sheet_colgroup")
    }

    // Score sheet HTML thead
    $("<tr>").attr(
        {
            style : "height:11vh;",
            id : "row_player_names"
        }
    ).appendTo("#score_sheet_thead");

    // Score sheet HTML tbody
    $("<tr>").attr(
        {
            style : "height:5vh;",
            id : "row_renown"
        }
    ).appendTo("#score_sheet_tbody");
    
    $("<tr>").attr(
        {
            style : "height:5vh;",
            id : "row_piety"
        }
    ).appendTo("#score_sheet_tbody");

    $("<tr>").attr(
        {
            style : "height:5vh;",
            id : "row_valor"
        }
    ).appendTo("#score_sheet_tbody");

    $("<tr>").attr(
        {
            style : "height:5vh;",
            id : "row_discipline"
        }
    ).appendTo("#score_sheet_tbody");

    $("<tr>").attr(
        {
            style : "height:5vh;",
            id : "row_path_cards"
        }
    ).appendTo("#score_sheet_tbody");

    $("<tr>").attr(
        {
            style : "height:5vh;",
            id : "row_disdain_final_tally"
        }
    ).appendTo("#score_sheet_tbody");

    $("<tr>").attr(
        {
            style : "height:5vh;",
            id : "row_total_score"
        }
    ).appendTo("#score_sheet_tbody");

    // Player names
    var cell = $("<td>").attr(
        {
            style : `width:${width_p}%; border-left: 0px; vertical-align: middle; text-align: center;`,
            class : "cell-info"
        }
    )

    cell.appendTo("#row_player_names");

    $("#button_change_n_players").on(
        "click",
        function () {
            $(`#modal_n_players`).modal("show");
        }
    )

    // Renown
    $("<th>").attr(
        {
            style : `width:${width_p}%`,
            scope : "row",
            class : "cell-info score_sheet_cell_no_padding"
        }
    ).text(
        "Renown"
    ).appendTo("#row_renown");

    // Piety
    $("<th>").attr(
        {
            style : `width:${width_p}%`,
            scope : "row",
            class : "cell-info score_sheet_cell_no_padding"
        }
    ).text(
        "Piety"
    ).appendTo("#row_piety");

    // Valor
    $("<th>").attr(
        {
            style : `width:${width_p}%`,
            scope : "row",
            class : "cell-info score_sheet_cell_no_padding"
        }
    ).text(
        "Valor"
    ).appendTo("#row_valor");

    // Discipline
    $("<th>").attr(
        {
            style : `width:${width_p}%`,
            scope : "row",
            class : "cell-info score_sheet_cell_no_padding"
        }
    ).text(
        "Discipline"
    ).appendTo("#row_discipline");

    // Path Cards
    $("<th>").attr(
        {
            style : `width:${width_p}%`,
            scope : "row",
            class : "cell-info score_sheet_cell_no_padding"
        }
    ).text(
        "Path Cards"
    ).appendTo("#row_path_cards");

    // Disdain Final Tally
    $("<th>").attr(
        {
            style : `width:${width_p}%`,
            scope : "row",
            class : "cell-info score_sheet_cell_no_padding"
        }
    ).text(
        "Disdain Final Tally"
    ).appendTo("#row_disdain_final_tally");

    // Total Score
    $("<th>").attr(
        {
            class : "cell-total score_sheet_cell_no_padding"
        }
    ).text(
        "Total Score"
    ).appendTo("#row_total_score");
}

function generate_n_score_columns(n_players, width_p) {
    for (var i=1; i <= n_players; i++) {

        // Player names
        var cell = $("<th>").attr(
            {
                id : `player_${i}_name`,
                style : `width:${width_p}%`,
                class : "cell-info"
            }
        ).appendTo("#row_player_names");
        
        var div = $("<div>").attr(
            {
                class : "row p-0 justify-content-center margin_auto",
                id : `row_player_${i}_name`
            }
        ).appendTo(cell);

        $("<input>").attr(
            {
                class : "bg-white col-12 input-vertical",
                type : "text",
                id : `input_player_${i}_name`,
                name : `player_${i}_name`,
                placeholder : `Player ${i}`,
                style : "height:9vh;"
            }
        ).appendTo(div);

        // Renown
        var cell = $("<td>").attr(
            {
                id : `col_player_${i}_renown`,
                style : `width:${width_p}%`,
                class : "cell-input"
            }
        ).appendTo("#row_renown");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_renown`,
                name : `player_${i}_renown`,
                class : "bg-white"
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Piety
        var cell = $("<td>").attr(
            {
                id : `col_player_${i}_piety`,
                style : `width:${width_p}%`,
                class : "cell-input"
            }
        ).appendTo("#row_piety");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_piety`,
                name : `player_${i}_piety`,
                class : "bg-white"
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Valor
        var cell = $("<td>").attr(
            {
                id : `col_player_${i}_valor`,
                style : `width:${width_p}%`,
                class : "cell-input"
            }
        ).appendTo("#row_valor");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_valor`,
                name : `player_${i}_valor`,
                class : "bg-white"
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Discipline
        var cell = $("<td>").attr(
            {
                id : `col_player_${i}_discipline`,
                style : `width:${width_p}%`,
                class : "cell-input"
            }
        ).appendTo("#row_discipline");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_discipline`,
                name : `player_${i}_discipline`,
                class : "bg-white"
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Path Cards
        var cell = $("<td>").attr(
            {
                id : `col_player_${i}_path_cards`,
                style : `width:${width_p}%`,
                class : "cell-input"
            }
        ).appendTo("#row_path_cards");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_path_cards`,
                name : `player_${i}_path_cards`,
                class : "bg-white"
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Disdain Final Tally
        var cell = $("<td>").attr(
            {
                id : `col_player_${i}_disdain_final_tally`,
                style : `width:${width_p}%`,
                class : "cell-input"
            }
        ).appendTo("#row_disdain_final_tally");
        
        $("<input>").attr(
            {
                type : "number",
                id : `input_player_${i}_disdain_final_tally`,
                name : `player_${i}_disdain_final_tally`,
                class : "bg-white"
            }
        ).prop(
            "required",
            true
        ).appendTo(cell);

        // Total Score
        var cell = $("<td>").attr(
            {
                id : `col_player_${i}_total_score`, 
                style : `width:${width_p}%`,
                class : "cell-total score_sheet_cell_no_padding"
            }
        ).appendTo("#row_total_score");
        
        $("<div>").attr(
            {
                type : "number",
                id : `div_player_${i}_total_score`
            }
        ).appendTo(cell);

        // Total to submit
        $("<input>").attr(
            {
                type : "number",
                id : `submit_player_${i}_total_score`,
                name : `player_${i}_total_score`
            }
        ).appendTo($("#total_scores_to_submit"));

        assign_player_event_listeners(i);
    }
}

// Recompute player total score
function recompute_player_total_score(i) {

    var total_score =  parseNaNOrInt(
        $(`#input_player_${i}_renown`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_piety`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_valor`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_discipline`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_path_cards`).val()
    ) + parseNaNOrInt(
        $(`#input_player_${i}_disdain_final_tally`).val()
    );

    if (total_score > 0) {

        $(`#div_player_${i}_total_score`).text(
            total_score
        )
    }
    else {
        $(`#div_player_${i}_total_score`).text(
            ""
        )
    }    
}

function assign_player_event_listeners(i) {

    // Update player total score on player_renown change
    $(`#input_player_${i}_renown`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on player_piety change
    $(`#input_player_${i}_piety`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on player_valor change
    $(`#input_player_${i}_valor`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on player_discipline change
    $(`#input_player_${i}_discipline`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on player_path_cards change
    $(`#input_player_${i}_path_cards`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )

    // Update player total score on player_disdain_final_tally change
    $(`#input_player_${i}_disdain_final_tally`).on(
        "change",
        function() {
            recompute_player_total_score(i)
        }
    )
}

function reset_inputs_for_all_players() {

    for (var i=1; i <= $("#row_score_sheet").data("n_players"); i++) {

        $(`#input_player_${i}_name`).val("");
        $(`#input_player_${i}_renown`).val("");
        $(`#input_player_${i}_piety`).val("");
        $(`#input_player_${i}_valor`).val("");
        $(`#input_player_${i}_discipline`).val("");
        $(`#input_player_${i}_path_cards`).val("");
        $(`#input_player_${i}_disdain_final_tally`).val("");

        $(`#div_player_${i}_total_score`).text("");
    }
}

$(document).ready(

    function () {
        $("#button_reset_sheet").on(
            "click",
            function () {
                reset_inputs_for_all_players()
            }
        )
    }
)

// Populate certain divs before submitting form
function populate_form_data() {

    // Player names
    for (var i=1; i <= $("#row_score_sheet").data("n_players"); i++) {
         if ($(`#input_player_${i}_name`).val() == "") {
            $(`#input_player_${i}_name`).val(`Player ${i}`);
         }
    }

    // Player total scores
    for (var i=1; i <= $("#row_score_sheet").data("n_players"); i++) {
        $(`#submit_player_${i}_total_score`).val(
            $(`#div_player_${i}_total_score`).text()
        )
    }

    // Number of players
    $("#submit_n_players").val(
        $("#row_score_sheet").data("n_players")
    )

    // Difficulty
    $("#submit_difficulty").val(
        $("input[name='col_difficulty_radio']:checked").val()
    );
}

$(document).ready(

    function () {
        $("input[name='col_difficulty_radio']").on(
            "change",
            function() {
                switch(
                    this.value
                ) {
                    case "easy":

                        $("#cell-input-easy").css(
                            "background-color",
                            "rgba(0,128,0,1)"
                        );

                        $("#cell-input-medium").css(
                            "background-color",
                            "rgba(255,255,0,0.1)"
                        );

                        $("#cell-input-hard").css(
                            "background-color",
                            "rgba(255,0,0,0.1)"
                        );
                        
                        break;

                    case "medium":

                        $("#cell-input-easy").css(
                            "background-color",
                            "rgba(0,128,0,0.1)"
                        );

                        $("#cell-input-medium").css(
                            "background-color",
                            "rgba(255,255,0,1)"
                        );

                        $("#cell-input-hard").css(
                            "background-color",
                            "rgba(255,0,0,0.1)"
                        );

                        break;

                    case "hard":

                        $("#cell-input-easy").css(
                            "background-color",
                            "rgba(0,128,0,0.1)"
                        );

                        $("#cell-input-medium").css(
                            "background-color",
                            "rgba(255,255,0,0.1)"
                        );

                        $("#cell-input-hard").css(
                            "background-color",
                            "rgba(255,0,0,1)"
                        );

                        break;
                }
            }
        );
    }
)