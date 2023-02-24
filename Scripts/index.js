    const logos_block = document.getElementById('id_net_logos')
    const production_block = document.getElementById('id_production')

    const btm_open_bar_menu = document.querySelector(".bar_menu_img")
    const btm_close_bar_menu = document.querySelector(".bar_menu_close")

    btm_open_bar_menu.addEventListener('click', openNav)
    btm_close_bar_menu.addEventListener('click', closeNav)

    var spanElem = document.getElementsByClassName("text_cover");
    var pos = { top: 0, left: 0, x: 0, y: 0 };
    var dx = 0;
    var dy = 0;
    var check_open_bar_menu = 0;
    var name_div;

    // alert(window.pageYOffset); // вся ширина окна




    const btnUp = {
        el: document.querySelector('.btn_up'),
        show() {
          // удалим у кнопки класс btn-up_hide
          this.el.classList.remove('btn_up_hide');
        },
        hide() {
          // добавим к кнопке класс btn-up_hide
          this.el.classList.add('btn_up_hide');
        },
        addEventListener() {
          // при прокрутке содержимого страницы
          window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            scrollY > 300 ? this.show() : this.hide();
          });
          // при нажатии на кнопку .btn-up
          document.querySelector('.btn_up').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
      }
      
      btnUp.addEventListener();

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

    function openNav() {
        check_open_bar_menu = 1;
        document.getElementById("close_button").style.display = "inline";
        document.getElementById("bar_menu").style.display = "inline";
        document.getElementById("bar_menu").style.width = "230px";
        document.getElementById("bar_menu_img_id").style.display = "none";
        document.getElementById("phone_number_id").style.marginLeft = "383px"
        displaySpanSea()
      }

      function closeNav() {
        check_open_bar_menu = 0
        document.getElementById("close_button").style.display = "none";
        document.getElementById("bar_menu").style.width = "0";
        document.getElementById("bar_menu").style.display = "none";
        document.getElementById("bar_menu_img_id").style.display = "inline";
        document.getElementById("phone_number_id").style.marginLeft = "357px"
        displaySpanNone()
    }

    window.addEventListener("resize", function() {
        if(this.innerWidth > 993){
            document.getElementById("phone_number_id").style.marginLeft = "100px"
        } 
        if(this.innerWidth < 992){
            document.getElementById("phone_number_id").style.marginLeft = "30px"
        }
        if (this.innerWidth > 576) {
            document.getElementById("close_button").style.display = "none";
            document.getElementById("bar_menu").style.display = "inline";
            document.getElementById("bar_menu").style.width = "150px";
            document.getElementById("bar_menu_img_id").style.display = "none";
            displaySpanSea()
            
        } else {
            if(check_open_bar_menu == 0) {
                closeNav();
            }
            else if(check_open_bar_menu == 1) {
                document.getElementById("phone_number_id").style.marginLeft = "383px"

            } 
            document.getElementById("bar_menu").style.width = "230px";        
            document.getElementById("close_button").style.display = "inline";
            document.getElementById("close_button").style.ba = "inline";
        }

    }, false);

    function displaySpanSea() {
        var i;
        for (i = 0; i < spanElem.length - 1; i++) {
            spanElem[i].style.display = 'inline';
        }
      }

      function displaySpanNone() {
        var i;
        for (i = 0; i < spanElem.length - 1; i++) {
            spanElem[i].style.display = 'none';
        }
      }
      
