console.log('script');
$(() => {
    console.log("ready!");

    $(document).on('mouseOver', 'h4', e => {
        console.log(e.target);
    });
});
