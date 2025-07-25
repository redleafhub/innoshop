import './bootstrap';

import common from "./common";
window.inno = common;

import './bootstrap-validation';
import './footer';
import './header';
import './autocomplete';

const apiToken = $('meta[name="api-token"]').attr('content');
axios.defaults.headers.common['Authorization'] = 'Bearer ' + apiToken;
axios.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');

$(function () {
  common.getCarts();

  $(document).on('click', '.is-alert .btn-close', function () {
    let top = 40;
    $('.is-alert').each(function () {
      $(this).animate({top}, 100);
      top += $(this).outerHeight() + 10;
    });
  })

  $('.add-wishlist').on('click', function () {
    const id = $(this).attr('data-id');
    const isWishlist = $(this).attr('data-in-wishlist') * 1;
    inno.addWishlist(id, isWishlist, this)
  })

  $('.btn-add-cart').on('click', function () {
    const skuId = $(this).data('sku-id');
    inno.addCart({skuId}, this)
  })

  $(function() {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

  //Set app-content min height.
  common.setAppContentMinHeight();
  $(window).on('resize', common.setAppContentMinHeight)
})
