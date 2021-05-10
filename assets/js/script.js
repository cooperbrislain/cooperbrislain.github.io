console.log('script');
$(() => {
    console.log("ready!");

    $(document).on('click', 'h4 span', e => {
        console.log(e.target);
        if($(e.target).is('.selected')) {
            $(e.target).removeClass('selected');
        } else {
            $(e.target).addClass('selected');
        }
    });
});
