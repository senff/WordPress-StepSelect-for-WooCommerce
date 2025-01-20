/**
* @preserve StepSelect for WooCommerce 1.0 | @senff | GPL2 Licensed
*/

(function ($) {


// ============================================================================================

// INITIALIZE: give each row a number and block or hide all of them except the first

$('table.variations select').each(function(i) {
  $(this).closest('tr').addClass('stepSelect').attr('data-stepselect',i+1);
  if (i === 0) {
    $(this).closest('tr').addClass('stepSelect-open');
  } else {
    $(this).closest('tr').addClass('stepSelect-blocked');  
  }
});

// If you want select boxes to be visible until the previous option has been chosen, comment line 24 only.
// If you want select boxes to be fully hidden until the previous option has been chosen, comment line 25 only (default setting).

$('body').addClass('hide-selects');
// $('body').addClass('show-selects');

// ============================================================================================

// INITIALIZE: mark all default selections

$('table.variations select option[selected]').each(function(s) {
  $(this).attr('data-selection','default');
});

// ============================================================================================

// INITIALIZE: add progress indicator and check if there are default options

var allSteps = $('table.variations tr.stepSelect').length;
$('table.variations').before('<div class="stepSelect-indicator"><div class="stepSelect-steps">Options selected: <span class="thisStep">0</span> of <span class="allSteps">'+allSteps+'</span></div><div class="stepSelect-bar"><div class="stepSelect-progress"></div></div></div>');
stepSelect_checkAllFields();

// ============================================================================================

// ACTION: When an option is selected

$('table tr.stepSelect select').on('change', function() {
  stepSelect_checkAllFields();
  thisField = $(this).closest('tr').attr('data-stepselect');
  firstField = parseInt(thisField)+1;
  // Mode 0: everything to zero option
  // Mode 1: if there is a default option, use that
  // Mode 2: do not change anything
  stepSelect_resetFields(firstField,2);  
});

// ============================================================================================

$('button.reset_variations').on('click',function(){
  isReset = true;
});

// ============================================================================================

// This function resets the values of all fields (starting at "firstField") to their default values

function stepSelect_resetFields(firstField,mode) {

  for (let step = firstField; step < (allSteps+1); step++) {

    if (mode==0) {
      $('tr[data-stepselect='+step+']').find('select').prop('selectedIndex', 0); // set to Zero option
    }
  
    if (mode==1) {
      $('tr[data-stepselect='+step+']').find('select').prop('selectedIndex', 0); // set to Zero option
      $('tr[data-stepselect='+step+'] option').each(function(s) {
        if ($(this).attr('data-selection') !== undefined ){
          $(this).prop('selected', true);
        }
      });
    }

    if (mode==2) {

    }

  }  
}

// ============================================================================================

// This function goes through all the fields and shows/hides the ones necessary, and
// updates the progress bar.

function stepSelect_checkAllFields() {
  stepsDone = allSteps;
  for (let step = 1; step < (allSteps+1); step++) {
    var stepValue = $('tr[data-stepselect='+step+']').find('select').val();
    if (stepValue == '') {
      stepsDone = step-1;
      break;
    } 
  }

  for (let field = 1; field < (allSteps+1); field++) {
    if (field > (stepsDone+1)) {
      $('tr[data-stepselect='+field+']').removeClass('stepSelect-open').addClass('stepSelect-blocked');
    } else {
      $('tr[data-stepselect='+field+']').addClass('stepSelect-open').removeClass('stepSelect-blocked');      
    }
  }
  $('.stepSelect-indicator .thisStep').text(stepsDone);
  var stepSelectProgress = ((stepsDone / allSteps) * 100);  
  $('.stepSelect-indicator .stepSelect-progress').css('width',stepSelectProgress+'%');   
}

}(jQuery));


