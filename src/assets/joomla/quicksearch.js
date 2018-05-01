jQuery(document).ready(function($){
    $('div.show-search').on('click', function(event){
        $(this).hide();
        $('.search-input-container').removeClass('hide-search-input');
        $('.logout-link').hide();
        $('#quicksearch').addClass('show-input').focus();
        setTimeout(function(){
	        $( "#jtmgio-adv-search-btn" ).fadeIn();
	    }, 0);
    });
    $('div.search-container').on('click', function(event){
        event.stopPropagation();
    });
    $( "#jtmgio-adv-search-btn" ).on( "click", function( vent ){
		window.location = "/administrator/index.php?option=com_jtmgiocore&view=advancedsearch&openmodal=1";
		vent.preventDefault();
		return;
	});
    $(document).on('click', function(event){
        $('.search-input-container').addClass('hide-search-input');
        $('#quicksearch').typeahead('val','');
        $('#quicksearch').removeClass('show-input');
        $('div.show-search').show();
        $( "#jtmgio-adv-search-btn" ).hide();
        $( ".logout-link" ).show();
    });
    
    var quicksearchCount = {
        count : 0
    };

    var queryCache = {};
    $('#quicksearch').typeahead({
        minLength: 3
        },
        {
        limit : 10,
        name: 'profiles',
        async: true,
        templates : {
            footer: function(query){
                if(quicksearchCount.count > 10 || !quicksearchCount.complete){
                    var footerElement = $("<div class='tt-selectable tt-footer' id='typeahead-see-all'>View All Matches</div>");
                    footerElement.on('click', function(event){
                        quickSearch();
                        event.preventDefault();
                    });
                    return footerElement;
                }
            },
            notFound: function(val){
                var queries = _.filter(val.query.split(new RegExp("\\s+")), function(que){
                    return que.length > 2;
                });
                if(queries.length > 0){
                    return '<p class="tt-field"> Found no results for the following query: ' + val.query + '</p>'; 
                }else{
                    return '<p class="tt-field"> At least one search term must contain 3 or more characters</p>'; 
                }
            },
            pending: function(val){
                return '<p class="tt-field loading-ellipsis">Searching</p>';
            },
            suggestion : function(val){
                var queries = _.map(val._query.split(new RegExp("\\s+")), function(q){ return q.toLowerCase(); });
                var suggestionParent = $("<p>");
                if(val.firstName || val.lastName){
                    val.name = ((val.firstName ? val.firstName : "") + (val.lastName ? " " + val.lastName : ""));
                }
                var fields = [
                    {key : "name"},
                    {key : "organizationName" },
                    {key : "email"},
                    {key : "memberType"},
                ];
                _.forEach(fields, function(field, index){
                    if(val[field.key]){
                        var newChild = $("<div></div>");
                        if(field.key === "name" || (val.memberTypeType === 1 && field.key === "organizationName")){
                            newChild.addClass("quick-search-name");
                        }else if(field.key === "organizationName" && val.organizationManager){
                            newChild.addClass("quick-search-key-contact");
                        }else{
                            newChild.addClass("quick-search-secondary-field");
                        }

                        //Add in message blurb to make organizationManager displayed separately from other fields. Could also wrap this and child div in a div to further keep them separated.
                        // i.e: <div>Key contact of:</div><div> cool dude </div> to <div><div>Key contact of:</div><div> cool dude</div></div>. Minor change
                        if(field.key === "organizationName" && val.organizationManager){
                            suggestionParent.append("<p class='quick-search-secondary-field'>Key contact of:<p>");
                        }

                        if(field.key === "email"){
                            newChild.addClass("quick-search-email");
                        }
                        //Do string matching and building here;
                        var hasMatch = false,
                            fieldValue = val[field.key].toLowerCase(),
                            matchIndexes = [];
                        _.each(queries, function(que){
                            if(fieldValue.indexOf(que) >= 0){
                                hasMatch = true;
                                 matchIndexes.push({ index : fieldValue.indexOf(que), endIndex : fieldValue.indexOf(que) + que.length});
                            }
                        });
                        if(hasMatch){
                            //reduce the matches into the necessary indexes, i.e the { field name: librarian } obj should match the query "ian lib rarian" with a single entry surrounding the entire field.
                            // <span class="highlight-query">librarian</span>
                            matchIndexes = _.sortBy(matchIndexes, "index");
                            for(var i = 0; i < matchIndexes.length - 1;){
                                if(i !== matchIndexes.length - 1){
                                    if(matchIndexes[i].index === matchIndexes[i + 1].index || matchIndexes[i].endIndex >= matchIndexes[i + 1].index){
                                        matchIndexes[i].endIndex = Math.max(matchIndexes[i + 1].endIndex, matchIndexes[i].endIndex);
                                        matchIndexes.splice(i + 1, 1);
                                    }else{
                                        i++;
                                    }
                                }else{
                                    i++;
                                }
                            }
                            var fieldValWithHighlight = "";
                            _.forEach(matchIndexes, function(match, ind){
                                // Add beginning section of the fieldValue that is not matching
                                if(ind === 0){
                                    fieldValWithHighlight += val[field.key].substring(0, match.index);
                                }else{
                                    fieldValWithHighlight += val[field.key].substring(matchIndexes[i - 1].endIndex, match.index);
                                }
                                //Add matching substring wrapped in an html class for highlighting purposes
                                fieldValWithHighlight += "<span class='highlight-query'>" + val[field.key].substring(match.index,match.endIndex);
                                fieldValWithHighlight += "</span>";
                                //Add the end of the val[field.key] if at the end of our matches
                                if(ind === matchIndexes.length - 1 && match.endIndex <= val[field.key].length - 1){
                                    fieldValWithHighlight += val[field.key].substring(match.endIndex);
                                }
                            });
                            newChild.html(fieldValWithHighlight);
                        }else{
                            newChild.text(val[field.key] );
                        }

                        suggestionParent.append(newChild);
                    }
                });
                return suggestionParent;
            }
        },
        display: function(){
            //Keep display text in search as the query from the user
            return $('#quicksearch').typeahead('val');
        },
        source: _.debounce(function( query, sync, async){
            //Cacheing will be contained here.
            var wasDefined = false;
            _.forEach(queryCache, function(val, key){
                if(query.trim().indexOf(key) !== -1){
                    wasDefined = val;
                }
            });
            if(wasDefined){
                wasDefined.then(function(res){
                    var matchingResults = [];
                    var queries = _.map(query.split(new RegExp("\\s+")), function(q){ return q.toLowerCase(); });
                    //Find results from less specific query that match more specific query params
                    matchingResults = _.filter(res.profiles, function(prof){
                        //Every query must have a match somewhere in the result
                        return _.every(queries, function(que){
                            return _.some(_.map(_.values(prof), function(prop){ return prop ? prop.toString().toLowerCase() : "";}), function(vall){
                                return vall.indexOf(que) !== -1;
                            });
                        });
                    });
                    if(matchingResults.length < 10 && !quicksearchCount.complete){
                        getProfiles(query, quicksearchCount, queryCache, async);
                    }else{
                        quicksearchCount.count = matchingResults.length;
                        async(matchingResults);
                    }
                });
            }else{
                //Clear queryCache to reset with new values
                queryCache = {};
                getProfiles(query, quicksearchCount, queryCache, async );

            }

            function getProfiles(query, quicksearchCount, queryCache, async){
                var queryValues = "?";
                var queries = _.filter(query.split(new RegExp("\\s+")), function(que){
                    return que.length > 0;
                });
                if(_.some(queries, function(que){ return que.length > 2; })){
                    _.forEach(queries, function(q, index){
                        if(q.length){
                            if(index !== 0){
                                queryValues += "&";
                            }
                            queryValues += ("term=" + q);
                        }
                    });   
                    var qsPromise = $.ajax({
                        url:'/quick-search-filter/v1/filtered-profiles' + queryValues + "&displayCount=10&threshold=1000",
                        type: "GET",
                        beforeSend: function(xhr){
                            //These cookies are gained from a global set in LaternVerde/index.php. Must find alternative way to inject them
                            xhr.setRequestHeader('X-jtmgio-Service-Id', window.GLOBAL_JOOMLA_DATA.service_id);
                            xhr.setRequestHeader('Authorization', window.GLOBAL_JOOMLA_DATA.jtmgioid_token);
                        },
                        dataType: "json",
                        success :  function(data){
                            if(data.profiles){
                                quicksearchCount.count = data.profiles.length;
                                quicksearchCount.complete = data.complete;
                            }
                            async(data.profiles);
                        }
                    });
                    queryCache[query.trim()] = qsPromise;
                }else{
                    async([]);
                }
            }
        }, 200)
    });

    //Redirect to profile on a suggestion selection
    $('#quicksearch').bind('typeahead:select', function(ev, suggestion, more) {
        window.location.href = '/administrator/index.php?option=com_jtmgiocore&view=profile&id=' + suggestion.id;
    });
    $('#quicksearch').bind("typeahead:render", function(){
        var selectableElements = $('.twitter-typeahead').find('.tt-selectable'),
            suggestions = $('.twitter-typeahead .tt-selectable:not(.tt-footer)'),
            menu = $('.twitter-typeahead .tt-menu'),
            innerMenu = $('.twitter-typeahead .tt-menu .tt-dataset-profiles');
        //Remove footers that were moved previously, due to typeahead not knowing to remove them. Prevents memory leak
        $('.twitter-typeahead .tt-menu > .tt-footer').remove();
        //Set height and set scrollable if more than 5 to show.
        if( selectableElements.length > 5){
            menu.addClass('tt-is-scrollable');
            //Grab the height of the first 5 suggestions to make just those visible
            var overallheight = 0,
            footerHeight = $('.twitter-typeahead .tt-footer').outerHeight();
            for(var i = 0; i < 5; i++){
                overallheight += $(suggestions[i]).outerHeight();
            }
            //add enough height to cover the name of the 6th suggestion. It is a magic number i know i know...
            overallheight += 22;
            //Set top of footer over the border on the menu.
            var distanceFromTop = menu.position().top + parseInt(menu.css("margin-top"), 10) + parseInt(menu.css("border-top-width"), 10);
            $('.twitter-typeahead .tt-dataset .tt-footer').detach().appendTo(menu).css("position", "fixed").css("top", overallheight + distanceFromTop);
            innerMenu.css("max-height", overallheight);
            menu.css("border-bottom", "" + footerHeight + "px solid white");
        }else{
            //Clean up styling added by the previous scrollable content if they exist;
            menu.removeClass('tt-is-scrollable');
            innerMenu.css("max-height", "");
            menu.css("border-bottom","");
        }
    });

    $('.twitter-typeahead').hide();

    //Go to profile list page if no suggestion is selected
    $('#search-btn').on('click', function(event){
        quickSearch();
        event.preventDefault();
    });

    function quickSearch()
    {
        var searchText = $('#quicksearch').val();
        var options = {
            url: '/core/profileSearch',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify( { searchCriteria : { quickSearch : searchText } } ),
            cache: false,
            success: function( data, textStatus, xhr )
            {
                window.location.href = '/administrator/index.php?option=com_jtmgiocore&view=advancedsearch&searchId=' + xhr.getResponseHeader('X-jtmgio-Id');
            }
        };

        $.ajax(options);
    }

});
