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

    $(document).on('mouseover', 'h4 span', e => {
        e.preventDefault();
        const $this = $(e.target);
        console.log($this);
        if (!$this.get().over) {
            const $popUp = $('<div class="popup">');
            $popUp.text('test');
            $popUp.appendTo($this);
            $this.get().over = true;
        }
    });

    $(document).on('mouseout', 'h4 span', e => {
        e.preventDefault();
        const $this = $(e.target);
        $('.popup').remove();
        if ($this.get().over) $this.get().over = false;
    });
});
