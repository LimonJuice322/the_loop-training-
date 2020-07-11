'use strict'

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (document.querySelector('.promo-slider')) {
  let slider = document.querySelector('.promo-slider');
  let slider_ctrls = document.querySelector('.slider-controls');
  let btns_arr = Array.from(slider_ctrls.querySelectorAll('.control'));
  let slider_arr = Array.from(slider.querySelectorAll('.slider-item'));
  let cur_btn = slider_ctrls.querySelector('.control-current');
  let cur_slide = slider.querySelector('.item-current');

  btns_arr.forEach( (btn) => btn.addEventListener('click', function () {
    if (!(btn.classList.contains('control-current'))) {
      let next_num_btn = btns_arr.indexOf(btn);
      let cur_num_btn = btns_arr.indexOf(cur_btn);
      console.log(slider_arr[next_num_btn]);
      cur_btn.classList.remove('control-current');
      btn.classList.add('control-current');
      cur_btn = btn;
      slider_arr[next_num_btn].classList.add('item-current');
      slider_arr[cur_num_btn].classList.remove('item-current');
    }
  }));
}

if (document.querySelector('.subscribe-form')) {
  let form = document.querySelector('.subscribe-form');
  let form_input = form.querySelector('.user-email');

  form.addEventListener('submit', function (evt) {
    if (!form_input.value) {
      evt.preventDefault();
      form_input.classList.add('form-error');
      setTimeout( () => form_input.classList.remove('form-error'), 1000);
    } else {
      localStorage.setItem('email', form_input.value);
    }
  })
}
