let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    })
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    })

    function selectToggle () {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose () {
        let text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__curent');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }

    document.addEventListener('click', function(e){   
        if (e.target != document.querySelector('.select__body')){
        if (document.querySelector('.select').classList.contains('is-active')) {
            document.querySelector('.select').classList.remove('is-active');
        }
      }
      });
};

select ()

// document.addEventListener('click', function(e){   
//     if (e.target != document.querySelector('.select__body')){
//     if (document.querySelector('.select').classList.contains('is-active')) {
//         document.querySelector('.select').classList.remove('is-active');
//     }
//   }
//   });