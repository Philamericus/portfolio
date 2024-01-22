var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(document).ready(function($) {
 
    if( $('#search-wrap').length > 0 ) {

        var img_path = $('#innerSearchForm').attr('data-imgurl');

        //activate to results table
        var searchResultsTable = $('#searchResultsTable').DataTable({
            "ordering": false,
            "info":     false,
            "pageLength": 5,
            "pagingType": 'simple_numbers',
            language: {
                paginate: {
                    next: '<img src="' + img_path + '/slider-arrow-next-1.svg" alt="next">', // or '→'
                    previous: '<img src="' + img_path + '/slider-arrow-prev-1.svg" alt="prev">' // or '←' 
                }
            }
        });



        // check if a query has already been done.
        const urlParams     = new URLSearchParams(window.location.search);
        const search_query  = urlParams.get('query');

        if( search_query ) {
            $('#innerSearchForm #innerSearch').val(search_query);
            runSearch(search_query);
        }


        $('#globalSearchModal').on('shown.bs.modal', function() {
            $('#globalSearchForm').on('submit', function(e){
                e.preventDefault();
                
                var search_query = $('#globalSearch').val();
    
                if( search_query ) {
                    runSearch(search_query);
                }
            })
        });


        $('#innerSearchForm').on('submit', function(e){
            e.preventDefault();
            
            var srcPage = $('#globalSearchForm').attr('data-search');
            var search_query = $('#innerSearch').val();

            if( search_query ) {
                window.location.href = srcPage + '?query='+search_query;
            }
        })
    }
    else {

        $('#globalSearchModal').on('shown.bs.modal', function() {

            var srcPage = $('#globalSearchForm').attr('data-search');

            // on submit 
            $('#globalSearchForm').on('submit', function(e){
                e.preventDefault();
                var search_query = $('#globalSearch').val();
    
                if( search_query ) {
                    window.location.href = srcPage + '?query='+search_query;
                }
            })
        });
        
    }



    // filter buttons
    $('.results-filters .btn').on('click', function(){
        var filterBY = $(this).attr('data-filter');
        $('.results-filters .btn').removeClass('active');
        $(this).addClass('active');
        searchResultsTable.search(filterBY).draw();   
    });





    // RUN SEARCH QUERY
    function runSearch(search_query) {

        var current_count   = 0;

        // SEARCH INSIDE PAGES THAT USES THE SOLUTIONS TEMPLATE
        $.post(ajax_object.ajaxurl, {
            action: 'global_ajax',
            action_type: 'smart_ajax_search',
            search_query: search_query
        }, function(res) {
            
            parent  = $('#search-wrap');
            data    = res.data;
            found   = data.found;
            posts   = data.posts;

            blog_found      = ( data.blog_found ? data.blog_found : 0 );
            gates_found     = ( data.gates_found ? data.gates_found : 0 );
            company_found   = ( data.company_found ? data.company_found : 0 );

            // existing variables
            $(parent).find('.page-title .default').fadeOut('fast');
            $(parent).find('.page-title .results').fadeIn('fast');

            $(parent).find('.page-title .query').text(search_query);
            $(parent).find('.page-title .count').text(found);

            $(parent).find('.solutionsFilterCount').text('('+data.solutions_found+')');
            $(parent).find('.resourcesFilterCount').text('('+ (blog_found + gates_found) +')');
            $(parent).find('.companyFilterCount').text('('+ (company_found) +')');


            if(posts) { 
                // posts   = JSON.parse(posts);
                
                for (const property in posts) {
                    searchResultsTable.row.add([ posts[property] ]).draw();
                }
            }

        });


    }


});

}
/*
     FILE ARCHIVED ON 20:05:38 Oct 21, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:50:04 Jul 03, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 221.38
  exclusion.robots: 0.127
  exclusion.robots.policy: 0.111
  cdx.remote: 0.101
  esindex: 0.015
  LoadShardBlock: 183.271 (3)
  PetaboxLoader3.resolve: 178.222 (4)
  PetaboxLoader3.datanode: 75.883 (4)
  load_resource: 81.618
*/