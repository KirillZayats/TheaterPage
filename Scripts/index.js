    const logos_block = document.getElementById('id_net_logos')
    const production_block = document.getElementById('id_production')

    var pos = { top: 0, left: 0, x: 0, y: 0 };
    var dx = 0;
    var dy = 0;
    var name_div;

    const mouseDownHandler = function(e) {
        name_div = get_name_div(e)
        
        if(name_div == "partners") {
            pos = {
                x: e.clientX,
                y: e.clientY,
                left: logos_block.scrollLeft,
                top: logos_block.scrollTop,
            };
        }
        if(name_div == "staging") {
            pos = {
                x: e.clientX,
                y: e.clientY,
                left: production_block.scrollLeft,
                top: production_block.scrollTop,
            };
        }
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

    };

    function get_name_div(mouse_event) {
        var name_div;
        for (let index = 0; index < mouse_event.path.length; index++) {
            if(mouse_event.path[index].className == "partners") {
                name_div = mouse_event.path[index].className
            }
            if(mouse_event.path[index].className == "staging") {
                name_div = mouse_event.path[index].className
            }
        }
        return name_div
    }

    const mouseMoveHandler = function(e) { 
        
        dx = e.clientX - pos.x;
        dy = e.clientY - pos.y;

        if(name_div == "partners") {
            logos_block.scrollTop = pos.top - dy;
            logos_block.scrollLeft = pos.left - dx;
        }
        if(name_div == "staging") {
            production_block.scrollTop = pos.top - dy;
            production_block.scrollLeft = pos.left - dx;
        }

    };

    const mouseUpHandler = function() {        
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);       
    };

    // Attach the handler
    document.addEventListener('mousedown', mouseDownHandler);
