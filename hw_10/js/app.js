$(document).ready(() => {

    $.ajax({
        url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
        headers: {
            "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }).then(data => {
        // console.log(data.response.map(counries => counries.code));
        fillSelect(data.response, '#main-select', 'code', 'name')

    })

    const getLeagues = (countryCode) => {
        $.ajax({
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            data: {
                code: countryCode
            },
            headers: {
                "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "useQueryString": true
            }
        }).then(data => {
            // console.log(data.response.map(i => i.league));
            fillSelect(data.response.map(i => i.league), '.league-select', 'id', 'name')

        })
    }
    const getTeams = (id) => {
        $.ajax({
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            data: {
                league: id,
                season: '2020'
            },
            headers: {
                "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "useQueryString": true
            }
        }).then(data => {
            // console.log(data.response);
            fillSelect(data.response[0]?.league.standings[0].map(i => i.team), '.selectTeam', 'id', 'name')
        })
    }

    const getPlayers = (id) => {
        $.ajax({
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            data: {
                team: id,
                season: '2020'
            },
            headers: {
                "x-rapidapi-key": "416f158753msh7d5c5353b0536e6p161137jsnbf07d7ea1bef",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "useQueryString": true
            }
        }).then(data => {
            // console.log(data.response.map(i => i.player));
            fillSelect(data.response.map(i => i.player), '.selectPlayer', 'id', 'name')
        })
    }


    let defaultOption = '<option value="">Not selected</option>'

    const fillSelect = (response, select, val, option) => {
        let selectOption = defaultOption;
        if (response?.length) {
            for (let i of response) {
                selectOption += `<option value="${i[val]}">${i[option]}</option>`
            }
        } else {
            selectOption = '<option value="">No information</option>'
        }
        $(select).html(selectOption);
    }


    $('#main-select').on('change', e => {
        $('select:not(#main-select)').html(defaultOption)
        getLeagues($('#main-select').val());
    })
    $('.league-select').on("change", e => {
        $('.selectPlayer').html(defaultOption)
        getTeams($('.league-select').val())
    })
    $('.selectTeam').on('change', e => {
        getPlayers($('.selectTeam').val());
    })
});