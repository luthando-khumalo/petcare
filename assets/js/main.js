document.addEventListener('DOMContentLoaded', function () {
  var searchField = document.getElementById('searchField');
  var closeSearch = document.getElementById('closeSearch');
  var backTop = document.getElementById('back-top');

  if (closeSearch && searchField) {
    closeSearch.addEventListener('click', function () {
      searchField.value = '';
      searchField.focus();
    });
  }

  var courseOptions = document.querySelectorAll('.selectPricing .listItem[data-amount]');
  var amountField = document.querySelector('.left_default_amount');
  var totalAmount = document.querySelector('.total_donation_amount');

  courseOptions.forEach(function (courseOption) {
    courseOption.addEventListener('click', function () {
      var amount = courseOption.getAttribute('data-amount');

      if (amountField) {
        amountField.value = amount;
      }

      if (totalAmount) {
        totalAmount.textContent = 'R' + amount;
      }

      courseOptions.forEach(function (option) {
        option.classList.remove('active');
      });
      courseOption.classList.add('active');
    });
  });

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});